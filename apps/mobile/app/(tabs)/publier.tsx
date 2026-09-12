import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';

/**
 * Publication d'un trajet — wizard 3 étapes (parcours UX, Étape B) :
 * 1. Itinéraire (départ → destination)
 * 2. Horaire (heure, trajet récurrent)
 * 3. Places + contribution, récapitulatif, publication (mock)
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

  const canNext = () => {
    if (step === 0) return departure.trim() !== '' && destination.trim() !== '';
    if (step === 1) return /^\d{1,2}:\d{2}$/.test(departureTime.trim());
    return true;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    Alert.alert(
      'Trajet publié (mock)',
      `${departure} → ${destination}\nDépart : ${departureTime}\nPlaces : ${seats}\nContribution : ${contribution} F${isRecurring ? '\nTrajet récurrent' : ''}`,
      [{ text: 'OK', onPress: () => router.push('/(tabs)/profil') }],
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Partager mon trajet</Text>
      <Text style={styles.hint}>Vous aviez déjà prévu ce trajet ? Proposez vos places libres.</Text>

      <View style={styles.stepper}>
        {STEPS.map((label, i) => (
          <View key={label} style={styles.stepItem}>
            <View style={[styles.stepDot, i <= step && styles.stepDotActive]}>
              <Text style={[styles.stepDotText, i <= step && styles.stepDotTextActive]}>{i + 1}</Text>
            </View>
            <Text style={[styles.stepLabel, i === step && styles.stepLabelActive]}>{label}</Text>
            {i < STEPS.length - 1 && <View style={[styles.stepLine, i < step && styles.stepLineActive]} />}
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
              <TextInput style={styles.input} keyboardType="number-pad" value={seats} onChangeText={setSeats} />
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Contribution (FCFA)</Text>
              <TextInput style={styles.input} keyboardType="number-pad" value={contribution} onChangeText={setContribution} />
            </View>
          </View>

          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Récapitulatif</Text>
            <Text style={styles.summaryLine}>📍 {departure} → {destination}</Text>
            <Text style={styles.summaryLine}>🕐 Départ à {departureTime}</Text>
            <Text style={styles.summaryLine}>↻ {isRecurring ? 'Trajet récurrent' : 'Trajet ponctuel'}</Text>
            <Text style={styles.summaryLine}>👥 {seats} place(s) offerte(s)</Text>
            <Text style={styles.summaryLine}>💰 {contribution} F par passager</Text>
          </View>
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
            title={step < 2 ? 'Continuer' : 'Publier le trajet'}
            onPress={canNext() ? handleNext : undefined}
            variant={canNext() ? 'primary' : 'outline'}
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
  stepper: { flexDirection: 'row', alignItems: 'center', marginTop: spacing(6), marginBottom: spacing(6) },
  stepItem: { flexDirection: 'row', alignItems: 'center' },
  stepDot: {
    width: 28, height: 28, borderRadius: 14, backgroundColor: colors.border,
    alignItems: 'center', justifyContent: 'center',
  },
  stepDotActive: { backgroundColor: colors.primary },
  stepDotText: { fontSize: 12, fontWeight: '700', color: colors.textSecondary },
  stepDotTextActive: { color: colors.surface },
  stepLabel: { ...typography.secondary, marginHorizontal: spacing(2) },
  stepLabelActive: { color: colors.primary, fontWeight: '700' },
  stepLine: { width: spacing(6), height: 2, backgroundColor: colors.border },
  stepLineActive: { backgroundColor: colors.primary },
  label: { ...typography.secondary, fontWeight: '600', marginTop: spacing(5), marginBottom: spacing(2) },
  input: {
    ...typography.body,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(3),
  },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing(6) },
  switchLabel: { ...typography.body, flex: 1, paddingRight: spacing(4) },
  row: { flexDirection: 'row', gap: spacing(4) },
  col: { flex: 1 },
  summary: { backgroundColor: colors.primaryLight, borderRadius: radius.md, padding: spacing(5), marginTop: spacing(6) },
  summaryTitle: { ...typography.subtitle, fontSize: 15, marginBottom: spacing(3), color: colors.primaryDark },
  summaryLine: { ...typography.body, color: colors.primaryDark, marginTop: spacing(2) },
  nav: { flexDirection: 'row', alignItems: 'center', marginTop: spacing(8) },
  navBack: { flexDirection: 'row', alignItems: 'center', gap: spacing(1), paddingVertical: spacing(3), paddingRight: spacing(4) },
  navBackText: { ...typography.body, color: colors.primary, fontWeight: '600' },
  navNext: { flex: 1 },
});

