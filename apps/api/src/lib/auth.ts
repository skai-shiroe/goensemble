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
  return { id: data.user.id, phone: data.user.phone ?? null };
}

export function unauthorized(message = 'Authentification requise') {
  return { status: 401 as const, body: { error: message } };
}