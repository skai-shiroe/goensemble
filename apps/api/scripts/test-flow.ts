import { supabase, supabaseAnon } from './src/lib/supabase';

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

const createdDriver = await supabase.auth.admin.createUser({ email: driverEmail, password, phone: '+22890' + stamp, email_confirm: true });
const createdPassenger = await supabase.auth.admin.createUser({ email: passEmail, password, phone: '+22891' + stamp, email_confirm: true });
if (createdDriver.error || createdPassenger.error) throw new Error('createUser -> ' + createdDriver.error?.message + ' / ' + createdPassenger.error?.message);
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

console.log('\n=== FLUX E2E TERMINE ===');