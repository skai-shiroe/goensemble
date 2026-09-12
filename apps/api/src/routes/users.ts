import { Elysia } from 'elysia';
import { t } from 'elysia';
import prisma from '@goensemble/database';
import { getAuthUser } from '../lib/auth';

export const usersRoutes = new Elysia({ prefix: '/users' })
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
  });