import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { colors, spacing, typography } from '@/theme';

/**
 * Route de callback OAuth : goensemble://auth-callback
 * Recue le deep link apres le retour du navigateur (Google via Supabase).
 * - Flow PKCE : ?code=... -> exchangeCodeForSession
 * - Flow implicit : #access_token/refresh_token (ou ?access_token en fallback)
 * Sans cette route, Expo Router affiche "unmatched route" a l'arrivee du deep link.
 */
export default function AuthCallbackScreen() {
  const params = useLocalSearchParams<{
    code?: string;
    error?: string;
    error_description?: string;
    access_token?: string;
    refresh_token?: string;
  }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (params.error) {
          throw new Error(String(params.error_description ?? params.error));
        }

        // 1. Session deja etablie (ex. login.tsx a deja fait l'echange) -> ok
        const { data: existing } = await supabase.auth.getSession();
        if (existing.session) {
          router.replace('/(tabs)');
          return;
        }

        // 2. Flow PKCE : code d'autorisation dans la query
        if (params.code) {
          const { error: exErr } = await supabase.auth.exchangeCodeForSession(String(params.code));
          if (exErr) throw exErr;
          router.replace('/(tabs)');
          return;
        }

        // 3. Flow implicit : tokens directement presents
        if (params.access_token && params.refresh_token) {
          const { error: sErr } = await supabase.auth.setSession({
            access_token: String(params.access_token),
            refresh_token: String(params.refresh_token),
          });
          if (sErr) throw sErr;
          router.replace('/(tabs)');
          return;
        }

        throw new Error('Callback OAuth sans code ni tokens');
      } catch (e) {
        setError((e as Error).message);
        setTimeout(() => router.replace('/login'), 2000);
      }
    })();
  }, [params.code, params.error, params.access_token, params.refresh_token]);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
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
});