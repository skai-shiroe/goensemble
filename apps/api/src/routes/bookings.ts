import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';
import { isUuid } from '../lib/util';

type FlatTrip = { id: string; driver_id: string; seats: number };
type BookingStatusLiteral = 'ACCEPTED' | 'REJECTED' | 'CANCELLED';

function asHttpError(message: string, status: number): Error & { status: number } {
  return Object.assign(new Error(message), { status });
}

// Anti-surreservation : verrouillage de la ligne Trip (FOR UPDATE)
// + comptage des places ACCEPTED avant insertion (transaction).

export const bookingsRoutes = new Elysia({ prefix: '/bookings', tags: ['Bookings'] })
  .get('/mine', async ({ headers, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    // asPassenger : mes demandes ; asDriver : demandes recues sur mes trajets
    const [asPassenger, asDriver] = await Promise.all([
      prisma.booking.findMany({
        where: { passengerId: auth.id },
        include: { trip: { include: { driver: true, vehicle: true } } },
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
      prisma.booking.findMany({
        where: { trip: { driverId: auth.id } },
        include: { trip: { include: { vehicle: true } }, passenger: true },
        orderBy: { createdAt: 'desc' },
        take: 100,
      }),
    ]);

    return { asPassenger, asDriver };
  })
  .post('/', async ({ headers, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }
    if (!isUuid(body.tripId)) { set.status = 404; return { error: 'Trajet introuvable' }; }
    // Assure que le passager existe cote app (FK User)
    await prisma.user.upsert({
      where: { id: auth.id },
      update: {},
      create: { id: auth.id, phone: auth.phone ?? 'inconnu', fullName: 'Passager' },
    });
    const requestedSeats = body.seats ?? 1;

    try {
      const booking = await prisma.$transaction(async (tx) => {
        const rows = await tx.$queryRaw<FlatTrip[]>`
          SELECT id, "driverId" AS driver_id, seats FROM "Trip" WHERE id = CAST(${body.tripId} AS uuid) FOR UPDATE
        `;
        const trip = rows[0];
        if (!trip) throw asHttpError('Trajet introuvable', 404);
        if (trip.driver_id === auth.id) throw asHttpError('Impossible de reserver son propre trajet', 400);

        const existing = await tx.booking.findFirst({
          where: { tripId: body.tripId, passengerId: auth.id },
        });
        if (existing) throw asHttpError('Demande deja envoyee (statut: ' + existing.status + ')', 409);

        const accepted = await tx.booking.aggregate({
          where: { tripId: body.tripId, status: 'ACCEPTED' },
          _sum: { seats: true },
        });
        const seatsLeft = trip.seats - (accepted._sum.seats ?? 0);
        if (requestedSeats > seatsLeft) {
          throw asHttpError('Plus assez de places disponibles (' + seatsLeft + ' restante(s))', 409);
        }

        return tx.booking.create({
          data: { tripId: body.tripId, passengerId: auth.id, seats: requestedSeats },
          include: { trip: { include: { driver: true, vehicle: true } }, passenger: true },
        });
      });
      return booking;
    } catch (error) {
      const e = error as Error & { status?: number };
      set.status = e.status && e.status >= 400 ? e.status : 500;
      return { error: e.message ?? String(error) };
    }
  }, {
    body: t.Object({ tripId: t.String(), seats: t.Optional(t.Number({ minimum: 1 })) }),
  })
  .patch('/:id', async ({ headers, params, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }
    if (!isUuid(params.id)) { set.status = 404; return { error: 'Reservation introuvable' }; }

    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: { trip: true },
    });
    if (!booking) { set.status = 404; return { error: 'Reservation introuvable' }; }

    const isDriver = booking.trip.driverId === auth.id;
    const isPassenger = booking.passengerId === auth.id;
    if (body.status !== 'CANCELLED' && !isDriver) {
      set.status = 403;
      return { error: 'Seul le conducteur peut accepter/refuser' };
    }
    if (body.status === 'CANCELLED' && !isPassenger && !isDriver) {
      set.status = 403;
      return { error: 'Non autorise' };
    }

    try {
      if (body.status === 'ACCEPTED') {
        return await prisma.$transaction(async (tx) => {
          const rows = await tx.$queryRaw<FlatTrip[]>`
            SELECT id, "driverId" AS driver_id, seats FROM "Trip" WHERE id = CAST(${booking.tripId} AS uuid) FOR UPDATE
          `;
          const trip = rows[0];
          if (!trip) throw asHttpError('Trajet introuvable', 404);
          const accepted = await tx.booking.aggregate({
            where: { tripId: booking.tripId, status: 'ACCEPTED' },
            _sum: { seats: true },
          });
          const seatsLeft = trip.seats - (accepted._sum.seats ?? 0);
          if (booking.seats > seatsLeft) throw asHttpError('Plus assez de places disponibles', 409);
          return tx.booking.update({ where: { id: booking.id }, data: { status: 'ACCEPTED' as const } });
        });
      }
      return prisma.booking.update({ where: { id: booking.id }, data: { status: body.status as BookingStatusLiteral } });
    } catch (error) {
      const e = error as Error & { status?: number };
      set.status = e.status && e.status >= 400 ? e.status : 500;
      return { error: e.message ?? String(error) };
    }
  }, {
    body: t.Object({
      status: t.Enum({ ACCEPTED: 'ACCEPTED' as const, REJECTED: 'REJECTED' as const, CANCELLED: 'CANCELLED' as const }),
    }),
  });