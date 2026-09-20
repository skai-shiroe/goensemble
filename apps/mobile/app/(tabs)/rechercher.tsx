import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import { colors, radius, spacing, typography } from '@/theme';
import { api, mapApiTrip } from '@/lib/api';
import type { ApiTrip } from '@/lib/api';
import type { Trip } from '@/types';

/**
 * Rechercher — liste des trajets (mock) + filtre textuel simple.
 * En Phase 3 : recherche géospatiale PostGIS + score de matching.
 */
export default function SearchScreen() {
    const [query, setQuery] = useState('');
  const [results, setResults] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);

  // Recherche textuelle au fil de la frappe (délai 400ms).
  const search = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const data = (await api.searchTrips({ q: trimmed, limit: 50 })) as ApiTrip[];
      setResults(data.map((t) => mapApiTrip(t, 'passenger')));
    } catch (e) {
      if (__DEV__) console.warn('[rechercher] API indisponible:', (e as Error).message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      search(query);
    }, 400);
    return () => clearTimeout(t);
  }, [query, search]);

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
          !loading && query ? (
            <EmptyState
              icon="🗺️"
              title="Aucun trajet trouvé"
              subtitle="Essayez un autre quartier ou une autre heure. Les points de repère locaux fonctionnent aussi."
            />
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
