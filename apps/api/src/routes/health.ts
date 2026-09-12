import { Elysia } from 'elysia';
import prisma from '@goensemble/database';

export const healthRoutes = new Elysia({ prefix: '/health' }).get('/', async () => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { status: 'ok', db: 'connected', time: new Date().toISOString() };
  } catch (error) {
    return { status: 'degraded', db: 'error', message: String((error as Error).message) };
  }
});