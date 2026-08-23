# Étape C — Architecture technique

## Application de covoiturage pensée pour le Togo

**Version :** 2.0  
**Statut :** Architecture technique

**Étapes précédentes :**
- Étape A — Document de cadrage produit
- Étape B — UX/UI

**Stack cible :**
- Expo / React Native
- TypeScript
- Elysia / Bun
- Supabase
- PostgreSQL + PostGIS
- Prisma
- Expo Notifications

---

# 1. Objectif de l'étape C

Cette étape définit l'architecture technique de l'application de covoiturage.

L'objectif est de disposer d'une architecture :

- simple à développer ;
- adaptée à un MVP ;
- sécurisée ;
- évolutive ;
- adaptée aux fonctionnalités géographiques ;
- compatible avec une montée en charge progressive.

L'architecture doit notamment permettre de gérer :

- les utilisateurs ;
- les conducteurs ;
- les passagers ;
- les véhicules ;
- les trajets ;
- les trajets récurrents ;
- les réservations ;
- le matching ;
- les évaluations ;
- les notifications ;
- la géolocalisation ;
- les photos ;
- les mécanismes de sécurité.

---

# 2. Décision architecturale principale

Le projet utilisera **Supabase comme plateforme backend**, tout en conservant **Elysia/Bun comme couche API métier**.

> Supabase ne remplace pas PostgreSQL. Supabase s'appuie sur PostgreSQL et fournit autour de celui-ci plusieurs services complémentaires.

L'architecture retenue est donc :

```text
┌──────────────────────────────┐
│      Expo / React Native     │
│          TypeScript          │
└──────────────┬───────────────┘
               │
             HTTPS
               │
               ▼
┌──────────────────────────────┐
│        Elysia / Bun          │
│                              │
│       API métier             │
│       Auth / Trips           │
│       Matching / Booking     │
│       Ratings / Security     │
└──────────────┬───────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│               SUPABASE                 │
│                                        │
│ ┌────────────┐ ┌─────────┐ ┌────────┐ │
│ │ PostgreSQL │ │ Storage │ │  Auth  │ │
│ │ + PostGIS  │ │         │ │        │ │
│ └────────────┘ └─────────┘ └────────┘ │
│                                        │
│             Realtime                   │
└────────────────────────────────────────┘


3. Pourquoi Supabase ?

Supabase permet de réduire considérablement le temps nécessaire à la mise en place de l'infrastructure.

Il fournit notamment :

PostgreSQL ;
PostGIS ;
authentification ;
OTP ;
stockage de fichiers ;
Row Level Security ;
Realtime ;
dashboard ;
gestion simplifiée de l'infrastructure PostgreSQL.

Cela permet de se concentrer davantage sur le produit et le matching plutôt que sur l'administration de l'infrastructure.

4. Pourquoi conserver Elysia / Bun ?

Même avec Supabase, Elysia/Bun reste la couche métier principale.

L'application possède des règles qui dépassent un simple CRUD.

Exemple :

Passager
   ↓
Recherche
   ↓
Trajets proches
   ↓
Calcul du matching
   ↓
Vérification des places
   ↓
Réservation
   ↓
Notification du conducteur

Cette logique doit être centralisée côté backend.

L'application mobile ne doit pas décider elle-même :

si une réservation est valide ;
combien de places restent disponibles ;
si un utilisateur peut modifier un trajet ;
si un trajet est compatible ;
si une réservation peut être acceptée.

Ces règles doivent être contrôlées côté serveur.

5. Stack technologique
Couche	Technologie	Utilisation
Mobile	Expo	Application mobile
Framework	React Native	Interface native
Langage	TypeScript	Typage
Navigation	Expo Router	Navigation
State management	Zustand	État local/global
API	Elysia	Backend
Runtime	Bun	Exécution backend
ORM	Prisma	Accès aux données
Backend platform	Supabase	Infrastructure backend
Base	PostgreSQL	Données métier
Géospatial	PostGIS	Données géographiques
Auth	Supabase Auth	Authentification
Storage	Supabase Storage	Photos/documents
Realtime	Supabase Realtime	Événements temps réel
Validation	Zod	Validation
Notifications	Expo Notifications	Push notifications
CI/CD	GitHub Actions	Automatisation
Build mobile	EAS	Android/iOS
Cache futur	Redis	Performance
6. Architecture globale
                           UTILISATEUR
                                │
                                ▼
                     ┌────────────────────┐
                     │        Expo        │
                     │   React Native     │
                     │    TypeScript      │
                     └─────────┬──────────┘
                               │
                              HTTPS
                               │
                               ▼
                     ┌────────────────────┐
                     │    Elysia / Bun    │
                     │                    │
                     │     REST API       │
                     └─────────┬──────────┘
                               │
                ┌──────────────┼───────────────┐
                │              │               │
                ▼              ▼               ▼
        ┌──────────────┐ ┌────────────┐ ┌──────────────┐
        │  Supabase    │ │ Supabase   │ │ Services     │
        │ PostgreSQL   │ │ Storage    │ │ externes     │
        │ + PostGIS    │ │            │ │ Maps         │
        └──────────────┘ └────────────┘ │ Notifications│
                                        └──────────────┘
7. Architecture mobile

Le projet Expo sera organisé par fonctionnalité.

apps/mobile/
│
├── app/
│   ├── (auth)/
│   ├── (tabs)/
│   ├── trip/
│   ├── booking/
│   └── profile/
│
├── features/
│   ├── auth/
│   ├── trips/
│   ├── matching/
│   ├── bookings/
│   ├── profile/
│   ├── vehicles/
│   └── ratings/
│
├── components/
│   ├── ui/
│   ├── trip/
│   ├── user/
│   └── vehicle/
│
├── services/
│   ├── api/
│   ├── auth/
│   ├── location/
│   └── notifications/
│
├── stores/
│   ├── auth.store.ts
│   └── trip.store.ts
│
└── types/
8. Navigation Expo

Expo Router sera utilisé pour gérer les routes.

app/
│
├── _layout.tsx
│
├── (auth)/
│   ├── login.tsx
│   ├── verify.tsx
│   └── onboarding.tsx
│
├── (tabs)/
│   ├── index.tsx
│   ├── trips.tsx
│   ├── activity.tsx
│   └── profile.tsx
│
├── trip/
│   ├── search.tsx
│   ├── results.tsx
│   ├── [id].tsx
│   └── create.tsx
│
├── booking/
│   ├── [id].tsx
│   └── confirmation.tsx
│
└── profile/
    ├── vehicle.tsx
    ├── security.tsx
    └── ratings.tsx
9. Architecture backend

Le backend Elysia/Bun sera organisé par domaines métier.

apps/api/
│
├── src/
│   │
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── vehicles/
│   │   ├── trips/
│   │   ├── matching/
│   │   ├── bookings/
│   │   ├── ratings/
│   │   ├── notifications/
│   │   └── reports/
│   │
│   ├── middleware/
│   │
│   ├── services/
│   │   ├── location/
│   │   ├── storage/
│   │   └── notification/
│   │
│   ├── utils/
│   │
│   └── index.ts
│
└── prisma/
    ├── schema.prisma
    └── migrations/
10. Monorepo

Le projet sera organisé sous forme de monorepo.

covoiturage-togo/
│
├── apps/
│   ├── mobile/
│   └── api/
│
├── packages/
│   ├── shared/
│   ├── validation/
│   └── config/
│
├── docs/
│   ├── product/
│   ├── ux/
│   └── architecture/
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
├── package.json
└── README.md
11. Package partagé

Les types communs pourront être placés dans :

packages/shared/

Exemples :

User
Vehicle
Trip
Booking
Rating
Notification

Cela permet d'avoir des contrats cohérents entre :

Mobile
   ↕
API
12. Supabase

Supabase fournira principalement quatre briques.

Supabase
│
├── PostgreSQL
│
├── Auth
│
├── Storage
│
└── Realtime
13. Supabase PostgreSQL

PostgreSQL constitue le stockage principal des données métier.

Les données principales seront :

Users
Vehicles
Trips
Bookings
Ratings
Notifications
Reports

La base devra utiliser PostGIS pour les fonctionnalités géographiques.

14. PostGIS

PostGIS est particulièrement important pour ce projet.

Le problème central de l'application est :

Trouver des personnes qui partent d'une zone proche, vont dans une direction compatible et partent à une heure compatible.

Nous devons donc manipuler :

Latitude
Longitude
Distance
Rayon
Proximité
Itinéraire

PostGIS permettra notamment d'effectuer des recherches géographiques efficaces.

Exemple conceptuel :

Rechercher les conducteurs
à moins de 2 km
du point de départ du passager.
15. Authentification

Supabase Auth sera utilisé pour l'authentification.

Le parcours principal :

Numéro de téléphone
        ↓
OTP
        ↓
Vérification
        ↓
Session utilisateur

Le backend Elysia vérifiera l'identité de l'utilisateur avant les opérations sensibles.

16. Gestion des utilisateurs

Un utilisateur possède un compte unique.

Il peut être :

Conducteur
+
Passager

Il n'y aura donc pas deux types de comptes séparés.

Exemple :

Koffi


Matin :
Conducteur
Agoè → Centre-ville


Soir :
Passager
Centre-ville → Agoè
17. Gestion des véhicules

Un utilisateur conducteur pourra enregistrer son véhicule.

Vehicle
───────
id
userId
brand
model
color
licensePlate
seats
photoUrl
verified
createdAt
updatedAt

Pour le MVP, on peut limiter le système à un véhicule actif par conducteur.

18. Gestion des fichiers

Les photos seront stockées dans Supabase Storage.

Exemples :

photo de profil ;
photo du véhicule ;
documents de vérification.

Architecture :

Expo
  │
  │ Upload
  ▼
Supabase Storage
  │
  ▼
URL / référence
  │
  ▼
PostgreSQL

Les fichiers ne seront pas stockés directement dans PostgreSQL.

19. Modèle User
User
────
id
phone
phoneVerified
firstName
lastName
avatarUrl
rating
totalTrips
status
createdAt
updatedAt

Le numéro de téléphone sera unique.

20. Modèle Vehicle
Vehicle
───────
id
userId
brand
model
color
licensePlate
seats
photoUrl
verified
createdAt
updatedAt

Relation :

User 1 ───── N Vehicle
21. Modèle Trip

Le trajet constitue le cœur métier.

Trip
────
id
driverId


departureName
departureLatitude
departureLongitude


destinationName
destinationLatitude
destinationLongitude


meetingPointName
meetingPointLatitude
meetingPointLongitude


departureAt


availableSeats
pricePerPassenger


isRecurring
recurrenceRule


status


createdAt
updatedAt
22. Informations géographiques

Les noms sont conservés pour l'expérience utilisateur :

Agoè
Tokoin
Adidogomé
Totsi

Les coordonnées sont conservées pour le traitement :

latitude
longitude

On conserve donc :

Nom humain
+
Coordonnées géographiques
23. Point de rendez-vous

Le point de rendez-vous est indépendant de l'adresse personnelle.

Exemple :

Départ :
Agoè


Point de rendez-vous :
Carrefour GTA


Destination :
Centre-ville

Cette approche permet :

de simplifier le rendez-vous ;
de préserver davantage la confidentialité ;
d'améliorer la précision du matching.
24. Trajets récurrents

Un trajet peut être récurrent.

Exemple :

Lundi
Mardi
Mercredi
Jeudi
Vendredi


07:00


Agoè → Centre-ville

Le système devra conserver la règle de récurrence.

isRecurring
recurrenceRule
25. Modèle Booking
Booking
───────
id
tripId
passengerId
seats
status
requestedAt
confirmedAt
cancelledAt

Statuts :

PENDING
CONFIRMED
REJECTED
CANCELLED
COMPLETED
26. Modèle Rating
Rating
──────
id
authorId
targetUserId
tripId
score
comment
createdAt

La notation ne pourra être effectuée qu'après un trajet éligible.

27. Modèle Notification
Notification
─────────────
id
userId
type
title
message
data
readAt
createdAt

Types :

BOOKING_REQUEST
BOOKING_ACCEPTED
BOOKING_REJECTED
BOOKING_CANCELLED
TRIP_REMINDER
TRIP_CANCELLED
RATING_RECEIVED
28. Modèle Report
Report
──────
id
reporterId
reportedUserId
tripId
reason
description
status
createdAt
resolvedAt

Ce modèle permettra de gérer les signalements.

29. Relations principales
User
 │
 ├─────────────── Vehicle
 │
 ├─────────────── Trip
 │                    │
 │                    └──── Booking
 │
 ├─────────────── Rating
 │
 ├─────────────── Notification
 │
 └─────────────── Report

Relations principales :

User 1 ─── N Trip
User 1 ─── N Booking
Trip 1 ─── N Booking
User 1 ─── N Rating
User 1 ─── N Notification
30. API REST

L'application mobile communiquera avec Elysia via HTTPS.

Base :

/api/v1

Endpoints principaux :

POST   /auth/verify


GET    /users/me
PATCH  /users/me


POST   /vehicles
GET    /vehicles
PATCH  /vehicles/:id


POST   /trips
GET    /trips
GET    /trips/:id
PATCH  /trips/:id
DELETE /trips/:id


POST   /trips/search


POST   /bookings
GET    /bookings


PATCH  /bookings/:id/accept
PATCH  /bookings/:id/reject
PATCH  /bookings/:id/cancel


POST   /ratings


GET    /notifications
PATCH  /notifications/:id/read


POST   /reports
31. Matching

Le matching sera un module indépendant.

matching/
├── matching.service.ts
├── matching.algorithm.ts
├── matching.schema.ts
└── matching.controller.ts

Entrées :

Départ
Destination
Date
Heure
Tolérance

Sorties :

Trajets compatibles
+
Score de compatibilité
32. Matching V1

Le MVP utilisera un algorithme déterministe.

Il prendra notamment en compte :

Proximité du départ
+
Proximité de la destination
+
Compatibilité horaire
+
Détour
+
Fiabilité du conducteur

Exemple :

compatibilityScore =
    departureScore * 0.35
  + destinationScore * 0.30
  + timeScore * 0.20
  + detourScore * 0.10
  + reliabilityScore * 0.05

Les coefficients pourront être ajustés après les premiers tests utilisateurs.

33. Pas de Machine Learning dans le MVP

Le matching initial ne nécessitera pas d'intelligence artificielle.

Nous voulons d'abord collecter :

Trajets
Réservations
Acceptations
Refus
Annulations
Distances
Horaires
Correspondances

Une fois suffisamment de données collectées, un modèle ML pourra éventuellement apprendre :

Quels trajets ont le plus de chances
d'être compatibles ?

L'architecture doit donc permettre d'ajouter ce système ultérieurement.

34. Gestion de la concurrence

La réservation est une opération critique.

Exemple :

1 place disponible


Passager A → réserve
Passager B → réserve

Le système doit empêcher :

A → confirmé
B → confirmé
Places = -1

La création de réservation devra être protégée par une transaction et des mécanismes d'intégrité PostgreSQL.

Résultat attendu :

A → CONFIRMED
B → REJECTED
35. Cycle de vie d'un trajet
DRAFT
  ↓
PUBLISHED
  ↓
FULL
  ↓
IN_PROGRESS
  ↓
COMPLETED

Annulation :

PUBLISHED
     ↓
CANCELLED
36. Cycle de vie d'une réservation
PENDING
   │
   ├────→ CONFIRMED
   │          │
   │          ↓
   │      COMPLETED
   │
   └────→ REJECTED

Annulation :

CONFIRMED
    ↓
CANCELLED
37. Supabase Realtime

Supabase Realtime pourra être utilisé pour certains événements.

Exemples :

nouvelle demande de réservation ;
changement de statut ;
réservation acceptée ;
annulation ;
mise à jour d'un trajet.

Cependant, le système ne doit pas dépendre du temps réel pour les opérations critiques.

La source de vérité reste :

PostgreSQL
38. Notifications push

Les notifications mobiles seront gérées avec Expo Notifications.

Architecture :

Elysia / Bun
     │
     ▼
Notification Service
     │
     ▼
Expo Push Service
     │
     ▼
Téléphone

Exemple :

Conducteur a accepté votre demande.


Agoè → Centre-ville
07:00
39. Cartographie

L'application nécessitera un fournisseur cartographique.

Fonctionnalités :

géolocalisation ;
recherche de lieux ;
géocodage ;
coordonnées ;
calcul de distance ;
itinéraires ;
éventuellement estimation du détour.

Le fournisseur exact sera choisi séparément selon :

couverture du Togo ;
qualité des données ;
coût ;
limites API ;
géocodage ;
routage.
40. Architecture géographique
Utilisateur
    │
    ▼
Position GPS
    │
    ▼
API
    │
    ▼
PostGIS
    │
    ├── Distance départ
    ├── Distance destination
    ├── Rayon
    └── Proximité

Cette architecture constitue une base importante du moteur de matching.

41. Sécurité

Les principales mesures seront :

authentification ;
autorisation ;
validation Zod ;
contrôle des permissions ;
HTTPS ;
rate limiting ;
protection des endpoints ;
validation des uploads ;
logs ;
gestion sécurisée des secrets ;
Row Level Security côté Supabase lorsque pertinent.
42. Row Level Security

Supabase permet d'utiliser RLS — Row Level Security.

Elle pourra être utilisée pour protéger directement les données.

Exemple conceptuel :

Utilisateur A
    ↓
Peut lire/modifier
ses propres données

mais :

Utilisateur A
    ↓
Impossible de modifier
les données de l'utilisateur B

L'API Elysia conservera néanmoins les contrôles métier.

43. Architecture des permissions

Le backend doit vérifier :

Qui est l'utilisateur ?
        ↓
Est-il authentifié ?
        ↓
A-t-il le droit d'effectuer cette action ?
        ↓
L'opération respecte-t-elle les règles métier ?
        ↓
Exécuter

Exemple :

PATCH /trips/123

ne doit être autorisé que si l'utilisateur est effectivement propriétaire du trajet ou dispose d'une permission appropriée.

44. Cache Redis

Redis ne sera pas obligatoire dans le MVP.

Architecture initiale :

Expo
 ↓
Elysia
 ↓
Supabase

Si les performances l'exigent :

Expo
 ↓
Elysia
 ├── Redis
 └── Supabase

Redis pourra alors servir pour :

cache ;
rate limiting ;
OTP temporaires ;
sessions temporaires ;
données de matching ;
traitements asynchrones.
45. Architecture MVP

La version initiale sera volontairement simple :

                     ┌──────────────┐
                     │     Expo     │
                     └──────┬───────┘
                            │
                           HTTPS
                            │
                            ▼
                     ┌──────────────┐
                     │ Elysia/Bun   │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Supabase   │
                     └──────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
         PostgreSQL      Storage         Auth
         + PostGIS
46. Architecture cible évolutive

Lorsque le nombre d'utilisateurs augmentera :

                         Load Balancer
                              │
                 ┌────────────┴────────────┐
                 ▼                         ▼
           API Instance 1             API Instance 2
                 │                         │
                 └────────────┬────────────┘
                              │
                   ┌──────────┴──────────┐
                   ▼                     ▼
                Redis                Supabase
                                      │
                                      ▼
                               PostgreSQL
                                + PostGIS

Cette évolution ne nécessite pas de réécrire l'application mobile.

47. Stockage des secrets

Les secrets ne doivent jamais être commités dans Git.

Exemples :

DATABASE_URL
JWT_SECRET
MAPS_API_KEY
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
EXPO_ACCESS_TOKEN
STORAGE_SECRET

Les variables sensibles seront configurées dans les environnements appropriés.

48. Environnements

Le projet disposera de trois environnements :

development
      ↓
staging
      ↓
production
Development

Développement local.

Staging

Tests et validation.

Production

Utilisateurs réels.

49. CI/CD

GitHub Actions sera utilisé pour automatiser :

Push
  ↓
Lint
  ↓
Typecheck
  ↓
Tests
  ↓
Build
  ↓
Deploy

Pour le mobile :

GitHub
   ↓
EAS
   ↓
Android / iOS

Pour l'API :

GitHub
   ↓
CI/CD
   ↓
Build
   ↓
Deploy
50. Tests
Tests unitaires

Ils couvriront notamment :

matching ;
calcul des scores ;
validation ;
règles métier ;
gestion des statuts.
Tests d'intégration

Ils couvriront :

API ;
authentification ;
PostgreSQL ;
réservations ;
notifications.
Tests E2E

Parcours principal :

Inscription
   ↓
Connexion
   ↓
Publication d'un trajet
   ↓
Recherche
   ↓
Matching
   ↓
Réservation
   ↓
Acceptation
   ↓
Trajet
   ↓
Évaluation
51. Observabilité

Le backend devra enregistrer :

requêtes ;
erreurs ;
temps de réponse ;
erreurs d'authentification ;
erreurs de réservation ;
erreurs de notification ;
événements métier importants.

Plus tard, l'architecture pourra intégrer :

Prometheus
+
Grafana

pour une supervision plus avancée.

52. Structure finale du repository
covoiturage-togo/
│
├── apps/
│   │
│   ├── mobile/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── services/
│   │   ├── stores/
│   │   └── types/
│   │
│   └── api/
│       ├── src/
│       │   ├── modules/
│       │   │   ├── auth/
│       │   │   ├── users/
│       │   │   ├── vehicles/
│       │   │   ├── trips/
│       │   │   ├── matching/
│       │   │   ├── bookings/
│       │   │   ├── ratings/
│       │   │   ├── notifications/
│       │   │   └── reports/
│       │   │
│       │   ├── middleware/
│       │   ├── services/
│       │   └── index.ts
│       │
│       └── prisma/
│           ├── schema.prisma
│           └── migrations/
│
├── packages/
│   ├── shared/
│   ├── validation/
│   └── config/
│
├── docs/
│   ├── product/
│   ├── ux/
│   └── architecture/
│
├── .github/
│   └── workflows/
│
├── package.json
└── README.md
53. Flux principal de l'application
                    UTILISATEUR
                         │
                         ▼
                       EXPO
                         │
                         ▼
                   ELYSIA / BUN
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
           Auth       Matching     Trips
              │          │          │
              └──────────┼──────────┘
                         ▼
                     SUPABASE
                         │
                  PostgreSQL/PostGIS
                         │
                         ▼
                     Booking
                         │
                         ▼
                    Notification
                         │
                         ▼
                    Utilisateur
54. Flux de matching
Passager
   │
   │ Départ + Destination + Heure
   ▼
Elysia
   │
   ▼
PostGIS
   │
   ├── Recherche proximité départ
   │
   ├── Recherche proximité destination
   │
   └── Filtre temporel
   │
   ▼
Algorithme de matching
   │
   ├── Distance
   ├── Horaire
   ├── Détour
   └── Fiabilité
   │
   ▼
Score de compatibilité
   │
   ▼
Résultats Expo
55. Flux de réservation
Passager
   │
   ▼
Sélection trajet
   │
   ▼
Elysia
   │
   ├── Vérifier utilisateur
   ├── Vérifier trajet
   ├── Vérifier places
   ├── Vérifier réservation existante
   │
   ▼
Transaction PostgreSQL
   │
   ▼
Booking
   │
   ▼
Notification conducteur
56. Flux de publication
Conducteur
    │
    ▼
Expo
    │
    ▼
Elysia
    │
    ├── Vérifier profil
    ├── Vérifier véhicule
    ├── Valider itinéraire
    ├── Valider horaire
    └── Valider places
    │
    ▼
PostgreSQL
    │
    ▼
Trip
    │
    ▼
PUBLISHED
57. Décisions techniques finales
Sujet	Décision
Application mobile	Expo
UI	React Native
Langage	TypeScript
Navigation	Expo Router
État	Zustand
Backend	Elysia
Runtime	Bun
ORM	Prisma
Backend platform	Supabase
Base de données	PostgreSQL
Géospatial	PostGIS
Authentification	Supabase Auth
OTP	Supabase Auth
Storage	Supabase Storage
Temps réel	Supabase Realtime
API	REST
Validation	Zod
Notifications	Expo Notifications
Matching MVP	Algorithme déterministe
ML	Phase ultérieure
Cache	Redis, si nécessaire
CI/CD	GitHub Actions
Build mobile	EAS
Architecture	Monorepo
58. Pourquoi cette architecture est adaptée au projet

Cette architecture permet de garder une séparation claire :

Expo
→ Interface utilisateur


Elysia/Bun
→ Logique métier


Supabase
→ Infrastructure et services backend


PostgreSQL/PostGIS
→ Données + géospatial

Chaque technologie possède donc un rôle précis.

Cela évite de construire une architecture trop lourde tout en laissant la possibilité de faire évoluer le projet.

59. Périmètre technique du MVP
À développer
 Projet Expo
 Projet Elysia/Bun
 Projet Supabase
 PostgreSQL
 PostGIS
 Prisma
 Auth téléphone/OTP
 Profil utilisateur
 Véhicules
 Publication de trajets
 Recherche
 Géolocalisation
 Matching V1
 Réservations
 Notifications
 Historique
 Évaluations
 Signalement
 Sécurité
 Tests
 CI/CD
Hors MVP initial
 Paiement Mobile Money
 Machine Learning
 Matching prédictif
 Chat avancé
 Système de recommandation
 Dashboard institutionnel
 Analytics avancés
 Architecture multi-région
60. Critères de validation de l'étape C

L'architecture sera considérée comme validée si elle permet de :

 créer un utilisateur ;
 authentifier par téléphone ;
 créer un profil ;
 ajouter un véhicule ;
 publier un trajet ;
 rechercher un trajet ;
 exploiter les coordonnées GPS ;
 effectuer une recherche géospatiale ;
 calculer un score de matching ;
 réserver une place ;
 empêcher la surréservation ;
 accepter/refuser une réservation ;
 envoyer une notification ;
 terminer un trajet ;
 évaluer un utilisateur ;
 signaler un utilisateur ;
 stocker les photos ;
 protéger les données ;
 faire évoluer l'architecture sans réécriture majeure.
61. Conclusion

L'architecture retenue pour le projet est :

                         ┌──────────────┐
                         │     EXPO     │
                         │ React Native │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ ELYSIA / BUN │
                         │  API métier  │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │   SUPABASE   │
                         └──────┬───────┘
                                │
              ┌─────────────────┼─────────────────┐
              ▼                 ▼                 ▼
       PostgreSQL            Storage             Auth
        + PostGIS

Le principe fondamental est :

Supabase gère l'infrastructure et les services backend, tandis qu'Elysia/Bun reste responsable de la logique métier de l'application.

Cette séparation est particulièrement pertinente pour le covoiturage, car le matching géospatial, la gestion des places, les réservations et les règles métier constituent le véritable cœur de l'application.

62. Prochaine étape — Étape D

La prochaine étape sera la modélisation complète de la base de données.

Nous allons transformer cette architecture en un véritable modèle PostgreSQL/PostGIS :

Étape D
   │
   ├── Tables
   ├── Colonnes
   ├── Types
   ├── Relations
   ├── Foreign Keys
   ├── Index
   ├── Enums
   ├── Contraintes
   ├── PostGIS
   ├── RLS
   └── schema.prisma