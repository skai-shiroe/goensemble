import { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import { colors, radius, spacing, typography } from '@/theme';
import { supabase } from '@/lib/supabase';
import { resetOAuthState } from '@/lib/auth';
import { api, mapApiTrip } from '@/lib/api';
import type { ApiUser, ApiVehicle, ApiTrip, ApiBooking } from '@/lib/api';
import { useProfileGate } from '@/lib/profile-gate';
import type { Trip } from '@/types';

type MeProfile = ApiUser & { vehicles?: ApiVehicle[]; needProfile?: boolean };

/**
 * Profil — données réelles via l'API :
 * GET /users/me (profil + véhicules), GET /trips/mine (trajets publiés),
 * GET /bookings/mine (réservations passager) + déconnexion.
 */
export default function ProfileScreen() {
  const router = useRouter();
  const gate = useProfileGate();
  const [profile, setProfile] = useState<MeProfile | null>(null);
  const [myTrips, setMyTrips] = useState<Trip[]>([]);
  const [myBookings, setMyBookings] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const [me, trips, bookings] = await Promise.allSettled([
        api.getMe(),
        api.getMyTrips(false),
        api.getMyBookings(),
      ]);

      if (me.status === 'fulfilled') {
        // Le profil est garanti complet par le garde d'onboarding (_layout) :
        // plus de création opportuniste ici — l'API exige un vrai téléphone.
        setProfile(me.value as MeProfile);
      } else if (me.status === 'rejected') {
        const msg = (me.reason as { message?: string }).message ?? 'Erreur profil.';
        setError(msg || 'Impossible de charger le profil.');
      }

      if (trips.status === 'fulfilled') {
        setMyTrips(trips.value.map((t) => mapApiTrip(t, 'driver')));
      }

      if (bookings.status === 'fulfilled' && bookings.value.asPassenger.length > 0) {
        setMyBookings(
          bookings.value.asPassenger.map((b) =>
            mapApiTrip((b as ApiBooking).trip, 'passenger'),
          ),
        );
      }
    } catch (e) {
      // On ne vide pas le profil déjà chargé : une erreur ponctuelle (réseau,
      // PUT refusé…) doit afficher un message actionnable, pas un écran vide.
      setError(
        (e as Error).message ||
          'API injoignable. Vérifiez que le serveur tourne et que EXPO_PUBLIC_API_URL est correct.',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Recharge à chaque retour sur l'onglet (utile après l'ajout d'un véhicule
  // ou une réservation acceptée ailleurs dans l'app).
  useFocusEffect(
    useCallback(() => {
      loadAll();
    }, [loadAll]),
  );

  const handleSignOut = async () => {
    // Réinitialise l'état OAuth en mémoire (codes PKCE consommés, échange
    // résiduel) : indispensable pour qu'un AUTRE compte puisse se connecter
    // ensuite — c'était la cause du « chargement puis API non joignable ».
    resetOAuthState();
    // Pas de navigation manuelle : le garde Stack.Protected de _layout bascule
    // automatiquement sur /login dès que la session devient nulle (zéro course).
    await supabase.auth.signOut();
  };

  const handleDeleteVehicle = (v: ApiVehicle) => {
    Alert.alert(
      'Supprimer ce véhicule ?',
      `${v.model} (${v.plate}) ne pourra plus servir à publier un trajet.`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await api.deleteVehicle(v.id);
              await loadAll();
            } catch (e) {
              Alert.alert('Suppression impossible', (e as Error).message);
            }
          },
        },
      ],
    );
  };

  const displayName = profile?.fullName ?? 'Utilisateur';
  const initial = displayName.slice(0, 1).toUpperCase();
  const vehicles = profile?.vehicles ?? [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        {profile?.photoUrl ? (
          <View style={styles.avatarWrap}>
            <Text style={styles.avatarImg}>{initial}</Text>
          </View>
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initial}</Text>
          </View>
        )}
        <Text style={styles.name}>{displayName}</Text>
        {profile ? (
          <>
            <Text style={styles.meta}>
              ★ {profile.rating.toFixed(1)} • {profile.tripsCount} trajets
            </Text>
            {profile.phone && !profile.phone.startsWith('pending:') ? (
              <Text style={styles.meta}>📞 {profile.phone}</Text>
            ) : (
              <>
                <Text style={styles.metaWarn}>📞 Numéro non renseigné</Text>
                <Pressable style={styles.completeBtn} onPress={gate.refresh}>
                  <Text style={styles.retryText}>Compléter mon profil</Text>
                </Pressable>
              </>
            )}
          </>
        ) : (
          <Text style={styles.meta}>
            {loading ? 'Chargement du profil...' : 'Profil indisponible'}
          </Text>
        )}

        {vehicles.length === 0 ? (
          <Text style={styles.vehicleMeta}>Aucun véhicule enregistré</Text>
        ) : (
          vehicles.map((v) => (
            <View key={v.id} style={styles.vehicleCard}>
              <View style={styles.vehicleHead}>
                <Text style={styles.vehicleTitle}>🚗 {v.model}</Text>
                <Pressable
                  onPress={() => handleDeleteVehicle(v)}
                  hitSlop={8}
                  accessibilityLabel={`Supprimer ${v.model}`}
                >
                  <Ionicons name="trash-outline" size={18} color={colors.danger} />
                </Pressable>
              </View>
              <Text style={styles.vehicleMeta}>
                {v.color ?? '—'} • {v.plate} • {v.seats} places
              </Text>
            </View>
          ))
        )}

        <Pressable style={styles.addVehicle} onPress={() => router.push('/vehicule/nouveau')}>
          <Ionicons name="add" size={18} color={colors.primary} />
          <Text style={styles.addVehicleText}>Ajouter un véhicule</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Mes trajets publiés</Text>
      {myTrips.length === 0 ? (
        <EmptyState
          icon="🚗"
          title="Aucun trajet publié"
          subtitle="Vous conduisez aujourd'hui ? Partagez vos places libres depuis l'onglet Publier."
        />
      ) : (
        myTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
      )}

      <Text style={styles.sectionTitle}>Mes réservations</Text>
      {myBookings.length === 0 ? (
        <EmptyState
          icon="🎟️"
          title="Aucune réservation"
          subtitle="Trouvez un trajet compatible depuis l'onglet Rechercher."
        />
      ) : (
        myBookings.map((trip) => <TripCard key={trip.id} trip={trip} />)
      )}

      {error && !loading && (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={18} color={colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retryBtn} onPress={loadAll}>
            <Text style={styles.retryText}>Réessayer</Text>
          </Pressable>
        </View>
      )}

      {loading && (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      )}

      <Pressable style={styles.signOut} onPress={handleSignOut}>
        <Ionicons name="log-out" size={18} color={colors.danger} />
        <Text style={styles.signOutText}>Se déconnecter</Text>
      </Pressable>
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
  avatarWrap: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  avatarText: { fontSize: 28, fontWeight: '700', color: colors.surface },
  avatarImg: { fontSize: 28, fontWeight: '700', color: colors.primaryDark },
  name: { ...typography.subtitle, fontSize: 20, marginTop: spacing(3) },
  meta: { ...typography.secondary, marginTop: spacing(1), textAlign: 'center' },
  metaWarn: {
    ...typography.secondary,
    marginTop: spacing(1),
    textAlign: 'center',
    color: colors.danger,
    fontWeight: '600',
  },
  errorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(6),
  },
  errorText: { ...typography.secondary, flex: 1, color: colors.danger },
  retryBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(2),
  },
  retryText: { ...typography.secondary, color: colors.surface, fontWeight: '700' },
  completeBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(2),
    marginTop: spacing(2),
  },
  vehicleCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
    alignSelf: 'stretch',
  },
  vehicleTitle: { ...typography.body, fontWeight: '700', color: colors.primaryDark },
  vehicleMeta: { ...typography.secondary, color: colors.primaryDark, marginTop: spacing(1) },
  vehicleHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing(3),
  },
  addVehicle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(2),
    marginTop: spacing(4),
    paddingVertical: spacing(3),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: radius.md,
  },
  addVehicleText: { ...typography.body, color: colors.primary, fontWeight: '700' },
  sectionTitle: {
    ...typography.subtitle,
    fontSize: 16,
    marginTop: spacing(8),
    marginBottom: spacing(3),
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing(2),
    marginTop: spacing(10),
    paddingVertical: spacing(3),
  },
  signOutText: { ...typography.body, color: colors.danger, fontWeight: '600' },
  loader: { marginTop: spacing(8), alignSelf: 'center' },
});
