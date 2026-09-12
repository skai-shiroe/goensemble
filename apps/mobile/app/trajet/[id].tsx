import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import EmptyState from '@/components/EmptyState';
import { colors, radius, spacing, typography } from '@/theme';
import { getTripById } from '@/mock';

/**
 * Détail d'un trajet (parcours UX, Étape B) :
 * itinéraire, horaires, conducteur (cliquable), véhicule, places, contribution.
 * Réservation mockée — remplacée en Phase 3 (POST /bookings).
 */
export default function TripDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = getTripById(id);
  const [bookingState, setBookingState] = useState<'idle' | 'requested'>('idle');

  if (!trip) {
    return (
      <View style={styles.screen}>
        <EmptyState
          icon="🛣️"
          title="Trajet introuvable"
          subtitle="Ce trajet n'existe plus ou a été retiré."
        />
      </View>
    );
  }

  const handleBooking = () => {
    Alert.alert(
      'Confirmer la réservation',
      `Demander une place dans le trajet ${trip.departure} → ${trip.destination} ?\nContribution : ${trip.contribution} F`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Demander',
          onPress: () => {
            setBookingState('requested');
            Alert.alert(
              'Demande envoyée (mock)',
              'Le conducteur va accepter ou refuser votre demande. Vous serez notifié.',
            );
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color={colors.text} />
        <Text style={styles.backText}>Retour</Text>
      </Pressable>

      <View style={styles.card}>
        <Text style={styles.routeTitle}>{trip.departure}</Text>
        <View style={styles.routeLine}>
          <View style={styles.dot} />
          <View style={styles.line} />
          <View style={[styles.dot, styles.dotEnd]} />
        </View>
        <Text style={styles.routeTitle}>{trip.destination}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time" size={16} color={colors.primary} />
            <Text style={styles.metaText}>{trip.departureTime} — {trip.arrivalTime}</Text>
          </View>
          {trip.isRecurring && (
            <View style={styles.metaItem}>
              <Ionicons name="repeat" size={16} color={colors.primary} />
              <Text style={styles.metaText}>Récurrent</Text>
            </View>
          )}
        </View>
      </View>

      <Pressable style={styles.driverCard} onPress={() => router.push(`/conducteur/${trip.driver.id}`)}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{trip.driver.fullName.slice(0, 1)}</Text>
        </View>
        <View style={styles.driverInfo}>
          <Text style={styles.driverName}>{trip.driver.fullName}</Text>
          <Text style={styles.driverMeta}>★ {trip.driver.rating} • {trip.driver.tripsCount} trajets</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      </Pressable>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Véhicule</Text>
        <Text style={styles.vehicle}>{trip.vehicle.model} • {trip.vehicle.color}</Text>
        <Text style={styles.plate}>{trip.vehicle.plate}</Text>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{trip.availableSeats}/{trip.totalSeats}</Text>
            <Text style={styles.statLabel}>places libres</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{trip.contribution} F</Text>
            <Text style={styles.statLabel}>contribution</Text>
          </View>
        </View>
      </View>

      {bookingState === 'requested' ? (
        <View style={styles.successBox}>
          <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
          <Text style={styles.successText}>Demande envoyée — en attente de confirmation du conducteur</Text>
        </View>
      ) : (
        <PrimaryButton
          title={trip.availableSeats > 0 ? 'Réserver une place' : 'Complet'}
          onPress={trip.availableSeats > 0 ? handleBooking : undefined}
          variant={trip.availableSeats > 0 ? 'primary' : 'outline'}
        />
      )}

      <Pressable onPress={() => Alert.alert('Signalement (mock)', 'Le signalement sera traité en Phase 4.')}>
        <Text style={styles.report}>⚠️ Signaler ce trajet</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(14), paddingBottom: spacing(10) },
  back: { flexDirection: 'row', alignItems: 'center', gap: spacing(2), marginBottom: spacing(5) },
  backText: { ...typography.body, fontWeight: '600' },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(5),
    marginBottom: spacing(4),
  },
  routeTitle: { ...typography.subtitle, fontSize: 17 },
  routeLine: { flexDirection: 'row', alignItems: 'center', paddingLeft: spacing(2), marginVertical: spacing(2) },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  dotEnd: { backgroundColor: colors.danger },
  line: { flex: 1, height: 2, backgroundColor: colors.border, marginHorizontal: spacing(2) },
  metaRow: { flexDirection: 'row', gap: spacing(5), marginTop: spacing(4) },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: spacing(1) },
  metaText: { ...typography.secondary, color: colors.text },
  driverCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(4),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing(4),
  },
  avatar: {
    backgroundColor: colors.primary,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
  avatarText: { fontSize: 20, fontWeight: '700', color: colors.surface },
  driverInfo: { flex: 1, marginLeft: spacing(3) },
  driverName: { ...typography.body, fontWeight: '700' },
  driverMeta: { ...typography.secondary, marginTop: spacing(1) },
  sectionLabel: { ...typography.secondary, fontWeight: '600', marginBottom: spacing(2) },
  vehicle: { ...typography.body, fontWeight: '600' },
  plate: { ...typography.secondary, marginTop: spacing(1) },
  statsRow: { flexDirection: 'row', gap: spacing(6), marginTop: spacing(5) },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 20, fontWeight: '700', color: colors.primary },
  statLabel: { ...typography.secondary, marginTop: spacing(1) },
  successBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(3),
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginBottom: spacing(4),
  },
  successText: { ...typography.body, color: colors.primaryDark, flex: 1, fontWeight: '600' },
  report: { ...typography.secondary, textAlign: 'center', marginTop: spacing(5), color: colors.danger },
});

