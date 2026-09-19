import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';

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
  });