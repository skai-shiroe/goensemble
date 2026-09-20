import { supabase } from './supabase';

export interface AuthUser {
  id: string;
  phone: string | null;
}

// Extrait l'utilisateur authentifie depuis le header Authorization: Bearer <jwt>
export async function getAuthUser(authorization?: string | null): Promise<AuthUser | null> {
  const token = authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return null;
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return null;
  // Supabase renvoie `''` (et non `null`) pour un compte OAuth sans téléphone.
  // On normalise en `null` : sinon `'' ?? x` laisse passer la chaîne vide, qui
  // provoque une violation d'unicité dès le 2e compte Google (colonne @unique).
  const phone = data.user.phone?.trim();
  return { id: data.user.id, phone: phone ? phone : null };
}

export function unauthorized(message = 'Authentification requise') {
  return { status: 401 as const, body: { error: message } };
}