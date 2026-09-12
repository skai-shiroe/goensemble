import { StyleSheet, ScrollView, Text, View } from 'react-native';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import { colors, radius, spacing, typography } from '@/theme';
import { mockCurrentUser, mockMyBookings, mockMyTrips, mockMyVehicle } from '@/mock';

/**
 * Profil — utilisateur unique (conducteur + passager, Étape B) :
 * informations, véhicule, mes trajets publiés, mes réservations.
 */
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{mockCurrentUser.fullName.slice(0, 1)}</Text>
        </View>
        <Text style={styles.name}>{mockCurrentUser.fullName}</Text>
        <Text style={styles.meta}>
          ★ {mockCurrentUser.rating} • {mockCurrentUser.tripsCount} trajets
        </Text>
        <View style={styles.vehicleCard}>
          <Text style={styles.vehicleTitle}>🚗 {mockMyVehicle.model}</Text>
          <Text style={styles.vehicleMeta}>
            {mockMyVehicle.color} • {mockMyVehicle.plate} • {mockMyVehicle.seats} places
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Mes trajets publiés</Text>
      {mockMyTrips.length === 0 ? (
        <EmptyState
          icon="🚗"
          title="Aucun trajet publié"
          subtitle="Vous conduisez aujourd'hui ? Partagez vos places libres depuis l'onglet Publier."
        />
      ) : (
        mockMyTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
      )}

      <Text style={styles.sectionTitle}>Mes réservations</Text>
      {mockMyBookings.length === 0 ? (
        <EmptyState
          icon="🎟️"
          title="Aucune réservation"
          subtitle="Trouvez un trajet compatible depuis l'onglet Rechercher."
        />
      ) : (
        mockMyBookings.map((trip) => <TripCard key={trip.id} trip={trip} />)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(12), paddingBottom: spacing(10) },
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
  vehicleCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
    alignSelf: 'stretch',
  },
  vehicleTitle: { ...typography.body, fontWeight: '700', color: colors.primaryDark },
  vehicleMeta: { ...typography.secondary, color: colors.primaryDark, marginTop: spacing(1) },
  sectionTitle: { ...typography.subtitle, fontSize: 16, marginTop: spacing(8), marginBottom: spacing(3) },
});
