import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

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
  .get('/search', async ({ query }) => {
    const fromLat = Number(query.fromLat);
    const fromLng = Number(query.fromLng);
    const toLat = Number(query.toLat);
    const toLng = Number(query.toLng);
    if ([fromLat, fromLng, toLat, toLng].some((v) => Number.isNaN(v))) return [] as unknown[];

    const trips = await prisma.trip.findMany({
      where: {
        status: 'ACTIVE',
        departureTime: { gte: new Date() },
      },
      include: { driver: true, vehicle: true },
      take: 100,
    });

    // Matching V1 : tri par proximite du depart + arrivee (Haversine)
    return trips
      .map((trip) => ({
        ...trip,
        matchScore:
          haversineKm(fromLat, fromLng, trip.fromLat, trip.fromLng) +
          haversineKm(toLat, toLng, trip.toLat, trip.toLng),
      }))
      .sort((a, b) => a.matchScore - b.matchScore)
      .slice(0, 50);
  });