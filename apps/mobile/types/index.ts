/**
 * Types partagés — dérivés de la modélisation (Étape D, périmètre MVP)
 */
export type TripRole = 'driver' | 'passenger';

export interface User {
  id: string;
  fullName: string;
  phone: string;
  rating: number;
  tripsCount: number;
    photoUrl?: string | null;
}

export interface Vehicle {
  id: string;
  model: string;
  plate: string;
  color: string;
  seats: number;
}

export interface Trip {
  id: string;
  driver: User;
  vehicle: Vehicle;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  totalSeats: number;
  contribution: number; // FCFA
  isRecurring: boolean;
  role: TripRole;
}
