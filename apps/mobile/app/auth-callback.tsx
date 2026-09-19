import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import * as Linking from 'expo-linking';
import { completeOAuthCallback, parseCallbackUrl, type OAuthCallbackParams } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { colors, spacing, typography } from '@/theme';

/** Duree maximale d'attente d'une session etablie par l'autre chemin OAuth. */
const SESSION_WAIT_MS = 15000;
const POLL_MS = 500;

/**
 * Route de callback OAuth : goensemble://auth-callback
 *
 * Deux cas possibles a l'arrivee du deep link :
 *  1. l'URL porte le code PKCE / les tokens -> on termine le flow ici
 *  2. l'URL est nue (le code a ete capte par WebBrowser.openAuthSessionAsync
 *     dans login.tsx) -> on attend que la session apparaisse
 *
 * Aucune navigation ici : le layout racine (Stack.Protected) bascule vers
 * (tabs) des que la session existe. L'erreur n'est affichee qu'apres le delai
 * d'attente, si aucune session n'a ete etablie.
 */
export default function AuthCallbackScreen() {
  // URL brute : fiable en cold start comme en warm start (contrairement aux
  // params du router qui peuvent ne pas etre encore hydrates au 1er rendu).
  const rawUrl = Linking.useURL();
  const params = useLocalSearchParams<{
    code?: string;
    error?: string;
    error_description?: string;
    access_token?: string;
    refresh_token?: string;
  }>();
  const [error, setError] = useState<string | null>(null);
  const finished = useRef(false);

  const { code, error: paramError, error_description: paramErrorDescription } = params;
  const paramAccessToken = params.access_token;
  const paramRefreshToken = params.refresh_token;

  useEffect(() => {
    if (finished.current) return;

    const fromUrl = rawUrl ? parseCallbackUrl(rawUrl) : {};
    const merged: OAuthCallbackParams = {
      code: fromUrl.code ?? (code ? String(code) : undefined),
      access_token: fromUrl.access_token ?? (paramAccessToken ? String(paramAccessToken) : undefined),
      refresh_token: fromUrl.refresh_token ?? (paramRefreshToken ? String(paramRefreshToken) : undefined),
      error: fromUrl.error ?? (paramError ? String(paramError) : undefined),
      error_description:
        fromUrl.error_description ?? (paramErrorDescription ? String(paramErrorDescription) : undefined),
    };
    if (__DEV__) {
      console.log('[auth-callback] url =', rawUrl, '| merged =', merged);
    }

    const hasPayload = !!(
      merged.code ||
      (merged.access_token && merged.refresh_token) ||
      merged.error ||
      merged.error_description
    );

    let cancelled = false;
    let timer: ReturnType<typeof setInterval> | null = null;

    /** Attend l'apparition d'une session (etablie par login.tsx) pendant `ms`. */
    const waitForSession = (ms: number) =>
      new Promise<boolean>((resolve) => {
        const deadline = Date.now() + ms;
        timer = setInterval(async () => {
          if (cancelled) {
            if (timer) clearInterval(timer);
            resolve(false);
            return;
          }
          const { data } = await supabase.auth.getSession();
          if (data.session) {
            if (timer) clearInterval(timer);
            resolve(true);
            return;
          }
          if (Date.now() > deadline) {
            if (timer) clearInterval(timer);
            resolve(false);
          }
        }, POLL_MS);
      });

    (async () => {
      try {
        if (hasPayload) {
          await completeOAuthCallback(merged);
          finished.current = true;
          return; // le guard du layout bascule vers (tabs)
        }

        // URL sans code : session peut-etre deja etablie ou en cours d'echange.
        const existing = await supabase.auth.getSession();
        if (existing.data.session || (await waitForSession(SESSION_WAIT_MS))) {
          finished.current = true;
          return;
        }
        if (!cancelled) setError('Callback OAuth sans code ni tokens');
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
    };
  }, [rawUrl, code, paramError, paramErrorDescription, paramAccessToken, paramRefreshToken]);

  return (
    <View style={styles.container}>
      {error ? (
        <>
          <Text style={styles.error}>{error}</Text>
          <Pressable style={styles.button} onPress={() => router.replace('/login')}>
            <Text style={styles.buttonText}>Revenir à la connexion</Text>
          </Pressable>
        </>
      ) : (
        <>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.text}>Connexion en cours...</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing(6) },
  text: { ...typography.body, marginTop: spacing(4), color: colors.primary, fontWeight: '600' },
  error: { ...typography.secondary, color: colors.danger, textAlign: 'center' },
  button: {
    marginTop: spacing(6),
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: spacing(3),
    paddingHorizontal: spacing(6),
  },
  buttonText: { ...typography.body, color: colors.surface, fontWeight: '700' },
});
