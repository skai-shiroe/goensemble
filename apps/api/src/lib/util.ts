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

/**
 * Normalise un numero de telephone togolais vers le format E.164 (+228XXXXXXXX).
 * Accepte les saisies courantes : « +22890123456 », « 22890123456 »,
 * « 90123456 », « 90 12 34 56 », « 0022890123456 ».
 * Retourne `null` si la valeur n'est pas un numero exploitable
 * (notamment la chaine vide renvoyee par Supabase pour les comptes OAuth,
 * qui ne doit jamais etre stockee : la colonne `phone` est @unique).
 */
export function normalizeTogoPhone(raw?: string | null): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '').replace(/^00/, '');
  const national = /^228\d{8,9}$/.test(digits) ? digits.slice(3) : digits;
  if (!/^\d{8,9}$/.test(national)) return null;
  return `+228${national}`;
}
