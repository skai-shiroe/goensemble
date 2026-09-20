import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';
import { isUuid } from '../lib/util';

export const vehiclesRoutes = new Elysia({ prefix: '/vehicles', tags: ['Vehicles'] })
  .get('/', async ({ headers, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }
    return prisma.vehicle.findMany({ where: { ownerId: auth.id }, orderBy: { createdAt: 'desc' } });
  })
  .post('/', async ({ headers, body, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }

    try {
      const vehicle = await prisma.vehicle.create({
        data: { ownerId: auth.id, ...body },
      });
      return vehicle;
    } catch (error) {
      set.status = 409;
      return { error: 'Immatriculation déjà utilisée ou données invalides', detail: String((error as Error).message) };
    }
  }, {
    body: t.Object({
      model: t.String(),
      plate: t.String(),
      color: t.Optional(t.String()),
      seats: t.Optional(t.Number({ minimum: 1, maximum: 9 })),
    }),
  })
  // Suppression d'un vehicule : refusee si un trajet a venir l'utilise encore
  // (sinon les trajets publies perdraient leur vehicule).
  .delete('/:id', async ({ headers, params, set }) => {
    const auth = await getAuthUser(headers.authorization);
    if (!auth) { set.status = 401; return { error: 'Authentification requise' }; }
    if (!isUuid(params.id)) { set.status = 404; return { error: 'Vehicule introuvable' }; }

    const vehicle = await prisma.vehicle.findFirst({
      where: { id: params.id, ownerId: auth.id },
    });
    if (!vehicle) { set.status = 404; return { error: 'Vehicule introuvable' }; }

    const activeTrips = await prisma.trip.count({
      where: {
        vehicleId: vehicle.id,
        status: 'ACTIVE',
        departureTime: { gte: new Date() },
      },
    });
    if (activeTrips > 0) {
      set.status = 409;
      return { error: `Ce vehicule est utilise par ${activeTrips} trajet(s) a venir.` };
    }

    await prisma.vehicle.delete({ where: { id: vehicle.id } });
    return { deleted: true, id: vehicle.id };
  }, {
    params: t.Object({ id: t.String() }),
  });