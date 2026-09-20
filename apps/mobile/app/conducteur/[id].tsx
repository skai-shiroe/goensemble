import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmptyState from '@/components/EmptyState';
import { colors, radius, spacing, typography } from '@/theme';
import { api } from '@/lib/api';
import type { PublicUserProfile } from '@/lib/api';

/**
 * Profil d'un conducteur (parcours UX, Étape B) :
 * identité, réputation, véhicule. Base de confiance du produit.
 * Les données proviennent de GET /users/:id (téléphone dévoilé uniquement
 * si une réservation acceptée relie le passager au conducteur).
 */
export default function DriverScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [user, setUser] = useState<PublicUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async () => {
    if (!id || typeof id !== 'string') return;
    setLoading(true);
    try {
      const data = await api.getPublicUser(id);
      setUser(data);
    } catch (e) {
      if (__DEV__) console.warn('[conducteur] API indisponible:', (e as Error).message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (loading) {
    return (
      <View style={[styles.screen, { alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.screen}>
        <EmptyState icon="👤" title="Profil introuvable" subtitle="Cet utilisateur n'existe pas." />
      </View>
    );
  }

  const initial = user.fullName?.slice(0, 1) ?? '?';
  const phoneDisplay = user.phoneHidden ? '••••••' : user.phone ?? '—';

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
        <Text style={styles.backText}>Retour</Text>
      </Pressable>

      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
        <Text style={styles.name}>{user.fullName ?? 'Utilisateur'}</Text>
        <Text style={styles.meta}>★ {user.rating.toFixed(1)} • {user.tripsCount} trajets partagés</Text>
        <View style={styles.verifiedBadge}>
          <Ionicons name="shield-checkmark" size={14} color={colors.primary} />
          <Text style={styles.verifiedText}>Compte vérifié</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Contact</Text>
        <Text style={styles.value}>{phoneDisplay}</Text>
        <Text style={styles.hint}>
          {user.phoneHidden
            ? "Visible uniquement après qu'une réservation soit acceptée."
            : 'Numéro du conducteur.'}
        </Text>
      </View>

      <Pressable onPress={() => Alert.alert('Signalement', 'Le signalement sera traité en Phase 4.')}>
        <Text style={styles.report}>⚠️ Signaler ce profil</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(14), paddingBottom: spacing(10) },
  back: { flexDirection: 'row', alignItems: 'center', gap: spacing(2), marginBottom: spacing(5) },
  backText: { ...typography.body, fontWeight: '600' },
  headerCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    padding: spacing(6),
  },
  avatar: {
    backgroundColor: colors.primary,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
  },
  avatarText: { fontSize: 28, fontWeight: '700', color: colors.surface },
  name: { ...typography.subtitle, fontSize: 20, marginTop: spacing(3) },
  meta: { ...typography.secondary, marginTop: spacing(1) },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(1),
    backgroundColor: colors.primaryLight,
    borderRadius: radius.round,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(1),
    marginTop: spacing(4),
  },
  verifiedText: { fontSize: 12, color: colors.primary, fontWeight: '600' },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(5),
    marginTop: spacing(5),
  },
  sectionLabel: { ...typography.secondary, fontWeight: '600', marginBottom: spacing(2) },
  value: { ...typography.body },
  hint: { ...typography.secondary, marginTop: spacing(2), lineHeight: 18 },
  report: { ...typography.secondary, textAlign: 'center', marginTop: spacing(6), color: colors.danger },
});
