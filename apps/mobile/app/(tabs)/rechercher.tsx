import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import { colors, radius, spacing, typography } from '@/theme';
import { api, mapApiTrip } from '@/lib/api';
import type { ApiTrip } from '@/lib/api';
import type { Trip } from '@/types';

/**
 * Rechercher — trajets à venir affichés par défaut (GET /trips/search),
 * filtrés au fil de la frappe (délai 400 ms).
 */
export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const data = (await api.searchTrips({
        q: q || undefined,
        limit: 50,
      })) as ApiTrip[];
      setResults(data.map((t) => mapApiTrip(t, 'passenger')));
    } catch (e) {
      if (__DEV__) console.warn('[rechercher] API indisponible:', (e as Error).message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Recherche textuelle au fil de la frappe ; champ vidé => retour à la liste
  // par défaut des trajets à venir.
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      void load('');
      return;
    }
    const t = setTimeout(() => {
      void load(trimmed);
    }, 400);
    return () => clearTimeout(t);
  }, [query, load]);

  // Rafraîchit la liste par défaut au retour sur l'onglet (un trajet a pu être
  // publié ou réservé entre-temps), sans perturber une recherche en cours.
  const queryRef = useRef('');
  queryRef.current = query;
  const didMount = useRef(false);
  useFocusEffect(
    useCallback(() => {
      if (!didMount.current) {
        didMount.current = true;
        return;
      }
      if (!queryRef.current.trim()) void load('');
    }, [load]),
  );

  const hasQuery = query.trim() !== '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trouver un trajet</Text>
        <TextInput
          style={styles.input}
          placeholder="Départ ou destination (ex : Agoè)"
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
        />
      </View>

      {loading && <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />}

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          !loading ? (
            hasQuery ? (
              <EmptyState
                icon="🗺️"
                title="Aucun trajet trouvé"
                subtitle="Essayez un autre quartier ou une autre heure. Les points de repère locaux fonctionnent aussi."
              />
            ) : (
              <EmptyState
                icon="🚗"
                title="Aucun trajet à venir"
                subtitle="Les trajets publiés par la communauté apparaîtront ici. Publiez le vôtre depuis l'onglet Publier."
              />
            )
          ) : null
        }
        renderItem={({ item }) => <TripCard trip={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: spacing(5), paddingTop: spacing(12), backgroundColor: colors.surface, borderBottomWidth: 1, borderBottomColor: colors.border },
  title: { ...typography.title, fontSize: 22 },
  input: {
    ...typography.body,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing(4),
    paddingVertical: spacing(3),
    marginTop: spacing(4),
  },
    list: { padding: spacing(5) },
  loader: { marginTop: spacing(4), alignSelf: 'center' },
});
