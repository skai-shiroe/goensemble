import { supabase } from './supabase';
import type { Trip, User, Vehicle } from '@/types';

// URL de l'API — configurable via EXPO_PUBLIC_API_URL (.env).
// Fallback à l'IP LAN du PC en dev (visible dans Metro).
const API_BASE_URL =
    (process.env.EXPO_PUBLIC_API_URL ?? 'http://192.168.1.85:3000').replace(/\/+$/, '');

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// ============ Types bruts tels qu'émis par l'API ( Prisma JSON ) ============

export interface ApiUser {
  id: string;
  phone: string;
  fullName: string | null;
  photoUrl: string | null;
  rating: number;
  tripsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiVehicle {
  id: string;
  ownerId: string;
  model: string;
  plate: string;
  color: string | null;
  seats: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiWaypoint {
  id: string;
  tripId: string;
  label: string;
  lat: number;
  lng: number;
  order: number;
}

export interface ApiTrip {
  id: string;
  driverId: string;
  vehicleId: string;
  status: string;
  fromLabel: string;
  toLabel: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
  departureTime: string;
  arrivalTime: string | null;
  contribution: number;
  seats: number;
  isRecurring: boolean;
  createdAt: string;
  updatedAt: string;
  driver: ApiUser;
  vehicle: ApiVehicle;
  waypoints?: ApiWaypoint[];
  bookings?: { seats: number }[];
  availableSeats?: number;
  myBooking?: { id: string; status: string; seats: number } | null;
  matchScore?: number;
}

export interface ApiBooking {
  id: string;
  tripId: string;
  passengerId: string;
  seats: number;
  status: string;
  createdAt: string;
  trip: ApiTrip;
  passenger?: ApiUser;
}

export interface ApiOverview {
  profile: ApiUser & {
    vehicles?: ApiVehicle[];
    needProfile?: boolean;
    profileComplete?: boolean;
  };
  vehicles: ApiVehicle[];
  myTrips: ApiTrip[];
  suggestions: ApiTrip[];
  bookings: { asPassenger: ApiBooking[]; asDriver: ApiBooking[] };
}

export interface PublicUserProfile {
  id: string;
  fullName: string | null;
  photoUrl: string | null;
  rating: number;
  tripsCount: number;
  vehicles: ApiVehicle[];
  phone: string | null;
  phoneHidden: boolean;
}

// ============ Helpers de formatage ============

function formatTime(iso: string | null | undefined): string {
  if (!iso) return '—';
  const d = new Date(iso);
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

// ============ Mappers API → types du mobile ============

function mapApiUser(u: ApiUser): User {
  return {
    id: u.id,
    fullName: u.fullName ?? 'Utilisateur',
    phone: u.phone ?? '',
    rating: u.rating ?? 0,
    tripsCount: u.tripsCount ?? 0,
    photoUrl: u.photoUrl ?? null,
  };
}

function mapApiVehicle(v: ApiVehicle): Vehicle {
  return {
    id: v.id,
    model: v.model,
    plate: v.plate,
    color: v.color ?? '—',
    seats: v.seats ?? 4,
  };
}

export function mapApiTrip(t: ApiTrip, role: 'driver' | 'passenger' = 'passenger'): Trip {
  const takenSeats = t.bookings?.reduce((sum, b) => sum + (b.seats ?? 0), 0) ?? 0;
  const availableSeats = t.availableSeats ?? Math.max(0, (t.seats ?? 4) - takenSeats);
  const totalSeats = t.vehicle?.seats ?? t.seats ?? 4;
  return {
    id: t.id,
    driver: mapApiUser(t.driver),
    vehicle: t.vehicle ? mapApiVehicle(t.vehicle) : ({} as Vehicle),
    departure: t.fromLabel,
    destination: t.toLabel,
    departureTime: formatTime(t.departureTime),
    arrivalTime: formatTime(t.arrivalTime),
    availableSeats,
    totalSeats,
    contribution: t.contribution ?? 0,
    isRecurring: t.isRecurring ?? false,
    role,
  };
}

// ============ Client HTTP typé ============

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  let res: Response;
  try {
    res = await fetch(API_BASE_URL + path, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init?.headers ?? {}),
      },
    });
  } catch {
    // Panne réseau (serveur éteint, IP LAN obsolète, téléphone hors Wi-Fi) :
    // un message actionnable au lieu du « Network request failed » brut, qui
    // était indifférenciable d'une erreur métier côté écran.
    throw new ApiError(
      0,
      `API injoignable (${API_BASE_URL}). Vérifiez que le serveur tourne et que ` +
        'EXPO_PUBLIC_API_URL correspond à l’IP du PC sur le réseau local.',
    );
  }
  const text = await res.text();
  let json: unknown = null;
  if (text) {
    try { json = JSON.parse(text); } catch { json = text; }
  }
  if (!res.ok) {
    const err = json && typeof json === 'object' && 'error' in json ? (json as { error: unknown }).error : null;
    throw new ApiError(res.status, err ? String(err) : `HTTP ${res.status}`);
  }
  return json as T;
}
export const api = {
  // --- Profil ---
  getMe: () =>
    apiFetch<
      ApiUser & { vehicles?: ApiVehicle[]; needProfile?: boolean; profileComplete?: boolean }
    >('/users/me'),
  /**
   * Vue agregee (accueil + profil) : profil, vehicules, mes trajets, suggestions
   * et reservations en UNE seule requete — evite 4 allers-retours reseau.
   */
  getOverview: () => apiFetch<ApiOverview>('/users/me/overview'),
  updateMe: (body: { fullName?: string; photoUrl?: string; phone?: string }) =>
    apiFetch<ApiUser>('/users/me', { method: 'PUT', body: JSON.stringify(body) }),
  listVehicles: () => apiFetch<ApiVehicle[]>('/vehicles'),
  createVehicle: (body: { model: string; plate: string; color?: string; seats?: number }) =>
    apiFetch<ApiVehicle>('/vehicles', { method: 'POST', body: JSON.stringify(body) }),
  deleteVehicle: (id: string) =>
    apiFetch<{ deleted: boolean; id: string }>(`/vehicles/${id}`, { method: 'DELETE' }),

  // --- Trajets ---
  searchTrips: (params: {
    fromLat?: number; fromLng?: number; toLat?: number; toLng?: number;
    q?: string; limit?: number;
  }) => {
    const qs = new URLSearchParams();
    if (params.fromLat != null) qs.set('fromLat', String(params.fromLat));
    if (params.fromLng != null) qs.set('fromLng', String(params.fromLng));
    if (params.toLat != null) qs.set('toLat', String(params.toLat));
    if (params.toLng != null) qs.set('toLng', String(params.toLng));
    if (params.q) qs.set('q', params.q);
    if (params.limit) qs.set('limit', String(params.limit));
    const query = qs.toString();
    return apiFetch<ApiTrip[]>('/trips/search' + (query ? '?' + query : ''));
  },
  getTrip: (id: string) =>
    apiFetch<ApiTrip & { myBooking: { id: string; status: string; seats: number } | null }>(
      `/trips/${id}`,
    ),
  getMyTrips: (upcoming = false) =>
    apiFetch<ApiTrip[]>('/trips/mine' + (upcoming ? '?upcoming=true' : '')),
  createTrip: (body: {
    vehicleId: string; fromLabel: string; toLabel: string;
    fromLat: number; fromLng: number; toLat: number; toLng: number;
    departureTime: string; arrivalTime?: string; contribution?: number;
    seats?: number; isRecurring?: boolean;
    waypoints?: Array<{ label: string; lat: number; lng: number; order?: number }>;
  }) => apiFetch<ApiTrip>('/trips', { method: 'POST', body: JSON.stringify(body) }),

  // --- Réservations ---
  getMyBookings: () =>
    apiFetch<{ asPassenger: ApiBooking[]; asDriver: ApiBooking[] }>('/bookings/mine'),
  createBooking: (body: { tripId: string; seats?: number }) =>
    apiFetch<{ id: string; status: string; seats: number }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  /** Conducteur : accepter/refuser une demande. Passager : annuler la sienne. */
  updateBookingStatus: (id: string, status: 'ACCEPTED' | 'REJECTED' | 'CANCELLED') =>
    apiFetch<ApiBooking>(`/bookings/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  // --- Profil public (conducteur vu par un passager) ---
  getPublicUser: (id: string) => apiFetch<PublicUserProfile>(`/users/${id}`),

  // --- Géocodage léger (Nominatim) — pour publier sans GPS ---
  geocode: async (label: string): Promise<[number, number] | null> => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=tg&q=` +
          encodeURIComponent(label),
        { headers: { 'User-Agent': 'goensemble-mobile/1.0' } },
      );
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0 && data[0].lat && data[0].lon) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      }
      return null;
    } catch {
      return null;
    }
  },
};
