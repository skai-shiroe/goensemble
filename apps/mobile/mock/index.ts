/**
 * Données mockées — remplacées en Phase 3 par le client HTTP (Elysia/Bun).
 * Les trajets reflètent les trajets domicile-travail types à Lomé.
 */
import type { Trip, User, Vehicle } from '@/types';

export const mockCurrentUser: User = {
  id: 'u1',
  fullName: 'Kossi Amégan',
  phone: '+228 90 00 00 00',
  rating: 4.8,
  tripsCount: 23,
};

export const mockMyVehicle: Vehicle = {
  id: 'v1',
  model: 'Toyota Corolla',
  plate: 'TO 4521 LM',
  color: 'Blanc',
  seats: 4,
};

const mockDriverA: User = {
  id: 'u2',
  fullName: 'Ama Dossou',
  phone: '+228 91 11 22 33',
  rating: 4.9,
  tripsCount: 41,
};

const mockDriverB: User = {
  id: 'u3',
  fullName: 'Yao Kodjo',
  phone: '+228 92 44 55 66',
  rating: 4.6,
  tripsCount: 12,
};

const mockVehicleA: Vehicle = {
  id: 'v2',
  model: 'Hyundai Accent',
  plate: 'TO 7788 AB',
  color: 'Gris',
  seats: 4,
};

const mockVehicleB: Vehicle = {
  id: 'v3',
  model: 'Kia Rio',
  plate: 'TO 1234 CD',
  color: 'Bleu',
  seats: 3,
};

export const mockTrips: Trip[] = [
  {
    id: 't1',
    driver: mockDriverA,
    vehicle: mockVehicleA,
    departure: 'Agoè Assiyéyé',
    destination: 'Centre-ville (Bourse du Travail)',
    departureTime: '07:00',
    arrivalTime: '07:40',
    availableSeats: 2,
    totalSeats: 4,
    contribution: 500,
    isRecurring: true,
    role: 'driver',
  },
  {
    id: 't2',
    driver: mockDriverB,
    vehicle: mockVehicleB,
    departure: 'Université de Lomé',
    destination: 'Agoè Nord',
    departureTime: '17:30',
    arrivalTime: '18:10',
    availableSeats: 1,
    totalSeats: 3,
    contribution: 400,
    isRecurring: true,
    role: 'driver',
  },
  {
    id: 't3',
    driver: mockDriverA,
    vehicle: mockVehicleA,
    departure: 'Centre-ville (Bourse du Travail)',
    destination: 'Agoè Assiyéyé',
    departureTime: '18:00',
    arrivalTime: '18:45',
    availableSeats: 3,
    totalSeats: 4,
    contribution: 500,
    isRecurring: true,
    role: 'driver',
  },
];

export const mockMyTrips: Trip[] = [
  {
    id: 'm1',
    driver: mockCurrentUser,
    vehicle: mockMyVehicle,
    departure: 'Agoè Assiyéyé',
    destination: 'Université de Lomé',
    departureTime: '06:45',
    arrivalTime: '07:25',
    availableSeats: 3,
    totalSeats: 4,
    contribution: 450,
    isRecurring: true,
    role: 'driver',
  },
];

export function getTripById(id: string): Trip | undefined {
  return [...mockTrips, ...mockMyTrips].find((t) => t.id === id);
}

export function getUserById(id: string): User | undefined {
  return [mockCurrentUser, mockDriverA, mockDriverB].find((u) => u.id === id);
}

export const mockMyBookings: Trip[] = [
  {
    ...mockTrips[2],
    role: 'passenger',
  },
];

