import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PrimaryButton from '@/components/PrimaryButton';
import { colors, radius, spacing, typography } from '@/theme';
import { api } from '@/lib/api';

/**
 * Enregistrement d'un véhicule (étape C) : indispensable pour publier un trajet.
 * Accessible depuis le profil ET depuis l'onglet Publier — auparavant l'app
 * affichait une alerte sans issue (« Véhicule requis »).
 */
export default function NewVehicleScreen() {
  const router = useRouter();
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('');
  const [seats, setSeats] = useState('4');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSave = model.trim().length >= 2 && plate.trim().length >= 2 && !saving;

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const seatsNum = Math.min(Math.max(Number(seats) || 4, 1), 9);
      await api.createVehicle({
        model: model.trim(),
        plate: plate.trim().toUpperCase(),
        color: color.trim() || undefined,
        seats: seatsNum,
      });
      router.back();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable style={styles.back} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={18} color={colors.primary} />
        <Text style={styles.backText}>Retour</Text>
      </Pressable>

      <Text style={styles.title}>Mon véhicule</Text>
      <Text style={styles.hint}>
        Ces informations rassurent les passagers : ils savent dans quelle voiture ils
        montent.
      </Text>

      <Text style={styles.label}>Modèle</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex : Toyota Corolla"
        placeholderTextColor={colors.textSecondary}
        value={model}
        onChangeText={setModel}
      />

      <Text style={styles.label}>Immatriculation</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex : AB 1234 TG"
        placeholderTextColor={colors.textSecondary}
        value={plate}
        onChangeText={setPlate}
        autoCapitalize="characters"
      />

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Couleur (optionnel)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex : Gris"
            placeholderTextColor={colors.textSecondary}
            value={color}
            onChangeText={setColor}
          />
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>Places (max 9)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={seats}
            onChangeText={setSeats}
            maxLength={1}
          />
        </View>
      </View>

      {error && (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={18} color={colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {saving ? (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      ) : (
        <View style={styles.actions}>
          <PrimaryButton
            title="Enregistrer le véhicule"
            onPress={canSave ? handleSave : undefined}
            variant={canSave ? 'primary' : 'outline'}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing(5), paddingTop: spacing(12), paddingBottom: spacing(10) },
  back: { flexDirection: 'row', alignItems: 'center', gap: spacing(2) },
  backText: { ...typography.secondary, color: colors.primary, fontWeight: '600' },
  title: { ...typography.title, fontSize: 22, marginTop: spacing(5) },
  hint: { ...typography.secondary, marginTop: spacing(2), lineHeight: 19 },
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
  row: { flexDirection: 'row', gap: spacing(4) },
  col: { flex: 1 },
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
  errorText: { ...typography.secondary, flex: 1, color: colors.danger },
  actions: { marginTop: spacing(8) },
  loader: { marginTop: spacing(8), alignSelf: 'center' },
});

