import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

/**
 * Callback OAuth (Google via Supabase) — logique partagee et idempotente.
 *
 * Le retour de l'authentification peut arriver par DEUX chemins en meme temps :
 *  1. le navigateur systeme (WebBrowser.openAuthSessionAsync) -> login.tsx
 *  2. le deep link goensemble://auth-callback -> app/auth-callback.tsx
 *
 * Un code PKCE ne pouvant etre echange qu'UNE fois, les deux appels sont
 * dedoublonnes ici (promesse partagee) et tolerants aux courses :
 * si un autre chemin a deja etabli la session, on la renvoie au lieu d'echouer.
 */

export type OAuthCallbackParams = {
  code?: string;
  access_token?: string;
  refresh_token?: string;
  error?: string;
  error_description?: string;
};

/** Extrait les parametres du callback depuis une URL (query puis fragment). */
export function parseCallbackUrl(url: string): OAuthCallbackParams {
  const parse = (src: string): Record<string, string> => {
    const out: Record<string, string> = {};
    for (const pair of src.split('&')) {
      const idx = pair.indexOf('=');
      if (idx > 0) out[pair.slice(0, idx)] = decodeURIComponent(pair.slice(idx + 1));
    }
    return out;
  };
  const query = parse(url.split('?')[1]?.split('#')[0] ?? '');
  const fragment = parse(url.split('#')[1] ?? '');
  return {
    code: query.code ?? fragment.code,
    access_token: query.access_token ?? fragment.access_token,
    refresh_token: query.refresh_token ?? fragment.refresh_token,
    error: query.error ?? fragment.error,
    error_description: query.error_description ?? fragment.error_description,
  };
}

/** Echange en cours (dedoublonnage) et codes deja consommes. */
let pending: Promise<Session> | null = null;
const consumedCodes = new Set<string>();

/**
 * Reinitialise l'etat OAuth garde en memoire (echange en cours + codes
 * consommes). A appeler a la deconnexion : sans cela, le compte suivant
 * heriterait des codes PKCE du precedent et la connexion echouerait.
 */
export function resetOAuthState(): void {
  pending = null;
  consumedCodes.clear();
}

async function currentSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

/**
 * Termine le flow OAuth : echange le code PKCE (ou installe les tokens) et
 * renvoie la session. Idempotent : un seul echange, meme si login.tsx et
 * auth-callback.tsx appellent la fonction simultanement.
 */
export function completeOAuthCallback(params: OAuthCallbackParams): Promise<Session> {
  if (pending) return pending;

  const run = async (): Promise<Session> => {
    if (params.error_description || params.error) {
      throw new Error(params.error_description ?? params.error);
    }

    // Session deja etablie (par ce chemin ou par l'autre).
    const existing = await currentSession();
    if (existing) return existing;

    const { code, access_token: accessToken, refresh_token: refreshToken } = params;

    if (code && consumedCodes.has(code)) {
      const afterConsume = await currentSession();
      if (afterConsume) return afterConsume;
      throw new Error('Code d’autorisation deja utilise');
    }

    if (!code && !(accessToken && refreshToken)) {
      throw new Error('Callback OAuth sans code ni tokens');
    }

    try {
      if (code) {
        consumedCodes.add(code);
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) throw error;
        if (!data.session) throw new Error('Session absente apres echange du code');
        return data.session;
      }
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken as string,
        refresh_token: refreshToken as string,
      });
      if (error) throw error;
      if (!data.session) throw new Error('Session absente apres setSession');
      return data.session;
    } catch (e) {
      // Course perdue : l'autre chemin a pu etablir la session entre-temps.
      const fallback = await currentSession();
      if (fallback) return fallback;
      throw e;
    }
  };

  pending = run().finally(() => {
    pending = null;
  });
  return pending;
}
