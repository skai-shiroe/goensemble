import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import TripCard from '@/components/TripCard';
import EmptyState from '@/components/EmptyState';
import { colors, radius, spacing, typography } from '@/theme';
import { api, mapApiTrip } from '@/lib/api';
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
  const [pendingRequests, setPendingRequests] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Passe à true après un premier chargement réussi : les rechargements suivants
  // se font en silence (les données restent affichées) au lieu de vider l'écran.
  const loaded = useRef(false);

  const loadData = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      // UNE seule requête (profil + trajets + réservations + suggestions).
      const data = await api.getOverview();

      const upcoming = data.myTrips
        .filter((t) => new Date(t.departureTime).getTime() >= Date.now())
        .sort((a, b) => new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime());
      setNextTrip(upcoming[0] ? mapApiTrip(upcoming[0], 'driver') : null);

      setSuggestions(data.suggestions.map((t) => mapApiTrip(t, 'passenger')));

      const first = data.bookings.asPassenger[0];
      setMyBooking(first ? mapApiTrip(first.trip, 'passenger') : null);

      // Demandes reçues à traiter (conducteur) : compteur mis en avant.
      setPendingRequests(data.bookings.asDriver.filter((b) => b.status === 'PENDING').length);
      setError(null);
      loaded.current = true;
    } catch (e) {
      if (__DEV__) console.warn('[accueil] API indisponible:', (e as Error).message);
      setError((e as Error).message || 'API injoignable.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Recharge à chaque retour sur l'onglet : un trajet publié ou une demande
  // reçue depuis un autre écran doit remonter ici.
  useFocusEffect(
    useCallback(() => {
      void loadData(loaded.current);
    }, [loadData]),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    void loadData(true);
  }, [loadData]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
      }
    >
      <Text style={styles.brand}>GO Ensemble</Text>
      <Text style={styles.slogan}>Vous allez dans la même direction ? Partagez votre trajet.</Text>

      <View style={styles.actions}>
        <PrimaryButton title="🔍  Trouver un trajet" onPress={() => router.push('/(tabs)/rechercher')} />
        <View style={{ height: spacing(3) }} />
        <PrimaryButton title="🚗  Partager mon trajet" variant="outline" onPress={() => router.push('/(tabs)/publier')} />
      </View>

      {error && !loading && (
        <Pressable style={styles.errorCard} onPress={onRefresh}>
          <Ionicons name="alert-circle" size={18} color={colors.danger} />
          <Text style={styles.errorText}>{error} — appuyez pour réessayer.</Text>
        </Pressable>
      )}

      {pendingRequests > 0 && (
        <Pressable style={styles.pendingCard} onPress={() => router.push('/(tabs)/profil')}>
          <Ionicons name="mail-unread-outline" size={18} color={colors.primaryDark} />
          <Text style={styles.pendingText}>
            {pendingRequests} demande{pendingRequests > 1 ? 's' : ''} de réservation en attente
          </Text>
          <Ionicons name="chevron-forward" size={18} color={colors.primaryDark} />
        </Pressable>
      )}

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
  pendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
  },
  pendingText: { ...typography.body, flex: 1, color: colors.primaryDark, fontWeight: '700' },
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
  errorText: { ...typography.secondary, flex: 1, color: colors.danger, fontWeight: '600' },
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
