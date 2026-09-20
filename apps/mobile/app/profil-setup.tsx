import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';
import { api } from '@/lib/api';
import { supabase } from '@/lib/supabase';
import { resetOAuthState } from '@/lib/auth';
import { useProfileGate } from '@/lib/profile-gate';

/**
 * Onboarding (étape B) : un compte Google n'apporte pas de numéro de téléphone.
 * Or c'est la clé de confiance du covoiturage (contact révélé après réservation
 * acceptée) et il est exigé côté API pour publier un trajet.
 *
 * Cet écran est affiché par le garde de `_layout` tant que
 * `GET /users/me` renvoie `profileComplete: false`.
 */
function nationalDigits(raw: string): string {
  const digits = raw.replace(/\D/g, '').replace(/^00/, '');
  return /^228\d{8,9}$/.test(digits) ? digits.slice(3) : digits;
}

export default function ProfileSetupScreen() {
  const gate = useProfileGate();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const didPrefill = useRef(false);

  // Pré-remplit le nom depuis le compte Google (une seule fois : ne doit jamais
  // écraser ce que l'utilisateur a saisi).
  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (!active || didPrefill.current) return;
      didPrefill.current = true;
      const meta = data.user?.user_metadata as
        | { full_name?: string; name?: string }
        | undefined;
      const name = meta?.full_name ?? meta?.name;
      if (name) setFullName(name);
    });
    return () => {
      active = false;
    };
  }, []);

  const digits = nationalDigits(phone);
  const valid = digits.length >= 8 && digits.length <= 9;

  const handleSubmit = async () => {
    if (!valid) {
      setError('Numéro invalide : 8 ou 9 chiffres après +228.');
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await api.updateMe({
        fullName: fullName.trim() || 'Utilisateur',
        phone: `+228${digits}`,
      });
      // Le garde de _layout bascule sur les onglets dès l'état rafraîchi.
      await gate.refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Bienvenue sur GO Ensemble</Text>
      <Text style={styles.hint}>
        Votre numéro permet aux covoitureurs de vous joindre une fois une réservation
        acceptée. Il reste privé avant cela.
      </Text>

      <Text style={styles.label}>Nom complet</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex : Kossi Amegan"
        placeholderTextColor={colors.textSecondary}
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />

      <Text style={styles.label}>Numéro de téléphone</Text>
      <View style={styles.phoneRow}>
        <View style={styles.phonePrefix}>
          <Text style={styles.phonePrefixText}>+228</Text>
        </View>
        <TextInput
          style={[styles.input, styles.phoneInput]}
          placeholder="90 12 34 56"
          placeholderTextColor={colors.textSecondary}
          value={phone}
          onChangeText={(t) => setPhone(nationalDigits(t))}
          keyboardType="number-pad"
          maxLength={9}
        />
      </View>
      <Text style={styles.hintSmall}>
        {digits.length > 0 && !valid
          ? 'Le numéro doit comporter 8 ou 9 chiffres.'
          : 'Visible uniquement après confirmation d’une réservation.'}
      </Text>

      {error && (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={18} color={colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {saving ? (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      ) : (
        <View style={styles.actions}>
          <PrimaryButton title="Continuer" onPress={handleSubmit} />
        </View>
      )}

      <Pressable
        style={styles.signOut}
        onPress={() => {
          resetOAuthState();
          supabase.auth.signOut();
        }}
      >
        <Ionicons name="log-out" size={18} color={colors.danger} />
        <Text style={styles.signOutText}>Se déconnecter</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(14), paddingBottom: spacing(10) },
  title: { ...typography.title, fontSize: 22 },
  hint: { ...typography.secondary, marginTop: spacing(2), lineHeight: 19 },
  hintSmall: { ...typography.secondary, marginTop: spacing(2), fontSize: 12 },
  label: {
    ...typography.secondary,
    fontWeight: '600',
    marginTop: spacing(6),
    marginBottom: spacing(2),
  },
  input: {
    ...typography.body,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(3),
  },
  phoneRow: { flexDirection: 'row', alignItems: 'center', gap: spacing(2) },
  phonePrefix: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(3),
  },
  phonePrefixText: { ...typography.body, fontWeight: '700', color: colors.primaryDark },
  phoneInput: { flex: 1 },
  errorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
  },
  errorText: { ...typography.secondary, flex: 1, color: colors.danger },
  actions: { marginTop: spacing(8) },
  loader: { marginTop: spacing(8), alignSelf: 'center' },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(2),
    marginTop: spacing(10),
    paddingVertical: spacing(3),
  },
  signOutText: { ...typography.body, color: colors.danger, fontWeight: '600' },
});

