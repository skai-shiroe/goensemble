import { supabase } from './supabase';

// IP LAN du PC (visible dans Metro : exp://192.168.1.237:8081).
// Android emulator : utiliser http://10.0.2.2:3000
// Telephone sur le meme Wi-Fi que le PC : garder 192.168.1.237
export const API_BASE_URL = 'http://192.168.1.237:3000';

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  const res = await fetch(API_BASE_URL + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
      ...(init?.headers ?? {}),
    },
  });

  const text = await res.text();
  const json = text ? JSON.parse(text) : null;
  if (!res.ok) {
    throw new Error((json && json.error) ? String(json.error) : 'HTTP ' + res.status);
  }
  return json as T;
}

export interface UserProfile {
  id: string;
  phone: string;
  fullName: string | null;
  photoUrl?: string | null;
  rating: number;
  tripsCount: number;
  needProfile?: boolean;
}

export const api = {
  getMe: () => apiFetch<UserProfile & { vehicles?: unknown[] }>('/users/me'),
  updateMe: (body: { fullName?: string; photoUrl?: string }) =>
    apiFetch<UserProfile>('/users/me', { method: 'PUT', body: JSON.stringify(body) }),
  listVehicles: () => apiFetch<unknown[]>('/vehicles'),
  searchTrips: (q: { fromLat: number; fromLng: number; toLat: number; toLng: number }) =>
    apiFetch<unknown[]>(
      '/trips/search?fromLat=' + q.fromLat + '&fromLng=' + q.fromLng + '&toLat=' + q.toLat + '&toLng=' + q.toLng,
    ),
  createBooking: (body: { tripId: string; seats?: number }) =>
    apiFetch<unknown>('/bookings', { method: 'POST', body: JSON.stringify(body) }),
};