import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';
import { isUuid } from '../lib/util';

export const usersRoutes = new Elysia({ prefix: '/users', tags: ['Users'] })
  .get('/me', async ({ headers, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    let user = await prisma.user.findUnique({ where: { id: auth.id } });
    if (!user) {
      // Premier contact : profil non créé côté app.
      return { needProfile: true, id: auth.id, phone: auth.phone };
    }
    const vehicles = await prisma.vehicle.findMany({ where: { ownerId: user.id } });
    return { ...user, vehicles };
  })
  .put('/me', async ({ headers, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    const user = await prisma.user.upsert({
      where: { id: auth.id },
      update: {
        fullName: body.fullName ?? undefined,
        photoUrl: body.photoUrl ?? undefined,
      },
      create: {
        id: auth.id,
        phone: auth.phone ?? body.phone ?? 'inconnu',
        fullName: body.fullName ?? 'Utilisateur',
        photoUrl: body.photoUrl,
      },
    });
    return user;
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

    return {
      id: user.id,
      fullName: user.fullName,
      photoUrl: user.photoUrl,
      rating: user.rating,
      tripsCount: user.tripsCount,
      vehicles,
      phone: reveal ? user.phone : null,
      phoneHidden: !reveal,
    };
  }, {
    params: t.Object({ id: t.String() }),
  });