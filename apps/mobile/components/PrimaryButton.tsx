import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/theme';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline';
}

function PrimaryButton({ title, onPress, variant = 'primary' }: PrimaryButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        !isPrimary && styles.outline,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, !isPrimary && styles.outlineTitle]}>{title}</Text>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing(4),
    alignItems: 'center',
  },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.primary },
  pressed: { opacity: 0.85 },
  title: { ...typography.body, color: colors.surface, fontWeight: '700' },
  outlineTitle: { color: colors.primary },
});
