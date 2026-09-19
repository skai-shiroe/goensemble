import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';
import { acceptedBookingsInclude, haversineKm, withAvailableSeats } from '../lib/trips';
import { clampLimit, isUuid } from '../lib/util';

export const tripsRoutes = new Elysia({ prefix: '/trips', tags: ['Trips'] })
  .post('/', async ({ headers, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    const vehicle = await prisma.vehicle.findFirst({ where: { id: body.vehicleId, ownerId: auth.id } });
    if (!vehicle) { set.status = 400; return { error: 'Vehicule introuvable ou non possede' }; }

    await prisma.user.upsert({
      where: { id: auth.id },
      update: {},
      create: { id: auth.id, phone: auth.phone ?? 'inconnu', fullName: 'Utilisateur' },
    });

    const waypointItems = (body.waypoints ?? []).map((w: { label: string; lat: number; lng: number; order?: number }, i: number) => ({ label: w.label, lat: w.lat, lng: w.lng, order: w.order ?? i }));
    const trip = await prisma.trip.create({
      data: {
        driverId: auth.id,
        vehicleId: body.vehicleId,
        fromLabel: body.fromLabel,
        toLabel: body.toLabel,
        fromLat: body.fromLat,
        fromLng: body.fromLng,
        toLat: body.toLat,
        toLng: body.toLng,
        departureTime: new Date(body.departureTime),
        arrivalTime: body.arrivalTime ? new Date(body.arrivalTime) : undefined,
        contribution: body.contribution ?? 0,
        seats: body.seats ?? 4,
        isRecurring: body.isRecurring ?? false,
        waypoints: waypointItems.length ? { create: waypointItems } : undefined,
      },
      include: { driver: true, vehicle: true, waypoints: true },
    });
    await prisma.user.update({ where: { id: auth.id }, data: { tripsCount: { increment: 1 } } });
    return trip;
  }, {
    body: t.Object({
      vehicleId: t.String(),
      fromLabel: t.String(),
      toLabel: t.String(),
      fromLat: t.Number(),
      fromLng: t.Number(),
      toLat: t.Number(),
      toLng: t.Number(),
      departureTime: t.String(),
      arrivalTime: t.Optional(t.String()),
      contribution: t.Optional(t.Number()),
      seats: t.Optional(t.Number({ minimum: 1 })),
      isRecurring: t.Optional(t.Boolean()),
      waypoints: t.Optional(
        t.Array(t.Object({ label: t.String(), lat: t.Number(), lng: t.Number(), order: t.Optional(t.Number()) })),
      ),
    }),
  })
  .get('/search', async ({ query, headers }) => {
    const auth = await getAuthUser(headers.authorization);
    const fromLat = Number(query.fromLat);
    const fromLng = Number(query.fromLng);
    const toLat = Number(query.toLat);
    const toLng = Number(query.toLng);
    const coords = [fromLat, fromLng, toLat, toLng];
    const hasCoords = coords.every((v) => Number.isFinite(v));
    const q = typeof query.q === 'string' ? query.q.trim() : '';
    const limit = clampLimit(query.limit);

    const trips = await prisma.trip.findMany({
      where: {
        status: 'ACTIVE',
        departureTime: { gte: new Date() },
        // On ne propose jamais ses propres trajets
        ...(auth ? { driverId: { not: auth.id } } : {}),
        ...(q
          ? {
              OR: [
                { fromLabel: { contains: q, mode: 'insensitive' as const } },
                { toLabel: { contains: q, mode: 'insensitive' as const } },
              ],
            }
          : {}),
      },
      include: { driver: true, vehicle: true, ...acceptedBookingsInclude },
      orderBy: hasCoords ? undefined : { departureTime: 'asc' },
      take: hasCoords ? 100 : limit,
    });

    const withSeats = trips.map(withAvailableSeats);
    if (!hasCoords) return withSeats;

    // Matching V1 : tri par proximite du depart + arrivee (Haversine)
    return withSeats
      .map((trip) => ({
        ...trip,
        matchScore:
          haversineKm(fromLat, fromLng, trip.fromLat, trip.fromLng) +
          haversineKm(toLat, toLng, trip.toLat, trip.toLng),
      }))
      .sort((a, b) => a.matchScore - b.matchScore)
      .slice(0, limit);
  }, {
    query: t.Object({
      fromLat: t.Optional(t.String()),
      fromLng: t.Optional(t.String()),
      toLat: t.Optional(t.String()),
      toLng: t.Optional(t.String()),
      q: t.Optional(t.String()),
      limit: t.Optional(t.String()),
    }),
  })
  .get('/mine', async ({ headers, query, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    const upcoming = query.upcoming === 'true';
    const trips = await prisma.trip.findMany({
      where: {
        driverId: auth.id,
        ...(upcoming ? { status: 'ACTIVE' as const, departureTime: { gte: new Date() } } : {}),
      },
      include: { driver: true, vehicle: true, waypoints: true, ...acceptedBookingsInclude },
      orderBy: { departureTime: upcoming ? 'asc' : 'desc' },
      take: clampLimit(query.limit),
    });
    return trips.map(withAvailableSeats);
  }, {
    query: t.Object({
      upcoming: t.Optional(t.String()),
      limit: t.Optional(t.String()),
    }),
  })
  .get('/:id', async ({ headers, params, set }) => {
    if (!isUuid(params.id)) { set.status = 404; return { error: 'Trajet introuvable' }; }

    const trip = await prisma.trip.findUnique({
      where: { id: params.id },
      include: { driver: true, vehicle: true, waypoints: true, ...acceptedBookingsInclude },
    });
    if (!trip) { set.status = 404; return { error: 'Trajet introuvable' }; }

    // Statut de la demande du passager connecte (null si non connecte / conducteur)
    const auth = await getAuthUser(headers.authorization);
    let myBooking: { id: string; status: string; seats: number } | null = null;
    if (auth) {
      const booking = await prisma.booking.findFirst({
        where: { tripId: trip.id, passengerId: auth.id },
        select: { id: true, status: true, seats: true },
      });
      myBooking = booking ?? null;
    }

    return { ...withAvailableSeats(trip), myBooking };
  }, {
    params: t.Object({ id: t.String() }),
  });