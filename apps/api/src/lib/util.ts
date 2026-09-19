/** Verifie qu'une chaine est un UUID (evite un 500 Prisma sur un id malforme). */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(value: unknown): value is string {
  return typeof value === 'string' && UUID_RE.test(value);
}

/** Borne un parametre de pagination (string en query) entre 1 et `max`. */
export function clampLimit(value: unknown, fallback = 50, max = 100): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(Math.floor(parsed), max);
}
