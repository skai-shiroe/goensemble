import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { healthRoutes } from './routes/health';
import { authRoutes } from './routes/auth';
import { usersRoutes } from './routes/users';
import { vehiclesRoutes } from './routes/vehicles';
import { tripsRoutes } from './routes/trips';
import { bookingsRoutes } from './routes/bookings';

const app = new Elysia()
  .use(cors())
  .use(healthRoutes)
  .use(authRoutes)
  .use(usersRoutes)
  .use(vehiclesRoutes)
  .use(tripsRoutes)
  .use(bookingsRoutes)
  .onError(({ code, set, error }) => {
    const message = error instanceof Error ? error.message : String(error ?? code);
    const rawStatus =
      code === 'VALIDATION' ? 400 : code === 'NOT_FOUND' ? 404 : (set.status as number) ?? 500;
    const status = Number(rawStatus) || 500;
    if (status >= 500) console.error('[API] Erreur:', message);
    set.status = status;
    return { error: message };
  });

const port = Number(process.env.PORT ?? 3000);
app.listen(port);
console.log('[API] GO Ensemble demarree sur http://0.0.0.0:' + port);