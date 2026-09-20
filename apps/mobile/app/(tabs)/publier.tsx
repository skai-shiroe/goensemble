import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';
import { api } from '@/lib/api';
import type { ApiVehicle } from '@/lib/api';

/**
 * Publication d'un trajet — wizard 3 étapes (parcours UX, Étape B) :
 * 1. Itinéraire (départ → destination)
 * 2. Horaire (heure, trajet récurrent)
 * 3. Places + contribution, récapitulatif, publication (API POST /trips)
 */
const STEPS = ['Itinéraire', 'Horaire', 'Places'] as const;

export default function PublishScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [isRecurring, setIsRecurring] = useState(true);
  const [seats, setSeats] = useState('2');
  const [contribution, setContribution] = useState('500');
  const [publishing, setPublishing] = useState(false);
  const [vehicles, setVehicles] = useState<ApiVehicle[]>([]);
  const [vehicleId, setVehicleId] = useState<string | null>(null);

  const loadVehicles = useCallback(async () => {
    try {
      const list = await api.listVehicles();
      setVehicles(list);
      setVehicleId((current) => current ?? list[0]?.id ?? null);
    } catch (e) {
      if (__DEV__) console.warn('[publier] vehicules indisponibles:', (e as Error).message);
    }
  }, []);

  // Recharge au retour sur l'onglet : le véhicule a pu être ajouté entre-temps
  // depuis /vehicule/nouveau.
  useFocusEffect(
    useCallback(() => {
      loadVehicles();
    }, [loadVehicles]),
  );

  const selectedVehicle = vehicles.find((v) => v.id === vehicleId) ?? vehicles[0] ?? null;

  /** Borne la saisie « places offertes » à la capacité du véhicule choisi. */
  const clampSeats = (raw: string) => {
    const max = selectedVehicle?.seats ?? 9;
    const n = Number(raw.replace(/\D/g, '')) || 0;
    return String(Math.min(n, max));
  };

  const canNext = () => {
    if (step === 0) return departure.trim() !== '' && destination.trim() !== '';
    if (step === 1) return /^\d{1,2}:\d{2}$/.test(departureTime.trim());
    return true;
  };

  const handleNext = async () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    if (!selectedVehicle) {
      Alert.alert('Véhicule requis', 'Ajoutez un véhicule pour publier un trajet.', [
        { text: 'Ajouter', onPress: () => router.push('/vehicule/nouveau') },
        { text: 'Annuler', style: 'cancel' },
      ]);
      return;
    }

    setPublishing(true);
    try {
      const vehicle = selectedVehicle;

      const [fromCoords, toCoords] = await Promise.all([
        api.geocode(departure.trim()),
        api.geocode(destination.trim()),
      ]);
      if (!fromCoords || !toCoords) {
        Alert.alert(
          'Adresses introuvables',
          "Impossible de géocoder le départ ou la destination. Vérifiez l'orthographe.",
        );
        return;
      }

      const [h, m] = departureTime.split(':').map(Number);
      const depDate = new Date();
      depDate.setHours(h, m, 0, 0);

      await api.createTrip({
        vehicleId: vehicle.id,
        fromLabel: departure.trim(),
        toLabel: destination.trim(),
        fromLat: fromCoords[0],
        fromLng: fromCoords[1],
        toLat: toCoords[0],
        toLng: toCoords[1],
        departureTime: depDate.toISOString(),
        contribution: Number(contribution) || 0,
        seats: Number(seats) || 4,
        isRecurring,
      });

      Alert.alert('Trajet publié ✅', `${departure} → ${destination} est maintenant en ligne.`, [
        { text: 'OK', onPress: () => router.push('/(tabs)/profil') },
      ]);
    } catch (e) {
      Alert.alert('Erreur', (e as Error).message);
    } finally {
      setPublishing(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Partager mon trajet</Text>
      <Text style={styles.hint}>Vous aviez déjà prévu ce trajet ? Proposez vos places libres.</Text>

      {/* Véhicule (étape C) : sans véhicule la publication est impossible — on
          propose donc un chemin direct au lieu d'une alerte sans issue. */}
      {vehicles.length === 0 ? (
        <Pressable style={styles.vehicleWarn} onPress={() => router.push('/vehicule/nouveau')}>
          <Ionicons name="car-outline" size={18} color={colors.danger} />
          <Text style={styles.vehicleWarnText}>
            Aucun véhicule — appuyez ici pour l’enregistrer.
          </Text>
        </Pressable>
      ) : vehicles.length === 1 ? (
        <View style={styles.vehicleInfo}>
          <Ionicons name="car-outline" size={18} color={colors.primaryDark} />
          <Text style={styles.vehicleInfoText}>
            {vehicles[0].model} • {vehicles[0].plate} • {vehicles[0].seats} places
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.label}>Véhicule utilisé</Text>
          <View style={styles.vehicleChoices}>
            {vehicles.map((v) => (
              <Pressable
                key={v.id}
                style={[styles.vehicleChip, vehicleId === v.id && styles.vehicleChipActive]}
                onPress={() => setVehicleId(v.id)}
              >
                <Text
                  style={[
                    styles.vehicleChipText,
                    vehicleId === v.id && styles.vehicleChipTextActive,
                  ]}
                >
                  {v.model}
                </Text>
              </Pressable>
            ))}
          </View>
        </>
      )}

      <View style={styles.stepper}>
        {STEPS.map((label, i) => (
          <View key={label} style={styles.stepItem}>
            <View style={[styles.stepDot, i <= step && styles.stepDotActive]}>
              <Text style={[styles.stepDotText, i <= step && styles.stepDotTextActive]}>{i + 1}</Text>
            </View>
            <Text style={[styles.stepLabel, i === step && styles.stepLabelActive]}>{label}</Text>
            {i < STEPS.length - 1 && (
              <View style={[styles.stepLine, i < step && styles.stepLineActive]} />
            )}
          </View>
        ))}
      </View>

      {step === 0 && (
        <>
          <Text style={styles.label}>Départ</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex : Agoè Assiyéyé"
            placeholderTextColor={colors.textSecondary}
            value={departure}
            onChangeText={setDeparture}
          />
          <Text style={styles.label}>Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex : Centre-ville (Bourse du Travail)"
            placeholderTextColor={colors.textSecondary}
            value={destination}
            onChangeText={setDestination}
          />
        </>
      )}

      {step === 1 && (
        <>
          <Text style={styles.label}>Heure de départ</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex : 07:00"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numbers-and-punctuation"
            value={departureTime}
            onChangeText={setDepartureTime}
          />
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Trajet récurrent (domicile-travail)</Text>
            <Switch
              value={isRecurring}
              onValueChange={setIsRecurring}
              trackColor={{ true: colors.primary, false: colors.border }}
            />
          </View>
        </>
      )}

      {step === 2 && (
        <>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Places offertes</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={seats}
                onChangeText={(t) => setSeats(clampSeats(t))}
              />
              <Text style={styles.smallHint}>
                Max {selectedVehicle?.seats ?? 9} place(s) pour ce véhicule
              </Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Contribution (FCFA)</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={contribution}
                onChangeText={setContribution}
              />
            </View>
          </View>

          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Récapitulatif</Text>
            <Text style={styles.summaryLine}>📍 {departure} → {destination}</Text>
            <Text style={styles.summaryLine}>🕐 Départ à {departureTime}</Text>
            <Text style={styles.summaryLine}>
              ↻ {isRecurring ? 'Trajet récurrent' : 'Trajet ponctuel'}
            </Text>
            <Text style={styles.summaryLine}>👥 {seats} place(s) offerte(s)</Text>
            <Text style={styles.summaryLine}>💰 {contribution} F par passager</Text>
          </View>

          {publishing && (
            <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
          )}
        </>
      )}

      <View style={styles.nav}>
        {step > 0 && (
          <Pressable style={styles.navBack} onPress={() => setStep(step - 1)}>
            <Ionicons name="arrow-back" size={18} color={colors.primary} />
            <Text style={styles.navBackText}>Retour</Text>
          </Pressable>
        )}
        <View style={styles.navNext}>
          <PrimaryButton
            title={step < 2 ? 'Continuer' : publishing ? 'Publication...' : 'Publier le trajet'}
            onPress={canNext() && !publishing ? handleNext : undefined}
            variant={canNext() && !publishing ? 'primary' : 'outline'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(12), paddingBottom: spacing(10) },
  title: { ...typography.title, fontSize: 22 },
  hint: { ...typography.secondary, marginTop: spacing(2), lineHeight: 18 },
  smallHint: { ...typography.secondary, marginTop: spacing(2), fontSize: 12 },
  vehicleWarn: {
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
  vehicleWarnText: { ...typography.secondary, flex: 1, color: colors.danger, fontWeight: '600' },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
  },
  vehicleInfoText: { ...typography.secondary, flex: 1, color: colors.primaryDark, fontWeight: '600' },
  vehicleChoices: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing(2) },
  vehicleChip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    paddingHorizontal: spacing(3),
    paddingVertical: spacing(2),
  },
  vehicleChipActive: { borderColor: colors.primary, backgroundColor: colors.primaryLight },
  vehicleChipText: { ...typography.secondary, fontWeight: '600' },
  vehicleChipTextActive: { color: colors.primaryDark },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing(6),
    marginBottom: spacing(6),
  },
  stepItem: { flexDirection: 'row', alignItems: 'center' },
  stepDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDotActive: { backgroundColor: colors.primary },
  stepDotText: { fontSize: 12, fontWeight: '700', color: colors.textSecondary },
  stepDotTextActive: { color: colors.surface },
  stepLabel: { ...typography.secondary, marginHorizontal: spacing(2) },
  stepLabelActive: { color: colors.primary, fontWeight: '700' },
  stepLine: { width: spacing(6), height: 2, backgroundColor: colors.border },
  stepLineActive: { backgroundColor: colors.primary },
  label: {
    ...typography.secondary,
    fontWeight: '600',
    marginTop: spacing(5),
    marginBottom: spacing(2),
  },
  input: {
    ...typography.body,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(3),
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing(6),
  },
  switchLabel: { ...typography.body, flex: 1, paddingRight: spacing(4) },
  row: { flexDirection: 'row', gap: spacing(4) },
  col: { flex: 1 },
  summary: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(5),
    marginTop: spacing(6),
  },
  summaryTitle: {
    ...typography.subtitle,
    fontSize: 15,
    marginBottom: spacing(3),
    color: colors.primaryDark,
  },
  summaryLine: { ...typography.body, color: colors.primaryDark, marginTop: spacing(2) },
  nav: { flexDirection: 'row', alignItems: 'center', marginTop: spacing(8) },
  navBack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(1),
    paddingVertical: spacing(3),
    paddingRight: spacing(4),
  },
  navBackText: { ...typography.body, color: colors.primary, fontWeight: '600' },
  navNext: { flex: 1 },
  loader: { marginTop: spacing(6), alignSelf: 'center' },
});
