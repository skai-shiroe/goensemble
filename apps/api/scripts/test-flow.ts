import { supabase, supabaseAnon } from '../src/lib/supabase';
import prisma from '@goensemble/database';

const api = 'http://localhost:3000';
const stamp = Date.now().toString().slice(-7);
const password = 'GoEnsemble!2026';

async function signIn(email: string) {
  const { data, error } = await supabaseAnon.auth.signInWithPassword({ email, password });
  if (error || !data.session) throw new Error('signIn ' + email + ' -> ' + error?.message);
  return data.session.access_token;
}

async function call(method: string, path: string, token: string | null, body?: unknown) {
  const res = await fetch(api + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  return { status: res.status, json: (() => { try { return JSON.parse(text); } catch { return text; } })() };
}

const mk = (prefix: string) => prefix + stamp + '@goensemble.dev';
const driverEmail = mk('drv');
const passEmail = mk('pax');


// Identifiants des utilisateurs de test : permet un nettoyage garanti (finally),
// meme si le flux echoue en cours de route (c'etait la cause des residus en base).
const TEST_IDS: { driver?: string; passenger?: string } = {};
try {
  const createdDriver = await supabase.auth.admin.createUser({ email: driverEmail, password, phone: '+22890' + stamp, email_confirm: true });
  const createdPassenger = await supabase.auth.admin.createUser({ email: passEmail, password, phone: '+22891' + stamp, email_confirm: true });
  if (createdDriver.error || createdPassenger.error) throw new Error('createUser -> ' + createdDriver.error?.message + ' / ' + createdPassenger.error?.message);
  const driverAuthId = createdDriver.data.user?.id;
  const passengerAuthId = createdPassenger.data.user?.id;
  if (!driverAuthId || !passengerAuthId) throw new Error('createUser -> identifiants manquants');
  TEST_IDS.driver = driverAuthId;
  TEST_IDS.passenger = passengerAuthId;
  console.log('OK createUser (driver + passager)');

  const dt = await signIn(driverEmail);
  const pt = await signIn(passEmail);
  console.log('OK signIn (2 sessions)');

  const me = await call('GET', '/users/me', dt);
  console.log('GET /users/me ->', me.status, JSON.stringify(me.json));

  const mePut = await call('PUT', '/users/me', dt, { fullName: 'Kossi Test Driver' });
  console.log('PUT /users/me ->', mePut.status);

  const veh = await call('POST', '/vehicles', dt, { model: 'Toyota Corolla', plate: 'TO ' + stamp.slice(0, 4) + ' CF', color: 'Blanc', seats: 4 });
  console.log('POST /vehicles ->', veh.status, (veh.json as { id?: string }).id ?? '');
  const vehicleId = (veh.json as { id: string }).id;

  const future = new Date(Date.now() + 3600_000).toISOString();
  const trip = await call('POST', '/trips', dt, {
    vehicleId,
    fromLabel: 'Agoè Assiyéyé',
    toLabel: 'Centre-ville (Bourse du Travail)',
    fromLat: 6.1846, fromLng: 1.2229, toLat: 6.1308, toLng: 1.2229,
    departureTime: future,
    contribution: 500,
    seats: 3,
    isRecurring: true,
  });
  console.log('POST /trips ->', trip.status, (trip.json as { id?: string }).id ?? JSON.stringify(trip.json));
  const tripId = (trip.json as { id: string }).id;

  // Un depart dans le passe est refuse (400) : sinon le trajet reste invisible
  // en recherche et l'utilisateur croit que sa publication a echoue.
  const pastTrip = await call('POST', '/trips', dt, {
    vehicleId,
    fromLabel: 'Agoe Assiyeye',
    toLabel: 'Centre-ville (Bourse du Travail)',
    fromLat: 6.1846, fromLng: 1.2229, toLat: 6.1308, toLng: 1.2229,
    departureTime: new Date(Date.now() - 3600_000).toISOString(),
    contribution: 500, seats: 1,
  });
  console.log('POST /trips (depart passe) ->', pastTrip.status, JSON.stringify(pastTrip.json));

  const search = await call('GET', '/trips/search?fromLat=6.1846&fromLng=1.2229&toLat=6.1308&toLng=1.2229', null);
  const found = (search.json as { id: string }[]).some((t) => t.id === tripId);
  console.log('GET /trips/search ->', search.status, 'trajet present:', found);

  const booking = await call('POST', '/bookings', pt, { tripId, seats: 1 });
  console.log('POST /bookings ->', booking.status, (booking.json as { id?: string }).id ?? JSON.stringify(booking.json));
  const bookingId = (booking.json as { id: string }).id;

  const accept = await call('PATCH', '/bookings/' + bookingId, dt, { status: 'ACCEPTED' });
  console.log('PATCH accept ->', accept.status, (accept.json as { status?: string }).status ?? JSON.stringify(accept.json));

  // Doublon impossible : le meme passager reserve 2 fois
  const dup = await call('POST', '/bookings', pt, { tripId, seats: 1 });
  console.log('POST /bookings dup ->', dup.status, JSON.stringify(dup.json));

  // ============ Nouveaux endpoints (Phase 3.4) ============
  const driverId = (mePut.json as { id: string }).id;

  const mine = await call('GET', '/trips/mine', dt);
  const mineTrips = (mine.json as { id: string; availableSeats?: number }[]) ?? [];
  const mineTrip = mineTrips.find((t) => t.id === tripId);
  console.log('GET /trips/mine ->', mine.status, '| trajet present:', Boolean(mineTrip), '| places restantes:', mineTrip?.availableSeats);

  const mineUpcoming = await call('GET', '/trips/mine?upcoming=true', dt);
  console.log('GET /trips/mine?upcoming=true ->', mineUpcoming.status, '| nb:', Array.isArray(mineUpcoming.json) ? mineUpcoming.json.length : 'n/a');

  const detail = await call('GET', '/trips/' + tripId, pt);
  const detailJson = detail.json as { availableSeats?: number; myBooking?: { status?: string } | null; driver?: { id?: string } };
  console.log('GET /trips/:id ->', detail.status, '| places:', detailJson.availableSeats, '| myBooking:', detailJson.myBooking?.status ?? null, '| conducteur ok:', detailJson.driver?.id === driverId);

  const missingTrip = await call('GET', '/trips/' + crypto.randomUUID(), pt);
  console.log('GET /trips/:id inconnu ->', missingTrip.status);
  const badTripId = await call('GET', '/trips/pas-un-uuid', pt);
  console.log('GET /trips/:id malforme ->', badTripId.status);

  const paxMine = await call('GET', '/bookings/mine', pt);
  const paxList = (paxMine.json as { asPassenger?: { id: string }[] }).asPassenger ?? [];
  console.log('GET /bookings/mine (passager) ->', paxMine.status, '| demande presente:', paxList.some((b) => b.id === bookingId));

  const drvMine = await call('GET', '/bookings/mine', dt);
  const drvList = (drvMine.json as { asDriver?: { id: string; passenger?: { id: string } }[] }).asDriver ?? [];
  console.log('GET /bookings/mine (conducteur) ->', drvMine.status, '| demande recue:', drvList.some((b) => b.id === bookingId), '| passager joint:', Boolean(drvList[0]?.passenger));

  // Vue agregee consommee par l'accueil et le profil (1 requete au lieu de 4).
  const overview = await call('GET', '/users/me/overview', dt);
  const ov = overview.json as {
    profile?: { id?: string; vehicles?: unknown[] };
    myTrips?: { id: string }[];
    suggestions?: unknown[];
    bookings?: { asPassenger?: unknown[]; asDriver?: unknown[] };
  };
  console.log(
    'GET /users/me/overview ->', overview.status,
    '| profil:', ov.profile?.id === driverId,
    '| vehicules:', ov.profile?.vehicles?.length ?? 0,
    '| mes trajets:', ov.myTrips?.length ?? 0,
    '| demandes recues:', ov.bookings?.asDriver?.length ?? 0,
    '| suggestions:', ov.suggestions?.length ?? 0,
  );

  const publicUser = await call('GET', '/users/' + driverId, pt);
  const puJson = publicUser.json as { phone?: string | null; phoneHidden?: boolean; vehicles?: unknown[] };
  console.log('GET /users/:id (reservation acceptee) ->', publicUser.status, '| tel:', puJson.phone, '| masque:', puJson.phoneHidden, '| vehicules:', puJson.vehicles?.length ?? 0);

  const publicAnon = await call('GET', '/users/' + driverId, null);
  const paJson = publicAnon.json as { phone?: string | null; phoneHidden?: boolean };
  console.log('GET /users/:id (anonyme) ->', publicAnon.status, '| tel:', paJson.phone, '| masque:', paJson.phoneHidden);

  const missingUser = await call('GET', '/users/' + crypto.randomUUID(), pt);
  console.log('GET /users/:id inconnu ->', missingUser.status);

  const searchText = await call('GET', '/trips/search?q=Ago&limit=5', pt);
  const searchTextJson = (searchText.json as { id: string }[]) ?? [];
  console.log('GET /trips/search?q=Ago ->', searchText.status, '| trajet present:', searchTextJson.some((t) => t.id === tripId));

  const searchOwn = await call('GET', '/trips/search?q=Ago&limit=5', dt);
  const searchOwnJson = (searchOwn.json as { driver?: { id: string } }[]) ?? [];
  console.log('GET /trips/search (conducteur) ->', searchOwn.status, '| propres trajets exclus:', !searchOwnJson.some((t) => t.driver?.id === driverId));

  // ============ Garde-fous telephone (etape A) ============
  const meAfterPut = await call('GET', '/users/me', dt);
  console.log(
    'GET /users/me -> profileComplete:',
    (meAfterPut.json as { profileComplete?: boolean }).profileComplete,
  );

  const badPhone = await call('PUT', '/users/me', dt, { phone: '123' });
  console.log('PUT /users/me (numero invalide) ->', badPhone.status, JSON.stringify(badPhone.json));

  const conflictPhone = await call('PUT', '/users/me', dt, { phone: '+22891' + stamp });
  console.log(
    'PUT /users/me (numero deja pris) ->',
    conflictPhone.status,
    JSON.stringify(conflictPhone.json),
  );

  const spacedPhone = await call('PUT', '/users/me', dt, { phone: '+228 90 ' + stamp });
  console.log(
    'PUT /users/me (saisie avec espaces) ->',
    spacedPhone.status,
    '| stocke:',
    (spacedPhone.json as { phone?: string }).phone,
  );

  // ============ Garde-fous vehicules (etape C) ============
  // 1) Un vehicule utilise par un trajet a venir ne peut pas etre supprime.
  const delUsed = await call('DELETE', '/vehicles/' + vehicleId, dt);
  console.log('DELETE /vehicles/:id (trajet a venir) ->', delUsed.status, JSON.stringify(delUsed.json));

  // 2) Un vehicule libre se supprime normalement.
  const veh2 = await call('POST', '/vehicles', dt, { model: 'Yamaha XT', plate: 'TO 99 TG', seats: 2 });
  const veh2Id = (veh2.json as { id: string }).id;
  const delFree = await call('DELETE', '/vehicles/' + veh2Id, dt);
  console.log('DELETE /vehicles/:id (libre) ->', delFree.status, JSON.stringify(delFree.json));

  // 3) Un autre utilisateur ne peut pas le supprimer (404 : pas le proprietaire).
  const delForeign = await call('DELETE', '/vehicles/' + vehicleId, pt);
  console.log('DELETE /vehicles/:id (non proprietaire) ->', delForeign.status);

  // 4) Id malforme -> 404 (pas de 500 Prisma).
  const delBad = await call('DELETE', '/vehicles/pas-un-uuid', dt);
  console.log('DELETE /vehicles/:id malforme ->', delBad.status);

} catch (error) {
  console.error('=== FLUX E2E ECHOUE ===');
  console.error(error);
  process.exitCode = 1;
} finally {
  await cleanupTestData();
}
console.log('\n=== FLUX E2E TERMINE ===');

/** Supprime les donnees de test (users auth + cascade DB) — appelee dans le finally. */
async function cleanupTestData() {
  // Les FK Prisma n'ont pas de onDelete: Cascade -> suppression dans l'ordre.
  try {
    const testIds = [TEST_IDS.driver, TEST_IDS.passenger].filter(Boolean) as string[];
    const bookings = await prisma.booking.deleteMany({
      where: { OR: [{ passengerId: { in: testIds } }, { trip: { driverId: { in: testIds } } }] },
    });
    const waypoints = await prisma.waypoint.deleteMany({ where: { trip: { driverId: { in: testIds } } } });
    const trips = await prisma.trip.deleteMany({ where: { driverId: { in: testIds } } });
    const vehicles = await prisma.vehicle.deleteMany({ where: { ownerId: { in: testIds } } });
    const users = await prisma.user.deleteMany({ where: { id: { in: testIds } } });
    if (TEST_IDS.driver) await supabase.auth.admin.deleteUser(TEST_IDS.driver);
    if (TEST_IDS.passenger) await supabase.auth.admin.deleteUser(TEST_IDS.passenger);
    console.log(
      'CLEANUP -> reservations:', bookings.count,
      '| waypoints:', waypoints.count,
      '| trajets:', trips.count,
      '| vehicules:', vehicles.count,
      '| users:', users.count,
      '| users auth:', (TEST_IDS.driver ? 1 : 0) + (TEST_IDS.passenger ? 1 : 0),
    );
  } catch (error) {
    console.warn('CLEANUP -> echec partiel:', (error as Error).message);
  }
}
