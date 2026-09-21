import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma, { isUniqueViolation } from '@goensemble/database';
import { getAuthUser } from '../lib/auth';
import { acceptedBookingsInclude, withAvailableSeats } from '../lib/trips';
import { isUuid, normalizeTogoPhone } from '../lib/util';

export const usersRoutes = new Elysia({ prefix: '/users', tags: ['Users'] })
  .get('/me', async ({ headers, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    let user = await prisma.user.findUnique({ where: { id: auth.id } });
    if (!user) {
      // Premier contact : profil non créé côté app.
      return { needProfile: true, profileComplete: false, id: auth.id, phone: auth.phone };
    }
    const vehicles = await prisma.vehicle.findMany({ where: { ownerId: user.id } });
    // `profileComplete` pilote l'onboarding mobile : tant qu'aucun vrai numéro
    // n'est renseigné (placeholder `pending:<id>`), l'app impose la saisie.
    return { ...user, vehicles, profileComplete: normalizeTogoPhone(user.phone) !== null };
  })
  // Vue agregee pour l'accueil et le profil : 1 seule requete HTTP au lieu de 4.
  // Chaque aller-retour vers Supabase coute ~150-250 ms -> gain sensible sur mobile.
  .get('/me/overview', async ({ headers, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    const user = await prisma.user.findUnique({ where: { id: auth.id } });
    if (!user) {
      return {
        profile: { needProfile: true, profileComplete: false, id: auth.id, phone: auth.phone },
        vehicles: [],
        myTrips: [],
        suggestions: [],
        bookings: { asPassenger: [], asDriver: [] },
      };
    }

    const [vehicles, myTrips, asPassenger, asDriver, suggestions] = await Promise.all([
      prisma.vehicle.findMany({ where: { ownerId: user.id }, orderBy: { createdAt: 'desc' } }),
      prisma.trip.findMany({
        where: { driverId: user.id },
        include: { driver: true, vehicle: true, ...acceptedBookingsInclude },
        orderBy: { departureTime: 'desc' },
        take: 100,
      }),
      prisma.booking.findMany({
        where: { passengerId: user.id },
        include: { trip: { include: { driver: true, vehicle: true } } },
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
      prisma.booking.findMany({
        where: { trip: { driverId: user.id } },
        include: { trip: { include: { vehicle: true } }, passenger: true },
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
      // Memes regles que GET /trips/search par defaut : trajets actifs a venir,
      // hors trajets de l'appelant (on ne se propose pas son propre trajet).
      prisma.trip.findMany({
        where: {
          status: 'ACTIVE',
          departureTime: { gte: new Date() },
          driverId: { not: user.id },
        },
        include: { driver: true, vehicle: true, ...acceptedBookingsInclude },
        orderBy: { departureTime: 'asc' },
        take: 5,
      }),
    ]);

    return {
      profile: { ...user, vehicles, profileComplete: normalizeTogoPhone(user.phone) !== null },
      vehicles,
      myTrips: myTrips.map(withAvailableSeats),
      suggestions: suggestions.map(withAvailableSeats),
      bookings: { asPassenger, asDriver },
    };
  })
  .put('/me', async ({ headers, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    // Téléphone fourni ? On le normalise (E.164) puis on vérifie sa disponibilité.
    // Le téléphone est la clé de confiance du produit : il n'est révélé qu'après
    // une réservation acceptée.
    const requestedPhone = body.phone != null ? normalizeTogoPhone(body.phone) : null;
    if (body.phone != null && !requestedPhone) {
      set.status = 400;
      return { error: 'Numéro invalide. Format attendu : +228 suivi de 8 ou 9 chiffres.' };
    }

    if (requestedPhone) {
      // Un téléphone porté par un seul utilisateur.
      const existing = await prisma.user.findUnique({
        where: { phone: requestedPhone },
        select: { id: true },
      });
      if (existing && existing.id !== auth.id) {
        set.status = 409;
        return { error: 'Ce numéro est déjà utilisé par un autre compte.' };
      }
    }

    // `auth.phone` vaut `''` pour un compte Google → normalizeTogoPhone → null.
    const authPhone = normalizeTogoPhone(auth.phone);

    try {
      const user = await prisma.user.upsert({
        where: { id: auth.id },
        update: {
          fullName: body.fullName ?? undefined,
          photoUrl: body.photoUrl ?? undefined,
          phone: requestedPhone ?? undefined,
        },
        // Le placeholder "pending:<auth.id>" est unique par utilisateur → élimine
        // le conflit P2002 sur la colonne `phone` pour les comptes Google sans tel.
        create: {
          id: auth.id,
          phone: authPhone ?? requestedPhone ?? `pending:${auth.id}`,
          fullName: body.fullName ?? 'Utilisateur',
          photoUrl: body.photoUrl,
        },
      });
      return user;
    } catch (error) {
      // 2e défense au cas où la contrainte @unique `phone` créerait un conflit
      // (ex. données legacy). On renvoie un 409 exploitable côté mobile.
      if (isUniqueViolation(error)) {
        set.status = 409;
        return { error: 'Conflit de téléphone. Veuillez réessayer ou contacter le support.' };
      }
      throw error; // → gestion globale d'erreur → 500
    }
  }, {
    body: t.Object({
      fullName: t.Optional(t.String()),
      photoUrl: t.Optional(t.String()),
      phone: t.Optional(t.String()),
    }),
  })
  // Profil public d'un utilisateur (conducteur vu par un passager).
  // Le telephone n'est revele que si une reservation ACCEPTED relie les deux
  // utilisateurs (regle UX : contact visible apres confirmation).
  .get('/:id', async ({ headers, params, set }) => {
    if (!isUuid(params.id)) { set.status = 404; return { error: 'Utilisateur introuvable' }; }

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) { set.status = 404; return { error: 'Utilisateur introuvable' }; }

    const auth = await getAuthUser(headers.authorization);
    const isSelf = auth?.id === user.id;

    let reveal = isSelf;
    if (!reveal && auth) {
      const link = await prisma.booking.findFirst({
        where: {
          status: 'ACCEPTED',
          OR: [
            { passengerId: auth.id, trip: { driverId: user.id } },
            { passengerId: user.id, trip: { driverId: auth.id } },
          ],
        },
        select: { id: true },
      });
      reveal = Boolean(link);
    }

    const vehicles = await prisma.vehicle.findMany({
      where: { ownerId: user.id },
      orderBy: { createdAt: 'desc' },
    });

    // On ne divulgue jamais le placeholder interne `pending:<id>`.
    const phone = normalizeTogoPhone(user.phone);
    return {
      id: user.id,
      fullName: user.fullName,
      photoUrl: user.photoUrl,
      rating: user.rating,
      tripsCount: user.tripsCount,
      vehicles,
      phone: reveal ? phone : null,
      phoneHidden: !reveal || !phone,
    };
  }, {
    params: t.Object({ id: t.String() }),
  });