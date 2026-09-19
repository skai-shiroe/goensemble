import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { healthRoutes } from './routes/health';
import { authRoutes } from './routes/auth';
import { usersRoutes } from './routes/users';
import { vehiclesRoutes } from './routes/vehicles';
import { tripsRoutes } from './routes/trips';
import { bookingsRoutes } from './routes/bookings';

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      documentation: {
        info: {
          title: 'GO Ensemble API',
          version: '0.1.0',
          description: 'API metier du covoiturage GO Ensemble (Togo).',
        },
        tags: [
          { name: 'Health', description: 'Sante API + DB' },
          { name: 'Auth', description: 'Authentification (OTP SMS, Google)' },
          { name: 'Users', description: 'Profils utilisateurs' },
          { name: 'Vehicles', description: 'Vehicules des conducteurs' },
          { name: 'Trips', description: 'Publication et recherche de trajets' },
          { name: 'Bookings', description: 'Reservations (anti-surreservation)' },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              description: 'JWT Supabase obtenu via /auth/verify ou /auth/google',
            },
          },
        },
        security: [{ bearerAuth: [] }],
      },
    }),
  )
  .use(healthRoutes)
  .use(authRoutes)
  .use(usersRoutes)
  .use(vehiclesRoutes)
  .use(tripsRoutes)
  .use(bookingsRoutes)
  .onError(({ code, set, error }) => {
    const message = error instanceof Error ? error.message : String(error ?? code);
    const status =
      code === 'VALIDATION' ? 400 : code === 'NOT_FOUND' ? 404 : (set.status as number) ?? 500;
    if (status >= 500) console.error('[API] Erreur:', message);
    set.status = status as number;
    return { error: message };
  });

const port = Number(process.env.PORT ?? 3000);
app.listen(port);
console.log('[API] GO Ensemble demarree sur http://0.0.0.0:' + port);
console.log('[API] Swagger UI : http://localhost:' + port + '/swagger');