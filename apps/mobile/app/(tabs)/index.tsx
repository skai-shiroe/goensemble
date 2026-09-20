import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import TripCard from '@/components/TripCard';
import EmptyState from '@/components/EmptyState';
import { colors, radius, spacing, typography } from '@/theme';
import { api, mapApiTrip } from '@/lib/api';
import type { ApiBooking } from '@/lib/api';
import type { Trip } from '@/types';

/**
 * Accueil — données réelles via l'API :
 * prochains trajets conduits + suggestions + réservation en cours.
 */
export default function HomeScreen() {
  const router = useRouter();

  const [nextTrip, setNextTrip] = useState<Trip | null>(null);
  const [suggestions, setSuggestions] = useState<Trip[]>([]);
  const [myBooking, setMyBooking] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const [mine, search, bookings] = await Promise.allSettled([
        api.getMyTrips(true),
        api.searchTrips({ limit: 5 }),
        api.getMyBookings(),
      ]);

      if (mine.status === 'fulfilled' && mine.value.length > 0) {
        setNextTrip(mapApiTrip(mine.value[0], 'driver'));
      }
      if (search.status === 'fulfilled') {
        setSuggestions(search.value.map((t) => mapApiTrip(t, 'passenger')));
      }
      if (bookings.status === 'fulfilled' && bookings.value.asPassenger.length > 0) {
        const first = bookings.value.asPassenger[0] as ApiBooking;
        setMyBooking(mapApiTrip(first.trip, 'passenger'));
      }
    } catch (e) {
      if (__DEV__) console.warn('[accueil] API indisponible:', (e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.brand}>GO Ensemble</Text>
      <Text style={styles.slogan}>Vous allez dans la même direction ? Partagez votre trajet.</Text>

      <View style={styles.actions}>
        <PrimaryButton title="🔍  Trouver un trajet" onPress={() => router.push('/(tabs)/rechercher')} />
        <View style={{ height: spacing(3) }} />
        <PrimaryButton title="🚗  Partager mon trajet" variant="outline" onPress={() => router.push('/(tabs)/publier')} />
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {nextTrip && !loading && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prochain trajet</Text>
          <View style={styles.nextTrip}>
            <Text style={styles.nextRoute}>
              {nextTrip.departure} → {nextTrip.destination}
            </Text>
            <Text style={styles.nextTime}>{nextTrip.departureTime}</Text>
          </View>
        </View>
      )}

                  <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trajets qui pourraient vous intéresser</Text>
        {!loading && suggestions.length === 0 ? (
          <EmptyState
            icon="🗺️"
            title="Aucun trajet trouvé"
            subtitle="Essayez de publier votre trajet ou relancez plus tard."
          />
        ) : (
          suggestions.map((trip) => <TripCard key={trip.id} trip={trip} />)
        )}
      </View>

      {myBooking && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ma réservation du jour</Text>
          <View style={styles.nextTrip}>
            <Text style={styles.nextRoute}>
              {myBooking.departure} → {myBooking.destination}
            </Text>
            <Text style={styles.nextTime}>
              avec {myBooking.driver.fullName} • {myBooking.departureTime}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(12) },
  brand: { ...typography.title, fontSize: 28, color: colors.primary },
  slogan: { ...typography.secondary, marginTop: spacing(2), lineHeight: 18 },
  actions: { marginTop: spacing(6) },
  section: { marginTop: spacing(8) },
  sectionTitle: { ...typography.subtitle, fontSize: 16, marginBottom: spacing(3) },
  nextTrip: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(4),
  },
  nextRoute: { ...typography.body, fontWeight: '700' },
  nextTime: { ...typography.secondary, marginTop: spacing(1) },
  suggestionCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(4),
    marginBottom: spacing(3),
  },
  suggestRoute: { ...typography.body, fontWeight: '700' },
    suggestMeta: { ...typography.secondary, marginTop: spacing(1) },
  loading: { marginTop: spacing(6), alignSelf: 'center' },
});
