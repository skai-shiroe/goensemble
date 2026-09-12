import { Elysia } from 'elysia';
import { t } from 'elysia';
import { supabaseAnon } from '../lib/supabase';

// Auth telephon OTP via Supabase.
// Tant que le fournisseur SMS n'est pas configure, /auth/otp repondra
// une erreur explicite "SMS provider not configured". Aucun changement a faire apres.

export const authRoutes = new Elysia({ prefix: '/auth' })
  .post('/otp', async ({ body, set }) => {
    const { data, error } = await supabaseAnon.auth.signInWithOtp({
      phone: body.phone,
      options: { channel: 'sms' },
    });
    if (error) {
      set.status = 400;
      return { error: error.message };
    }
    return { ok: true, message: 'Code envoyé', data };
  }, {
    body: t.Object({ phone: t.String() }),
  })
  .post('/verify', async ({ body, set }) => {
    const { data, error } = await supabaseAnon.auth.verifyOtp({
      phone: body.phone,
      token: body.token,
      type: 'sms',
    });
    if (error || !data.session) {
      set.status = 400;
      return { error: error?.message ?? 'Code invalide' };
    }
    return { ok: true, accessToken: data.session.access_token, user: data.session.user };
  }, {
    body: t.Object({ phone: t.String(), token: t.String() }),
  });