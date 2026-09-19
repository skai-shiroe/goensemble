import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, spacing, typography } from '@/theme';
import { supabase, AUTH_REDIRECT_URL } from '@/lib/supabase';

/**
 * Connexion — Google OAuth via Supabase (PKCE + deep link).
 * Flux : authorize URL -> navigateur systeme -> goensemble://auth-callback
 */
export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: AUTH_REDIRECT_URL, skipBrowserRedirect: true },
      });
      if (oauthError || !data?.url) throw oauthError ?? new Error('URL OAuth indisponible');

      const result = await WebBrowser.openAuthSessionAsync(data.url, AUTH_REDIRECT_URL);
      if (result.type !== 'success' || !result.url) return; // annule par l'utilisateur

      // PKCE : ?code=... (defaut supabase-js v2) ; implicit : #access_token=...
      const parseParams = (src: string): Record<string, string> => {
        const out: Record<string, string> = {};
        for (const pair of src.split('&')) {
          const idx = pair.indexOf('=');
          if (idx > 0) out[pair.slice(0, idx)] = decodeURIComponent(pair.slice(idx + 1));
        }
        return out;
      };
      const query = parseParams(result.url.split('?')[1]?.split('#')[0] ?? '');
      const fragment = parseParams(result.url.split('#')[1] ?? '');

      if (query.code) {
        // Flow PKCE : echanger le code contre la session
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(query.code);
        if (exchangeError) throw exchangeError;
      } else if (fragment.access_token && fragment.refresh_token) {
        // Flow implicit : session directe depuis les tokens
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: fragment.access_token,
          refresh_token: fragment.refresh_token,
        });
        if (sessionError) throw sessionError;
      } else {
        throw new Error(query.error ?? fragment.error ?? 'Callback OAuth sans code ni tokens');
      }
      router.replace('/(tabs)');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>GO</Text>
      </View>
      <Text style={styles.title}>GO Ensemble</Text>
      <Text style={styles.slogan}>Vous allez dans la même direction ?{'\n'}Partagez votre trajet.</Text>

      <View style={styles.actions}>
        {loading ? (
          <Text style={styles.loading}>Connexion en cours...</Text>
        ) : (
          <PrimaryButton title="  Continuer avec Google" onPress={signInWithGoogle} />
        )}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      <Text style={styles.footnote}>Partagez vos trajets quotidiens, réduisez vos coûts.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing(6) },
  logo: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: { fontSize: 40, fontWeight: '800', color: colors.surface },
  title: { ...typography.title, fontSize: 30, marginTop: spacing(6) },
  slogan: { ...typography.secondary, textAlign: 'center', marginTop: spacing(3), lineHeight: 20 },
  actions: { alignSelf: 'stretch', marginTop: spacing(12) },
  loading: { ...typography.body, textAlign: 'center', color: colors.primary, fontWeight: '600' },
  error: { ...typography.secondary, color: colors.danger, textAlign: 'center', marginTop: spacing(4) },
  footnote: { ...typography.secondary, textAlign: 'center', marginTop: spacing(12) },
});