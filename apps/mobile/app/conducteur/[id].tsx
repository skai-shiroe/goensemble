import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmptyState from '@/components/EmptyState';
import { colors, radius, spacing, typography } from '@/theme';
import { getUserById } from '@/mock';

/**
 * Profil d'un conducteur (parcours UX, Étape B) :
 * identité, réputation, véhicule. Base de confiance du produit.
 */
export default function DriverScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const user = getUserById(id);

  if (!user) {
    return (
      <View style={styles.screen}>
        <EmptyState icon="👤" title="Profil introuvable" subtitle="Cet utilisateur n'existe pas." />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
        <Text style={styles.backText}>Retour</Text>
      </Pressable>

      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.fullName.slice(0, 1)}</Text>
        </View>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.meta}>★ {user.rating} • {user.tripsCount} trajets partagés</Text>
        <View style={styles.verifiedBadge}>
          <Ionicons name="shield-checkmark" size={14} color={colors.primary} />
          <Text style={styles.verifiedText}>Téléphone vérifié</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Contact</Text>
        <Text style={styles.value}>{user.phone}</Text>
        <Text style={styles.hint}>Visible uniquement après confirmation d'une réservation.</Text>
      </View>

      <Pressable
        onPress={() => Alert.alert('Signalement (mock)', 'Le signalement sera traité en Phase 4.')}
      >
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
