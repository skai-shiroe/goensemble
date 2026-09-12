import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '@/theme';

interface EmptyStateProps {
  icon: string;
  title: string;
  subtitle: string;
}

function EmptyState({ icon, title, subtitle }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default EmptyState;

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: spacing(8) },
  icon: { fontSize: 48, marginBottom: spacing(3) },
  title: { ...typography.subtitle, textAlign: 'center' },
  subtitle: {
    ...typography.secondary,
    textAlign: 'center',
    marginTop: spacing(2),
    lineHeight: 18,
  },
});
