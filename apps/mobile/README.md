# GO Ensemble — App mobile (Expo)

Application de covoiturage pensée pour le Togo — client mobile du monorepo.

## Stack

- **Expo SDK 57** / React Native 0.86 / React 19
- **Expo Router 57** (navigation par fichiers)
- TypeScript strict
- Données **mockées** en Phase 1/2 (branchage API Elysia/Bun + Supabase en Phase 3)

## Structure

```
app/
  _layout.tsx        # Stack racine
  (tabs)/
    _layout.tsx      # Navigation 4 onglets (parcours UX, étape B)
    index.tsx        # Accueil — raccourcis + prochain trajet
    rechercher.tsx   # Recherche de trajets (mock + filtre)
    publier.tsx      # Wizard de publication en 3 étapes (mock)
    profil.tsx       # Profil — véhicule, trajets publiés, réservations
  trajet/[id].tsx    # Détail d'un trajet + flux de réservation (mock)
  conducteur/[id].tsx # Profil public d'un conducteur
components/          # TripCard, PrimaryButton, EmptyState
mock/                # Données mockées (Lomé : Agoè, Centre-ville, Université)
theme/               # Couleurs, espacements, typographie
types/               # Types partagés (dérivés de l'étape D)
```

## Démarrer

```bash
bun install      # à la racine du monorepo
bun mobile       # ou : cd apps/mobile && npx expo start
```

Scannez le QR code avec Expo Go (Android/iOS), ou `w` pour le web.

## Prochaines phases

- ~~**Phase 2** : wizard de publication multi-étapes, écran détail trajet/conducteur, flux réservation~~ ✅
- **Phase 3** : branchage API (Elysia/Bun + Prisma + Supabase), auth OTP, matching PostGIS
- **Phase 4** : notifications, tracking GPS/ETA, évaluations
