# GO Ensemble — API (Elysia / Bun)

API metier du covoiturage — `apps/api` (monorepo Bun).

## Stack

- **Elysia 1.4** + **Bun** (serveur HTTP)
- **Prisma** → PostgreSQL (Supabase, **pooler en mode session** `aws-1-eu-west-1:5432` — voir « Pièges connus »)
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
| GET | /users/me | oui | profil + `vehicles` + `profileComplete` (false tant qu'aucun vrai téléphone n'est enregistré) |
| PUT | /users/me | oui | crée/met à jour le profil ; téléphone normalisé en `+228XXXXXXXX` (400 si invalide, 409 si déjà pris) |
| GET | /users/:id | optionnelle | profil public d'un conducteur (vehicules, rating) — telephone revele seulement si reservation ACCEPTED |
| GET | /vehicles | oui | vehicles du conducteur |
| POST | /vehicles | oui | ajoute un vehicule |
| DELETE | /vehicles/:id | oui | supprime un vehicule (409 si un trajet a venir l'utilise, 404 si non proprietaire) |
| POST | /trips | oui | publie un trajet (+ waypoints) ; 403 si le conducteur n'a pas renseigne son telephone |
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

Crée 2 utilisateurs de test (supprimés en fin de run) et valide le flux complet : profil → véhicule → trajet → recherche → réservation → acceptation → anti-doublon, **plus les garde-fous** : `profileComplete`, normalisation/validation du téléphone (400 / 409), suppression de véhicule (409 si trajet à venir, 404 si non propriétaire, 404 si id malformé).

## Pieges connus

- **Pooler Supabase** : utiliser le mode **session** (port `5432`) pour
  `DATABASE_URL`. Le mode transaction (`6543`) ne gere pas correctement les
  transactions interactives (anti-surreservation avec `SELECT ... FOR UPDATE`) :
  erreurs intermittentes `Transaction already closed` et connexions laissees en
  `idle in transaction`, qui bloquent les requetes suivantes.
- **Telephone (`User.phone` est `@unique`)** : Supabase renvoie `''` (et non
  `null`) pour les comptes OAuth. Toute valeur vide doit etre remplacee par le
  placeholder `pending:<userId>` (helper `normalizeTogoPhone`), sinon le 2e
  compte Google provoque une violation d'unicite (500) a la creation du profil.

## Secrets

Copier `.env.example` vers `.env` et remplir. **Ne jamais commiter `.env`.**

## CHECK-LIST SECURITE (IMPORTANT)

Ces identifiants ont transite en clair dans les echanges de developpement :

- [ ] **Regenerer la cle `service_role`** (Supabase → Settings → API keys → Rotate)
- [ ] **Regenerer le mot de passe de la base** (Settings → Database → Reset password)
- [ ] **Configurer le fournisseur SMS** (Authentication → Phone) pour activer /auth/otp