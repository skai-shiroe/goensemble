import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, spacing, typography } from '@/theme';
import { supabase, AUTH_REDIRECT_URL } from '@/lib/supabase';
import { completeOAuthCallback, parseCallbackUrl } from '@/lib/auth';

/**
 * Connexion — Google OAuth via Supabase (PKCE + deep link).
 * Flux : authorize URL -> navigateur systeme -> goensemble://auth-callback
 * La session etablie declenche la bascule du layout racine vers (tabs).
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

      // La session peut aussi etre etablie par /auth-callback (deep link) :
      // completeOAuthCallback dedoublonne et tolere les courses.
      await completeOAuthCallback(parseCallbackUrl(result.url));
      // Pas de navigation ici : le layout racine (Stack.Protected) bascule vers (tabs).
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