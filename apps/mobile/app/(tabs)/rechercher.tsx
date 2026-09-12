import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import EmptyState from '@/components/EmptyState';
import TripCard from '@/components/TripCard';
import { colors, radius, spacing, typography } from '@/theme';
import { mockTrips } from '@/mock';

/**
 * Rechercher — liste des trajets (mock) + filtre textuel simple.
 * En Phase 3 : recherche géospatiale PostGIS + score de matching.
 */
export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockTrips;
    return mockTrips.filter(
      (t) =>
        t.departure.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q),
    );
  }, [query]);

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
        />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <EmptyState
            icon="🗺️"
            title="Aucun trajet trouvé"
            subtitle="Essayez un autre quartier ou une autre heure. Les points de repère locaux fonctionnent aussi."
          />
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
});
