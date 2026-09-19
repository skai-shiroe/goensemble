import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { colors } from '@/theme';

/**
 * Garde de session : les routes sont "protegees" par Stack.Protected, donc
 * expo-router gere lui-meme les redirections (login <-> onglets) sans
 * navigation imperative — ce qui evite les rebonds vers /login.
 *
 * La session est restoree depuis SecureStore au demarrage via
 * onAuthStateChange (INITIAL_SESSION) : le resultat de getSession() ne doit
 * jamais ecraser un etat plus recent (course au retour du deep link OAuth).
 */
export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const authEventReceived = useRef(false);

  useEffect(() => {
    let active = true;

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      if (!active) return;
      authEventReceived.current = true;
      setSession(s);
      setLoading(false);
    });

    // Filet de securite si aucun evenement n'est emis : ne s'applique que
    // tant qu'aucun evenement d'auth n'a ete recu (sinon risque d'ecraser
    // une session fraiche avec un null lit avant sa creation).
    supabase.auth.getSession().then(({ data }) => {
      if (!active || authEventReceived.current) return;
      setSession(data.session);
      setLoading(false);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!!session}>
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>
        <Stack.Protected guard={!session}>
          <Stack.Screen name="login" />
          <Stack.Screen name="auth-callback" options={{ animation: 'none' }} />
        </Stack.Protected>
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' },
});