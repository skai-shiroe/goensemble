import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';
import { supabase } from '@/lib/supabase';
import { api, type UserProfile } from '@/lib/api';
import { mockMyTrips, mockMyVehicle } from '@/mock';

/**
 * Profil — donnees reelles via l'API (GET/PUT /users/me) + deconnexion.
 * Les trajets/vehicules restent mocks (branchagedonnees = prochain etape).
 */
export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      let me = await api.getMe();
      if (me.needProfile) {
        // Premier login Google : cree le profil avec le nom du compte Google
        const { data: { user } } = await supabase.auth.getUser();
        const meta = user?.user_metadata as { full_name?: string; name?: string; avatar_url?: string } | undefined;
        const fullName = meta?.full_name ?? meta?.name ?? 'Utilisateur';
        me = await api.updateMe({ fullName, photoUrl: meta?.avatar_url });
      }
      setProfile(me);
    } catch (e) {
      console.warn('[profil] API indisponible:', (e as Error).message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  const displayName = profile?.fullName ?? 'Utilisateur';
  const initial = displayName.slice(0, 1).toUpperCase();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        {profile?.photoUrl ? (
          <View style={styles.avatarWrap}><Text style={styles.avatarImg}>{initial}</Text></View>
        ) : (
          <View style={styles.avatar}><Text style={styles.avatarText}>{initial}</Text></View>
        )}
        <Text style={styles.name}>{displayName}</Text>
        {profile ? (
          <Text style={styles.meta}>★ {profile.rating.toFixed(1)} • {profile.tripsCount} trajets • via l&apos;API</Text>
        ) : (
          <Text style={styles.meta}>{loading ? 'Chargement du profil...' : 'API non joignable — donnees locales'}</Text>
        )}
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
      <EmptyState
        icon="🎟️"
        title="Aucune réservation"
        subtitle="Trouvez un trajet compatible depuis l'onglet Rechercher."
      />

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