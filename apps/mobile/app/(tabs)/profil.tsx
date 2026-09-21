import {
  ActivityIndicator,
  Alert,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useCallback, useRef, useState } from 'react';
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

/** Libellés/statuts des demandes de réservation (schéma BookingStatus). */
const BOOKING_STATUS: Record<string, { label: string; color: string }> = {
  PENDING: { label: 'En attente', color: colors.warning },
  ACCEPTED: { label: 'Acceptée', color: colors.primaryDark },
  REJECTED: { label: 'Refusée', color: colors.danger },
  CANCELLED: { label: 'Annulée', color: colors.textSecondary },
  COMPLETED: { label: 'Terminée', color: colors.textSecondary },
};

/** « Aujourd'hui 07:00 » / « Demain 07:00 » / « 26 sept. 07:00 ». */
function formatWhen(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  if (d.toDateString() === today.toDateString()) return `Aujourd'hui ${time}`;
  if (d.toDateString() === tomorrow.toDateString()) return `Demain ${time}`;
  return `${d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} ${time}`;
}

/** Un numéro réel (jamais un placeholder `pending:<id>` d'un compte OAuth). */
function realPhone(phone?: string | null): string | null {
  if (!phone || phone.startsWith('pending:')) return null;
  return phone;
}

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
  // Demandes que j'ai envoyées (passager) et demandes reçues sur mes trajets (conducteur).
  const [passengerBookings, setPassengerBookings] = useState<ApiBooking[]>([]);
  const [receivedBookings, setReceivedBookings] = useState<ApiBooking[]>([]);
  const [actionId, setActionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Passe à true après un premier chargement réussi (rechargements silencieux).
  const loaded = useRef(false);

  const loadAll = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      setError(null);
      // UNE seule requête : profil + véhicules + trajets publiés + réservations.
      const data = await api.getOverview();

      if (data.profile.needProfile) {
        setError('Profil incomplet : renseignez votre numéro de téléphone.');
      } else {
        // Le profil est garanti complet par le garde d'onboarding (_layout) :
        // plus de création opportuniste ici — l'API exige un vrai téléphone.
        setProfile(data.profile as MeProfile);
      }

      setMyTrips(data.myTrips.map((t) => mapApiTrip(t, 'driver')));
      setPassengerBookings(data.bookings.asPassenger);
      setReceivedBookings(data.bookings.asDriver);
      loaded.current = true;
    } catch (e) {
      // On ne vide pas le profil déjà chargé : une erreur ponctuelle (réseau,
      // PUT refusé…) doit afficher un message actionnable, pas un écran vide.
      setError(
        (e as Error).message ||
          'API injoignable. Vérifiez que le serveur tourne et que EXPO_PUBLIC_API_URL est correct.',
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Recharge à chaque retour sur l'onglet (utile après l'ajout d'un véhicule
  // ou une réservation acceptée ailleurs dans l'app). En silence dès qu'un
  // chargement a déjà réussi : les données restent affichées.
  useFocusEffect(
    useCallback(() => {
      void loadAll(loaded.current);
    }, [loadAll]),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    void loadAll(true);
  }, [loadAll]);

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

  /** Conducteur : accepter ou refuser une demande reçue. */
  const handleDecision = async (booking: ApiBooking, status: 'ACCEPTED' | 'REJECTED') => {
    setActionId(booking.id);
    try {
      await api.updateBookingStatus(booking.id, status);
      await loadAll();
    } catch (e) {
      Alert.alert('Action impossible', (e as Error).message);
    } finally {
      setActionId(null);
    }
  };

  const displayName = profile?.fullName ?? 'Utilisateur';
  const initial = displayName.slice(0, 1).toUpperCase();
  const vehicles = profile?.vehicles ?? [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
      }
    >
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

      <Text style={styles.sectionTitle}>Demandes reçues</Text>
      {receivedBookings.length === 0 ? (
        <EmptyState
          icon="📥"
          title="Aucune demande reçue"
          subtitle="Les passagers intéressés par vos trajets apparaîtront ici."
        />
      ) : (
        receivedBookings.map((b) => {
          const st = BOOKING_STATUS[b.status] ?? BOOKING_STATUS.PENDING;
          const phone = realPhone(b.passenger?.phone);
          return (
            <View key={b.id} style={styles.bookingCard}>
              <View style={styles.bookingHead}>
                <Text style={styles.bookingName}>{b.passenger?.fullName ?? 'Passager'}</Text>
                <View style={[styles.badge, { borderColor: st.color }]}>
                  <Text style={[styles.badgeText, { color: st.color }]}>{st.label}</Text>
                </View>
              </View>
              <Text style={styles.bookingMeta}>
                {b.trip.fromLabel} → {b.trip.toLabel} • {formatWhen(b.trip.departureTime)}
              </Text>
              <Text style={styles.bookingMeta}>{b.seats} place(s) demandée(s)</Text>
              {b.status === 'PENDING' && (
                <View style={styles.bookingActions}>
                  <Pressable
                    style={[
                      styles.decisionBtn,
                      styles.acceptBtn,
                      actionId === b.id && styles.decisionBtnBusy,
                    ]}
                    disabled={actionId === b.id}
                    onPress={() => handleDecision(b, 'ACCEPTED')}
                  >
                    <Text style={styles.decisionTextOk}>Accepter</Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.decisionBtn,
                      styles.rejectBtn,
                      actionId === b.id && styles.decisionBtnBusy,
                    ]}
                    disabled={actionId === b.id}
                    onPress={() => handleDecision(b, 'REJECTED')}
                  >
                    <Text style={styles.decisionTextNo}>Refuser</Text>
                  </Pressable>
                </View>
              )}
              {b.status === 'ACCEPTED' && phone && (
                <Text style={styles.bookingPhone}>📞 {phone}</Text>
              )}
            </View>
          );
        })
      )}

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
      {passengerBookings.length === 0 ? (
        <EmptyState
          icon="🎟️"
          title="Aucune réservation"
          subtitle="Trouvez un trajet compatible depuis l'onglet Rechercher."
        />
      ) : (
        passengerBookings.map((b) => {
          const st = BOOKING_STATUS[b.status] ?? BOOKING_STATUS.PENDING;
          const phone = realPhone(b.trip.driver?.phone);
          return (
            <View key={b.id} style={styles.bookingCard}>
              <View style={styles.bookingHead}>
                <Text style={styles.bookingName}>
                  {b.trip.fromLabel} → {b.trip.toLabel}
                </Text>
                <View style={[styles.badge, { borderColor: st.color }]}>
                  <Text style={[styles.badgeText, { color: st.color }]}>{st.label}</Text>
                </View>
              </View>
              <Text style={styles.bookingMeta}>
                avec {b.trip.driver?.fullName ?? 'Conducteur'} • {formatWhen(b.trip.departureTime)}
              </Text>
              {b.status === 'ACCEPTED'
                ? phone && <Text style={styles.bookingPhone}>📞 {phone}</Text>
                : (
                  <Text style={styles.bookingMeta}>
                    Le numéro du conducteur s'affichera après acceptation.
                  </Text>
                )}
            </View>
          );
        })
      )}

      {error && !loading && (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={18} color={colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retryBtn} onPress={() => void loadAll(false)}>
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
  bookingCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing(4),
    marginBottom: spacing(3),
  },
  bookingHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing(2),
  },
  bookingName: { ...typography.body, fontWeight: '700', flex: 1 },
  badge: {
    borderWidth: 1,
    borderRadius: radius.round,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(1),
  },
  badgeText: { fontSize: 11, fontWeight: '700' },
  bookingMeta: { ...typography.secondary, marginTop: spacing(2) },
  bookingPhone: {
    ...typography.body,
    marginTop: spacing(2),
    color: colors.primaryDark,
    fontWeight: '600',
  },
  bookingActions: { flexDirection: 'row', gap: spacing(3), marginTop: spacing(4) },
  decisionBtn: {
    flex: 1,
    alignItems: 'center',
    borderRadius: radius.sm,
    paddingVertical: spacing(3),
    borderWidth: 1,
  },
  acceptBtn: { backgroundColor: colors.primary, borderColor: colors.primary },
  rejectBtn: { backgroundColor: colors.surface, borderColor: colors.danger },
  decisionTextOk: { ...typography.body, color: colors.surface, fontWeight: '700' },
  decisionTextNo: { ...typography.body, color: colors.danger, fontWeight: '700' },
  decisionBtnBusy: { opacity: 0.5 },
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
