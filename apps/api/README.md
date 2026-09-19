# GO Ensemble — API (Elysia / Bun)

API metier du covoiturage — `apps/api` (monorepo Bun).

## Stack

- **Elysia 1.4** + **Bun** (serveur HTTP)
- **Prisma** → PostgreSQL (Supabase, pooler transaction `aws-1-eu-west-1`)
- **Supabase Auth** : OTP teleph, sessions JWT
- Geo matching V1 : Haversine (PostGIS active pour la suite)

## Demarrer

```bash
bun install          # a la racine du monorepo
bun api              # lance apps/api en mode watch sur http://localhost:3000
```

## Endpoints

| Methode | Route | Auth | Role |
|---|---|---|---|
| GET | /health | non | sante API + DB |
| POST | /auth/otp | non | envoi code SMS (necessite fournisseur SMS Supabase) |
| POST | /auth/verify | non | verifie le code, renvoie accessToken |
| GET | /users/me | oui | profil (404 needProfile si pas encore cree) |
| PUT | /users/me | oui | cree/met a jour le profil |
| GET | /users/:id | optionnelle | profil public d'un conducteur (vehicules, rating) — telephone revele seulement si reservation ACCEPTED |
| GET | /vehicles | oui | vehicles du conducteur |
| POST | /vehicles | oui | ajoute un vehicule |
| POST | /trips | oui | publie un trajet (+ waypoints) |
| GET | /trips/search?[fromLat&fromLng&toLat&toLng][&q][&limit] | optionnelle | trajets actifs a venir ; tri par proximite si coords, sinon par heure ; `q` filtre les libelles ; exclut ses propres trajets |
| GET | /trips/mine[?upcoming=true][&limit] | oui | trajets du conducteur connecte (+ places restantes) |
| GET | /trips/:id | optionnelle | detail d'un trajet (+ `myBooking` du passager connecte) |
| POST | /bookings | oui | demande de reservation (anti-surreservation) |
| GET | /bookings/mine | oui | mes demandes (`asPassenger`) et demandes recues (`asDriver`) |
| PATCH | /bookings/:id | oui | ACCEPTED/REJECTED (conducteur) ou CANCELLED |

Note : `availableSeats` n'est pas stocke en base — il est calcule
(`Trip.seats` - somme des places des reservations `ACCEPTED`).

## Test de bout en bout

Avec le serveur en marche :

```bash
cd apps/api
bun run scripts/test-flow.ts
```

Crée 2 utilisateurs de test dans Supabase et valide le flux : profil → véhicule → trajet → recherche → réservation → acceptation → anti-doublon.

## Secrets

Copier `.env.example` vers `.env` et remplir. **Ne jamais commiter `.env`.**

## CHECK-LIST SECURITE (IMPORTANT)

Ces identifiants ont transite en clair dans les echanges de developpement :

- [ ] **Regenerer la cle `service_role`** (Supabase → Settings → API keys → Rotate)
- [ ] **Regenerer le mot de passe de la base** (Settings → Database → Reset password)
- [ ] **Configurer le fournisseur SMS** (Authentication → Phone) pour activer /auth/otp