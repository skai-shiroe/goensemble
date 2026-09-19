import { Prisma } from '@goensemble/database';

/** Distance a vol d'oiseau entre deux points (km) — matching V1. */
export function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Include Prisma : reservations ACCEPTED uniquement.
 * Les places restantes ne sont pas stockees en base, elles se deduisent
 * des reservations acceptees (places totales - places acceptees).
 */
export const acceptedBookingsInclude = {
  bookings: { where: { status: 'ACCEPTED' }, select: { seats: true } },
} satisfies Prisma.TripInclude;

export type TripWithBookings = {
  seats: number;
  bookings: { seats: number }[];
};

/** Places restantes (jamais negatif). */
export function availableSeats(trip: TripWithBookings): number {
  const taken = trip.bookings.reduce((sum, booking) => sum + booking.seats, 0);
  return Math.max(0, trip.seats - taken);
}

/**
 * Remplace la liste brute des reservations par `availableSeats`
 * (les details de reservations ne doivent pas fuiter cote client).
 */
export function withAvailableSeats<T extends TripWithBookings>(
  trip: T,
): Omit<T, 'bookings'> & { availableSeats: number } {
  const { bookings: _bookings, ...rest } = trip;
  return { ...(rest as Omit<T, 'bookings'>), availableSeats: availableSeats(trip) };
}
