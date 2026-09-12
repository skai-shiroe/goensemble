import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL ?? '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
const anonKey = process.env.SUPABASE_ANON_KEY ?? '';

if (!url || !serviceKey || !anonKey) {
  console.warn('[lib/supabase] Variables SUPABASE_* manquantes dans .env');
}

// Client admin (service_role) pour la gestion des utilisateurs et envoi OTP
export const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Client public (anon key)
export const supabaseAnon = createClient(url, anonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});