/**
 * Thème design GO Ensemble — dérivé du parcours UX (Étape B)
 */
export const colors = {
  primary: '#0B7A3B',
  primaryDark: '#085C2C',
  primaryLight: '#E8F5EE',
  background: '#F7F8F7',
  surface: '#FFFFFF',
  text: '#1A1C1A',
  textSecondary: '#5A605A',
  border: '#E2E5E2',
  danger: '#C0392B',
  warning: '#D4A017',
  info: '#2563EB',
} as const;

export const spacing = (n: number) => n * 4;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  round: 999,
} as const;

export const typography = {
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 18, fontWeight: '600', color: colors.text },
  body: { fontSize: 14, fontWeight: '400', color: colors.text },
  secondary: { fontSize: 12, fontWeight: '400', color: colors.textSecondary },
} as const;
