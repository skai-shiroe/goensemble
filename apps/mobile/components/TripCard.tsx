import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, radius, spacing, typography } from '@/theme';
import type { Trip } from '@/types';

interface TripCardProps {
  trip: Trip;
  onPress?: () => void;
}

function TripCard({ trip, onPress }: TripCardProps) {
  const router = useRouter();
  const handlePress = onPress ?? (() => router.push(`/trajet/${trip.id}`));

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={handlePress}
    >
      <View style={styles.headerRow}>
        <Text style={styles.route} numberOfLines={1}>
          {trip.departure} → {trip.destination}
        </Text>
        {trip.isRecurring && <View style={styles.badge}><Text style={styles.badgeText}>Récurrent</Text></View>}
      </View>
      <Text style={styles.time}>{trip.departureTime} — {trip.arrivalTime}</Text>
      <View style={styles.footerRow}>
        <Text style={styles.driver}>{trip.driver.fullName} ★ {trip.driver.rating}</Text>
        <Text style={styles.seats}>{trip.availableSeats}/{trip.totalSeats} places</Text>
        <Text style={styles.contribution}>{trip.contribution} F</Text>
      </View>
    </Pressable>
  );
}

export default TripCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(4),
    marginBottom: spacing(3),
  },
  cardPressed: { opacity: 0.85 },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: spacing(2) },
  route: { flex: 1, fontSize: 15, fontWeight: '700', color: colors.text },
  badge: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.round,
    paddingHorizontal: spacing(2),
    paddingVertical: spacing(1),
  },
  badgeText: { fontSize: 10, color: colors.primary, fontWeight: '600' },
  time: { ...typography.secondary, marginTop: spacing(1) },
  footerRow: { flexDirection: 'row', alignItems: 'center', marginTop: spacing(3), gap: spacing(2) },
  driver: { flex: 1, fontSize: 12, color: colors.textSecondary },
  seats: { fontSize: 12, color: colors.info, fontWeight: '600' },
  contribution: { fontSize: 13, color: colors.primary, fontWeight: '700' },
});
