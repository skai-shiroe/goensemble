import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
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

/** « HH:MM » normalisé (ex. 07:05). */
function formatHm(h: number, m: number): string {
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/**
 * Libellé lisible d'un départ : « Aujourd'hui à 07:00 », « Demain à 07:00 »,
 * sinon « vendredi 26 septembre à 07:00 ».
 */
function formatDepartureLabel(d: Date): string {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();
  const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  if (sameDay(d, today)) return `Aujourd'hui à ${time}`;
  if (sameDay(d, tomorrow)) return `Demain à ${time}`;
  return `${d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à ${time}`;
}

export default function PublishScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [dayOffset, setDayOffset] = useState<number | null>(null);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState(0);
  // Modale compacte de choix de l'heure (évite la grille 24 cases).
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [draftHour, setDraftHour] = useState(7);
  const [draftMinute, setDraftMinute] = useState(0);
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

  /** Remet le wizard à zéro après une publication réussie. */
  const resetForm = () => {
    setStep(0);
    setDeparture('');
    setDestination('');
    setDayOffset(null);
    setHour(null);
    setMinute(0);
    setIsRecurring(true);
    setSeats('2');
    setContribution('500');
    setTimePickerOpen(false);
  };

  const openTimePicker = () => {
    if (hour != null) {
      setDraftHour(hour);
      setDraftMinute(minute);
    } else {
      // Par défaut : prochaine heure pleine (évite un départ déjà passé).
      setDraftHour((new Date().getHours() + 1) % 24);
      setDraftMinute(0);
    }
    setTimePickerOpen(true);
  };

  const confirmTime = () => {
    setHour(draftHour);
    setMinute(draftMinute);
    setTimePickerOpen(false);
  };

  // --- Sélecteur de départ : jour (aujourd'hui → J+6) + heure + minutes ---
  const dayOptions = useMemo(() => {
    const base = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const label =
        i === 0
          ? "Aujourd'hui"
          : i === 1
            ? 'Demain'
            : d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
      return { offset: i, label };
    });
  }, []);

  const HOURS = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);
  const MINUTES = useMemo(() => Array.from({ length: 12 }, (_, i) => i * 5), []);

  const buildDeparture = (offset: number, h: number, m: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    d.setHours(h, m, 0, 0);
    return d;
  };

  const selectedDeparture =
    dayOffset != null && hour != null ? buildDeparture(dayOffset, hour, minute) : null;

  // Un départ dans le passé est exclu de la recherche : on décale automatiquement
  // à demain même heure pour un trajet récurrent, sinon on bloque la publication.
  const isPastSelection = selectedDeparture != null && selectedDeparture.getTime() <= Date.now();

  const effectiveDeparture = useMemo(() => {
    if (selectedDeparture == null || dayOffset == null || hour == null) return null;
    if (selectedDeparture.getTime() <= Date.now() && isRecurring) {
      return buildDeparture(dayOffset + 1, hour, minute);
    }
    return selectedDeparture;
  }, [selectedDeparture, dayOffset, hour, minute, isRecurring]);

  const canNext = () => {
    if (step === 0) return departure.trim() !== '' && destination.trim() !== '';
    if (step === 1) return selectedDeparture != null && !(isPastSelection && !isRecurring);
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

      if (!effectiveDeparture || effectiveDeparture.getTime() <= Date.now()) {
        Alert.alert(
          'Horaire invalide',
          "L'heure choisie est déjà passée. Choisissez un autre horaire ou activez « trajet récurrent » pour publier demain à la même heure.",
        );
        return;
      }

      await api.createTrip({
        vehicleId: vehicle.id,
        fromLabel: departure.trim(),
        toLabel: destination.trim(),
        fromLat: fromCoords[0],
        fromLng: fromCoords[1],
        toLat: toCoords[0],
        toLng: toCoords[1],
        departureTime: effectiveDeparture.toISOString(),
        contribution: Number(contribution) || 0,
        seats: Number(seats) || 4,
        isRecurring,
      });

      const routeLabel = `${departure.trim()} → ${destination.trim()}`;
      const whenLabel = formatDepartureLabel(effectiveDeparture);
      resetForm();
      void loadVehicles();
      Alert.alert('Trajet publié ✅', `${routeLabel}\nDépart ${whenLabel}.`, [
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
          <Text style={styles.label}>Jour de départ</Text>
          <View style={styles.chipWrap}>
            {dayOptions.map((d) => (
              <Pressable
                key={d.offset}
                style={[styles.chip, dayOffset === d.offset && styles.chipActive]}
                onPress={() => setDayOffset(d.offset)}
              >
                <Text style={[styles.chipText, dayOffset === d.offset && styles.chipTextActive]}>
                  {d.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>Heure de départ</Text>
          <Pressable style={styles.timeButton} onPress={openTimePicker}>
            <Ionicons name="time-outline" size={20} color={colors.primary} />
            <Text style={[styles.timeButtonText, hour == null && styles.timeButtonPlaceholder]}>
              {hour == null ? "Choisir l'heure" : formatHm(hour, minute)}
            </Text>
            <Ionicons name="chevron-down" size={18} color={colors.textSecondary} />
          </Pressable>

          {effectiveDeparture && (
            <View
              style={isPastSelection && !isRecurring ? styles.warnCard : styles.infoCard}
            >
              <Ionicons
                name={isPastSelection && !isRecurring ? 'alert-circle' : 'time-outline'}
                size={18}
                color={isPastSelection && !isRecurring ? colors.danger : colors.primaryDark}
              />
              <Text
                style={isPastSelection && !isRecurring ? styles.warnCardText : styles.infoCardText}
              >
                {isPastSelection
                  ? isRecurring
                    ? `Déjà ${formatDepartureLabel(selectedDeparture!)} — publié pour ${formatDepartureLabel(effectiveDeparture)} (trajet récurrent).`
                    : `Déjà ${formatDepartureLabel(selectedDeparture!)} : choisissez une heure à venir ou activez « trajet récurrent ».`
                  : `Départ ${formatDepartureLabel(effectiveDeparture)}`}
              </Text>
            </View>
          )}

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
            <Text style={styles.summaryLine}>
              🕐 Départ {effectiveDeparture ? formatDepartureLabel(effectiveDeparture) : '—'}
            </Text>
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

      {/* Choix de l'heure : modale compacte à 2 colonnes (heures | minutes). */}
      <Modal
        visible={timePickerOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setTimePickerOpen(false)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setTimePickerOpen(false)} />
        <View style={styles.modalSheet}>
          <Text style={styles.modalTitle}>Heure de départ</Text>
          <Text style={styles.modalPreview}>{formatHm(draftHour, draftMinute)}</Text>
          <View style={styles.modalCols}>
            <ScrollView style={styles.modalCol} contentContainerStyle={styles.modalColContent}>
              {HOURS.map((h) => (
                <Pressable
                  key={h}
                  style={[styles.modalRow, draftHour === h && styles.modalRowActive]}
                  onPress={() => setDraftHour(h)}
                >
                  <Text style={[styles.modalRowText, draftHour === h && styles.modalRowTextActive]}>
                    {formatHm(h, 0).slice(0, 2)}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <ScrollView style={styles.modalCol} contentContainerStyle={styles.modalColContent}>
              {MINUTES.map((m) => (
                <Pressable
                  key={m}
                  style={[styles.modalRow, draftMinute === m && styles.modalRowActive]}
                  onPress={() => setDraftMinute(m)}
                >
                  <Text
                    style={[styles.modalRowText, draftMinute === m && styles.modalRowTextActive]}
                  >
                    :{String(m).padStart(2, '0')}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={styles.modalActions}>
            <Pressable style={styles.modalCancel} onPress={() => setTimePickerOpen(false)}>
              <Text style={styles.modalCancelText}>Annuler</Text>
            </Pressable>
            <Pressable style={styles.modalConfirm} onPress={confirmTime}>
              <Text style={styles.modalConfirmText}>Valider</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing(2) },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.round,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(2),
  },
  chipActive: { borderColor: colors.primary, backgroundColor: colors.primaryLight },
  chipText: { ...typography.secondary, fontWeight: '600' },
  chipTextActive: { color: colors.primaryDark, fontWeight: '700' },
  timeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(3),
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(4),
  },
  timeButtonText: { ...typography.body, flex: 1, fontWeight: '700' },
  timeButtonPlaceholder: { color: colors.textSecondary, fontWeight: '400' },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)' },
  modalSheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    paddingHorizontal: spacing(5),
    paddingTop: spacing(5),
    paddingBottom: spacing(8),
  },
  modalTitle: { ...typography.subtitle, fontSize: 16, textAlign: 'center' },
  modalPreview: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
    marginTop: spacing(2),
  },
  modalCols: { flexDirection: 'row', gap: spacing(4), marginTop: spacing(5), height: 190 },
  modalCol: { flex: 1, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  modalColContent: { paddingVertical: spacing(2) },
  modalRow: { alignItems: 'center', paddingVertical: spacing(3) },
  modalRowActive: { backgroundColor: colors.primaryLight },
  modalRowText: { ...typography.body, color: colors.textSecondary },
  modalRowTextActive: { color: colors.primaryDark, fontWeight: '700' },
  modalActions: { flexDirection: 'row', gap: spacing(4), marginTop: spacing(5) },
  modalCancel: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing(4),
  },
  modalCancelText: { ...typography.body, fontWeight: '600' },
  modalConfirm: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing(4),
  },
  modalConfirmText: { ...typography.body, color: colors.surface, fontWeight: '700' },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(2),
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing(4),
    marginTop: spacing(5),
  },
  infoCardText: { ...typography.secondary, flex: 1, color: colors.primaryDark, fontWeight: '600' },
  warnCard: {
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
  warnCardText: { ...typography.secondary, flex: 1, color: colors.danger, fontWeight: '600' },
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
