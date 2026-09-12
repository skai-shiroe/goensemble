import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';
import { mockMyBookings, mockMyTrips, mockTrips } from '@/mock';

/**
 * Accueil — action principale (parcours UX, Étape B) :
 * deux raccourcis + aperçu du prochain trajet.
 */
export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.brand}>GO Ensemble</Text>
      <Text style={styles.slogan}>Vous allez dans la même direction ? Partagez votre trajet.</Text>

      <View style={styles.actions}>
        <PrimaryButton title="🔍  Trouver un trajet" onPress={() => router.push('/(tabs)/rechercher')} />
        <View style={{ height: spacing(3) }} />
        <PrimaryButton title="🚗  Partager mon trajet" variant="outline" onPress={() => router.push('/(tabs)/publier')} />
      </View>

      {mockMyTrips.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prochain trajet</Text>
          <View style={styles.nextTrip}>
            <Text style={styles.nextRoute}>
              {mockMyTrips[0].departure} → {mockMyTrips[0].destination}
            </Text>
            <Text style={styles.nextTime}>{mockMyTrips[0].departureTime}</Text>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trajets qui pourraient vous intéresser</Text>
        {mockTrips.slice(0, 2).map((trip) => (
          <Pressable
            key={trip.id}
            style={({ pressed }) => [styles.suggestionCard, pressed && { opacity: 0.85 }]}
            onPress={() => router.push(`/trajet/${trip.id}`)}
          >
            <Text style={styles.suggestRoute}>{trip.departure} → {trip.destination}</Text>
            <Text style={styles.suggestMeta}>
              {trip.departureTime} • {trip.availableSeats}/{trip.totalSeats} places • {trip.contribution} F
            </Text>
          </Pressable>
        ))}
      </View>

      {mockMyBookings.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ma réservation du jour</Text>
          <View style={styles.nextTrip}>
            <Text style={styles.nextRoute}>
              {mockMyBookings[0].departure} → {mockMyBookings[0].destination}
            </Text>
            <Text style={styles.nextTime}>
              avec {mockMyBookings[0].driver.fullName} • {mockMyBookings[0].departureTime}
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
});
