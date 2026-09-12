# GO Ensemble

Application de covoiturage pensee pour le Togo — monorepo **Bun workspaces**.

## Architecture (docs/etapes A-D)

```
Expo / React Native (apps/mobile)
        | HTTPS/JSON
Elysia / Bun (apps/api)           <- logique metier, matching, OTP
        | Prisma
Supabase  PostgreSQL (packages/database)  <- DB + PostGIS + Auth
```

## Workspaces

| Package | Contenu |
|---|---|
| `apps/mobile` | App Expo (Expo Router, 4 onglets) — Phases 1-2 (UI mocks) |
| `apps/api` | API Elysia/Bun — Phase 3 (fonctionnelle, connectee a Supabase) |
| `packages/database` | Schema Prisma + migrations + client partage |
| `docs/` | Cadrage (A), UX/UI (B), Architecture (C), Modelisation (D) |

## Demarrer

```bash
bun install          # a la racine
bun api              # API sur http://localhost:3000 (test : /health)
bun mobile           # app Expo (dev)
bun db:migrate       # migrations Prisma (packages/database)
```

Test e2e API (serveur en marche) : `cd apps/api && bun run scripts/test-flow.ts`

## Etat

- [x] Phases A-D : docs
- [x] Phase E : monorepo + Expo + Elysia + Prisma + Supabase connecte
- [x] API MVP : auth OTP, profils, vehicules, trajets, recherche geo, reservations (anti-surreservation)
- [x] Mobile : navigation + ecrans (donnees mockees)
- [ ] Phase 3.4 : brancher le mobile sur l'API (remplacer les mocks)
- [ ] SMS provider Supabase (activation /auth/otp)
- [ ] Phase 4 : notifications, tracking GPS, evaluations, paiement Mobile Money

## Securite

- [ ] Regenerer `service_role` + mot de passe DB (poses en clair pendant le dev) — voir `apps/api/README.md`
- [ ] Rappel : `.env` jamais commites (verifie par .gitignore)