# Étape D — Modélisation de la base de données

## Application de covoiturage pensée pour le Togo

**Version :** 2.1  
**Statut :** Modélisation des données  
**Dernière mise à jour :** Août 2026

### Étapes précédentes

- Étape A — Cadrage produit
- Étape B — UX/UI
- Étape C — Architecture technique

### Étape actuelle

- Étape D — Modélisation de la base de données

### Stack concernée

- Expo / React Native
- TypeScript
- Elysia / Bun
- Supabase
- PostgreSQL
- PostGIS
- Prisma
- Supabase Realtime
- Expo Notifications

---

# 1. Objectif de l'étape D

Cette étape transforme l'architecture technique définie dans l'étape C en un modèle de données concret.

Le modèle doit permettre de gérer :

- les utilisateurs ;
- les véhicules ;
- les trajets ;
- les réservations ;
- les points de rendez-vous ;
- les points intermédiaires ;
- le matching ;
- les évaluations ;
- les notifications ;
- les appareils mobiles ;
- les signalements ;
- le suivi GPS en temps réel ;
- l'ETA du véhicule ;
- les données géographiques.

L'objectif est d'obtenir une base suffisamment solide pour commencer l'implémentation du backend.

---

# 2. Principes de modélisation

Le modèle repose sur plusieurs principes.

## 2.1 Un utilisateur peut être conducteur et passager

Il n'existe pas deux comptes différents.

Un même utilisateur peut être :

```text
Conducteur le matin
Agoè → Centre-ville

Passager le soir
Centre-ville → Agoè

Le modèle utilise donc une seule entité :

User
2.2 Un trajet appartient à un conducteur

Un trajet possède :

1 conducteur
1 véhicule
0 → N passagers

Structure :

Trip
 ├── Driver
 ├── Vehicle
 └── Bookings[]
2.3 Une réservation appartient à un passager

Une réservation représente la demande d'un passager pour rejoindre un trajet.

Trip
  │
  └── Booking
          │
          └── Passenger
2.4 Les données géographiques sont centrales

Le matching dépend notamment de :

la proximité du départ ;
la proximité de la destination ;
l'heure ;
le détour ;
les points intermédiaires.

PostGIS sera donc utilisé pour les recherches géospatiales.

2.5 Le tracking GPS est temporaire

La localisation du conducteur ne doit pas être disponible en permanence.

Le tracking est lié à un trajet actif.

Trajet publié
      ↓
Réservation confirmée
      ↓
Conducteur démarre
      ↓
Tracking activé
      ↓
Passager suit le véhicule
      ↓
Conducteur arrive
      ↓
Tracking terminé
3. Modèle relationnel global
                              ┌──────────────┐
                              │    USERS     │
                              └──────┬───────┘
                                     │
             ┌───────────────────────┼──────────────────────┐
             │                       │                      │
             ▼                       ▼                      ▼
         VEHICLES                  TRIPS                 DEVICES
                                     │
                      ┌──────────────┼──────────────┐
                      │              │              │
                      ▼              ▼              ▼
                  BOOKINGS       WAYPOINTS       TRACKING
                      │                             │
                      ▼                             ▼
                    USERS                      LOCATIONS
                      │
             ┌────────┴────────┐
             ▼                 ▼
          RATINGS          NOTIFICATIONS


USER
 │
 └──── REPORTS
4. Liste des tables

Le modèle initial comprend :

users
vehicles
trips
bookings
ratings
notifications
user_devices
reports
trip_waypoints
trip_tracking_sessions
trip_locations
5. Table users

La table users représente le profil métier d'un utilisateur.

L'authentification est gérée par Supabase Auth.

users
────────────────────────────
id
phone
phone_verified
first_name
last_name
avatar_url
bio
rating_average
rating_count
total_trips
status
created_at
updated_at
5.1 Statut utilisateur
ACTIVE
SUSPENDED
BANNED
DELETED
5.2 Exemple
User
────
Koffi Mensah


Téléphone :
+228 XX XX XX XX


Note :
4.8 / 5


Trajets :
37


Statut :
ACTIVE
6. Table vehicles

Un utilisateur peut posséder plusieurs véhicules.

vehicles
────────────────────────────
id
user_id
brand
model
color
license_plate
seats
photo_url
is_verified
is_active
created_at
updated_at

Relation :

User 1 ───── N Vehicle
6.1 Exemple
Koffi
 │
 ├── Toyota Corolla
 │   4 places
 │
 └── Hyundai Tucson
     5 places

Un seul véhicule est associé à un trajet donné.

7. Table trips

Le trajet est le cœur du système.

trips
────────────────────────────────
id
driver_id
vehicle_id


departure_name
departure_latitude
departure_longitude


destination_name
destination_latitude
destination_longitude


meeting_point_name
meeting_point_latitude
meeting_point_longitude


departure_at


available_seats
price_per_passenger


is_recurring
recurrence_rule


status


created_at
updated_at
8. Localisation du trajet

Chaque trajet possède plusieurs informations géographiques.

Départ
departure_name
departure_latitude
departure_longitude
Destination
destination_name
destination_latitude
destination_longitude
Point de rendez-vous
meeting_point_name
meeting_point_latitude
meeting_point_longitude
9. Exemple de trajet
Conducteur :
Koffi


Départ :
Agoè


Point de rendez-vous :
Carrefour GTA


Destination :
Centre-ville


Départ :
07:00


Places :
3

Représentation :

Agoè
  │
  ▼
Carrefour GTA
  │
  ▼
Tokoin
  │
  ▼
Centre-ville
10. Pourquoi un checkpoint ?

Le système ne doit pas nécessairement demander au conducteur de récupérer le passager devant son domicile.

Le point de rendez-vous peut être :

un carrefour ;
une station-service ;
un arrêt connu ;
un lieu public ;
un point facilement identifiable.

Exemple :

Passager :
Totsi


Checkpoint :
Carrefour Totsi


Conducteur :
Agoè → Centre-ville

Cela améliore :

la sécurité ;
la confidentialité ;
la simplicité du rendez-vous ;
la précision du matching.
11. Table trip_waypoints

Les trajets pourront contenir plusieurs points intermédiaires.

trip_waypoints
────────────────────────────
id
trip_id
name
latitude
longitude
position
created_at

Relation :

Trip 1 ───── N TripWaypoint
11.1 Exemple
Trip
 │
 ├── Agoè
 │
 ├── Carrefour GTA
 │
 ├── Tokoin
 │
 └── Centre-ville

Le champ position permet de conserver l'ordre.

12. Table bookings

Une réservation représente une demande de participation à un trajet.

bookings
────────────────────────────
id
trip_id
passenger_id
seats
status
requested_at
confirmed_at
cancelled_at
completed_at

Relations :

Trip 1 ───── N Booking


User 1 ───── N Booking
13. Statuts des réservations
PENDING
CONFIRMED
REJECTED
CANCELLED
COMPLETED

Cycle :

             ┌──────────────┐
             │    PENDING   │
             └──────┬───────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     CONFIRMED             REJECTED
          │
          ▼
      COMPLETED


CONFIRMED
    │
    ▼
CANCELLED
14. Gestion des places

Exemple :

available_seats = 3

Un passager réserve :

seats = 1

Après confirmation :

available_seats = 2

La modification doit être réalisée dans une transaction PostgreSQL.

Objectif :

Empêcher deux utilisateurs
de réserver simultanément
la dernière place.
15. Table ratings

Après un trajet terminé, les utilisateurs peuvent s'évaluer.

ratings
────────────────────────────
id
trip_id
author_id
target_user_id
score
comment
created_at

Relations :

Trip
 │
 └── Rating
       │
       ├── author
       └── targetUser
16. Contraintes sur les évaluations

La note doit être comprise entre :

1 et 5

Un utilisateur ne peut évaluer qu'un utilisateur avec lequel il a effectivement effectué le trajet.

Une même personne ne doit pas pouvoir créer plusieurs évaluations identiques pour le même trajet.

17. Table notifications
notifications
────────────────────────────
id
user_id
type
title
message
data
read_at
created_at

Le champ data est de type JSON.

Exemple :

{
  "tripId": "123",
  "bookingId": "456"
}
18. Types de notifications
BOOKING_REQUEST
BOOKING_ACCEPTED
BOOKING_REJECTED
BOOKING_CANCELLED
TRIP_REMINDER
TRIP_CANCELLED
RATING_RECEIVED
19. Table user_devices

Cette table permet de gérer les appareils utilisés par un utilisateur.

user_devices
────────────────────────────
id
user_id
push_token
platform
is_active
created_at
updated_at

Plateformes :

ANDROID
IOS

Un utilisateur peut avoir plusieurs appareils.

20. Table reports

Cette table gère les signalements.

reports
────────────────────────────
id
reporter_id
reported_user_id
trip_id
reason
description
status
created_at
resolved_at

Statuts :

OPEN
UNDER_REVIEW
RESOLVED
REJECTED
21. Nouveau domaine : Live Tracking

Le projet possède maintenant une fonctionnalité supplémentaire :

permettre à un passager ayant une réservation confirmée de suivre temporairement le véhicule en déplacement vers son checkpoint.

Exemple :

Conducteur
Agoè → Centre-ville


        ↓


Passager
Checkpoint GTA


        ↓


Conducteur démarre


        ↓


GPS activé


        ↓


Passager voit le véhicule
se rapprocher du checkpoint
22. Table trip_tracking_sessions

Une session de tracking représente une période pendant laquelle le véhicule est suivi en temps réel.

trip_tracking_sessions
────────────────────────────
id
trip_id
driver_id


status


last_latitude
last_longitude
last_speed
last_heading


last_location_at


started_at
ended_at


created_at
updated_at
23. Statuts du tracking
NOT_STARTED
ACTIVE
PAUSED
COMPLETED

Cycle :

NOT_STARTED
      │
      ▼
   ACTIVE
      │
      ├──────→ PAUSED
      │           │
      │           ▼
      │         ACTIVE
      │
      ▼
  COMPLETED
24. Pourquoi une session de tracking ?

Il ne faut pas associer directement le GPS permanent à l'utilisateur.

Le tracking appartient à un trajet précis.

User
 │
 └── Trip
       │
       └── TrackingSession

Cela signifie :

Koffi possède une voiture

n'implique pas :

Koffi est constamment localisé.

La localisation n'existe que lorsque le trajet est actif.

25. Table trip_locations

Pour conserver éventuellement l'historique du déplacement :

trip_locations
────────────────────────────
id
tracking_session_id


latitude
longitude


speed
heading
accuracy


recorded_at

Relation :

TripTrackingSession
        │
        └──── N TripLocation
26. Position actuelle vs historique

Il faut distinguer deux besoins.

Position actuelle

Utilisée pour :

Afficher le véhicule sur la carte
Calculer l'ETA

Elle sera conservée directement dans :

TripTrackingSession

avec :

lastLatitude
lastLongitude
lastLocationAt
Historique

Utilisé éventuellement pour :

analyse ;
debugging ;
statistiques ;
amélioration du matching ;
reconstitution d'un trajet.

Il sera conservé dans :

TripLocation
27. Fréquence des positions GPS

Le téléphone du conducteur ne doit pas envoyer une position à chaque mouvement GPS.

Pour le MVP :

1 position toutes les 5 à 10 secondes

Cette valeur pourra être ajustée.

Exemple :

09:41:00
09:41:10
09:41:20
09:41:30
...

L'objectif est de trouver un compromis entre :

Précision
+
Batterie
+
Consommation Internet
+
Charge serveur
28. Architecture du tracking
                    CONDUCTEUR
                         │
                         ▼
                  Expo Location
                         │
                         │ GPS
                         ▼
                   Elysia / Bun
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
     Tracking Session        Trip Locations
              │
              ▼
       Supabase Realtime
              │
              ▼
           PASSAGER
              │
              ▼
             CARTE
29. Activation du tracking

Le tracking ne doit pas être actif dès la création du trajet.

Cycle :

TRIP CREATED
     │
     ▼
PUBLISHED
     │
     ▼
BOOKING CONFIRMED
     │
     ▼
DRIVER STARTS TRIP
     │
     ▼
TRACKING ACTIVE
30. Fin du tracking

Le tracking doit être désactivé lorsque :

Le trajet est terminé

ou :

Le conducteur termine manuellement le trajet

ou éventuellement :

Le système détecte automatiquement
l'arrivée à destination.

Cycle :

ACTIVE
  │
  ▼
DESTINATION REACHED
  │
  ▼
COMPLETED
  │
  ▼
TRACKING OFF

31. Visibilité du tracking

Le tracking doit être contrôlé par les réservations.

Un utilisateur ne doit pouvoir suivre le véhicule que s'il possède une réservation valide.

Règle :

Booking = CONFIRMED
        +
Trip = ACTIVE
        +
Tracking = ACTIVE
        ↓
Tracking visible

Sinon :

Tracking non disponible
32. Qui peut voir la position ?

Pendant un trajet actif :

Conducteur
    ↓
Peut voir son propre trajet


Passagers confirmés
    ↓
Peuvent voir le véhicule


Utilisateur extérieur
    ↓
Ne peut pas voir le véhicule
33. Confidentialité

La position GPS exacte ne doit pas être conservée ou affichée plus longtemps que nécessaire.

Avant le trajet :

❌ Position exacte

Pendant le trajet :

✅ Position nécessaire au suivi

Après le trajet :

❌ Position en temps réel
34. Position approximative

Une évolution possible consiste à ne pas afficher la position GPS exacte au passager.

Par exemple :

Position réelle
       │
       ▼
Approximation
       │
       ▼
Position affichée

Cela peut réduire les risques de confidentialité.

Le niveau de précision pourra être défini plus tard.

35. ETA

Le système doit pouvoir afficher :

Votre conducteur arrive dans environ 7 min.

L'ETA pourra être calculé à partir de :

Position actuelle
+
Checkpoint
+
Itinéraire
+
Trafic si disponible
36. Exemple d'écran passager
┌───────────────────────────────┐
│       Votre conducteur        │
│          arrive               │
│                               │
│          [ CARTE ]            │
│                               │
│     🚗 ──────────── 📍        │
│    véhicule       checkpoint  │
│                               │
│        2,3 km                 │
│        ~ 7 min                │
│                               │
│  Toyota Corolla               │
│  Koffi Mensah                 │
│  ★ 4.8                        │
│                               │
│  Point de rendez-vous         │
│  Carrefour GTA                │
└───────────────────────────────┘
37. Notifications liées au tracking

Le système pourra envoyer automatiquement :

Votre conducteur a commencé son trajet.

Puis :

Votre conducteur arrive dans environ 5 minutes.

Puis :

Votre conducteur est proche du point de rendez-vous.

Puis :

Votre conducteur est arrivé.
38. Détection de proximité

On pourra utiliser une logique géographique :

Distance véhicule → checkpoint

Exemple :

> 2 km
"Votre conducteur est en route"


< 1 km
"Votre conducteur approche"


< 300 m
"Votre conducteur est tout proche"


< 100 m
"Votre conducteur est arrivé"

Les seuils seront configurables.

39. Architecture complète mise à jour
                         ┌───────────────┐
                         │     EXPO      │
                         │ React Native  │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │ ELYSIA / BUN  │
                         │   API métier  │
                         └───────┬───────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
           PostgreSQL         PostGIS         Realtime
                │                                 │
                │                                 │
                ▼                                 ▼
             Prisma                         Passager
                │
                ├── Users
                ├── Vehicles
                ├── Trips
                ├── Bookings
                ├── Ratings
                ├── Notifications
                ├── Reports
                ├── Waypoints
                └── Tracking
40. Enums Prisma
enum UserStatus {
  ACTIVE
  SUSPENDED
  BANNED
  DELETED
}


enum TripStatus {
  DRAFT
  PUBLISHED
  FULL
  IN_PROGRESS
  COMPLETED
  CANCELLED
}


enum BookingStatus {
  PENDING
  CONFIRMED
  REJECTED
  CANCELLED
  COMPLETED
}


enum ReportStatus {
  OPEN
  UNDER_REVIEW
  RESOLVED
  REJECTED
}


enum DevicePlatform {
  ANDROID
  IOS
}


enum NotificationType {
  BOOKING_REQUEST
  BOOKING_ACCEPTED
  BOOKING_REJECTED
  BOOKING_CANCELLED
  TRIP_REMINDER
  TRIP_CANCELLED
  RATING_RECEIVED
}


enum TrackingStatus {
  NOT_STARTED
  ACTIVE
  PAUSED
  COMPLETED
}
41. Schéma Prisma complet
generator client {
  resolvedAt DateTime?


  @@index([reporterId])
  @@index([reportedUserId])
  @@index([tripId])
  @@index([status])
}


model TripWaypoint {
  id String @id @default(uuid())


  tripId String
  trip   Trip @relation(fields: [tripId], references: [id], onDelete: Cascade)


  name String


  latitude  Decimal @db.Decimal(10, 7)
  longitude Decimal @db.Decimal(10, 7)


  position Int


  createdAt DateTime @default(now())


  @@index([tripId])
  @@unique([tripId, position])
}


model TripTrackingSession {
  id String @id @default(uuid())


  tripId String @unique
  trip   Trip   @relation(fields: [tripId], references: [id], onDelete: Cascade)


  driverId String
  driver   User   @relation(fields: [driverId], references: [id])


  status TrackingStatus @default(NOT_STARTED)


  lastLatitude  Decimal? @db.Decimal(10, 7)
  lastLongitude Decimal? @db.Decimal(10, 7)


  lastSpeed Decimal? @db.Decimal(8, 2)


  lastHeading Decimal? @db.Decimal(6, 2)


  lastAccuracy Decimal? @db.Decimal(8, 2)


  lastLocationAt DateTime?


  startedAt DateTime?
  endedAt   DateTime?


  locations TripLocation[]


  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt


  @@index([driverId])
  @@index([status])
  @@index([lastLocationAt])
}


model TripLocation {
  id String @id @default(uuid())


  trackingSessionId String
  trackingSession   TripTrackingSession @relation(
    fields: [trackingSessionId],
    references: [id],
    onDelete: Cascade
  )


  latitude  Decimal @db.Decimal(10, 7)
  longitude Decimal @db.Decimal(10, 7)


  speed    Decimal? @db.Decimal(8, 2)
  heading  Decimal? @db.Decimal(6, 2)
  accuracy Decimal? @db.Decimal(8, 2)


  recordedAt DateTime @default(now())


  @@index([trackingSessionId])
  @@index([recordedAt])
}
42. PostGIS

Les coordonnées présentes dans Prisma permettent le stockage classique :

latitude
longitude

Mais pour les recherches géospatiales avancées, nous ajouterons des colonnes PostGIS.

Conceptuellement :

departure_location
destination_location
meeting_point_location

avec :

GEOGRAPHY(POINT, 4326)
43. Pourquoi ne pas tout gérer avec latitude/longitude ?

On pourrait calculer les distances directement dans le code.

Mais ce serait moins performant à grande échelle.

Exemple :

10 trajets
→ pas de problème


10 000 trajets
→ recherche géographique plus importante


100 000 trajets
→ PostGIS devient essentiel

PostGIS permet notamment :

ST_Distance()
ST_DWithin()
ST_Intersects()
ST_Contains()
44. Index PostGIS

Les colonnes géographiques devront utiliser des index GiST.

Exemple :

CREATE INDEX trips_departure_location_idx
ON trips
USING GIST (departure_location);


CREATE INDEX trips_destination_location_idx
ON trips
USING GIST (destination_location);
45. Recherche de trajets proches

Exemple conceptuel :

SELECT *
FROM trips
WHERE ST_DWithin(
    departure_location,
    ST_SetSRID(
        ST_MakePoint($1, $2),
        4326
    )::geography,
    2000
);

Ici :

2000 mètres = 2 km
46. Recherche autour d'un checkpoint

Pour notre fonctionnalité de covoiturage :

Passager
   │
   ▼
Checkpoint
   │
   ▼
Recherche des véhicules
dans un rayon donné

Exemple :

Checkpoint :
Carrefour GTA


Rayon :
1 km

Le système peut rechercher les trajets dont le checkpoint ou l'itinéraire passe à proximité.

47. Matching géospatial

Le matching prendra en compte :

Départ
   +
Destination
   +
Checkpoint
   +
Heure
   +
Direction
   +
Détour

Puis :

Compatibility Score
48. Tracking et réservation

Le tracking n'est disponible que lorsqu'une réservation est confirmée.

Booking
   │
   └── CONFIRMED
          │
          ▼
Trip
   │
   └── IN_PROGRESS
          │
          ▼
TrackingSession
   │
   └── ACTIVE
49. Flux complet du tracking
1. Passager recherche un trajet
                ↓
2. Passager réserve
                ↓
3. Conducteur accepte
                ↓
4. Booking = CONFIRMED
                ↓
5. Jour du trajet
                ↓
6. Conducteur clique "Démarrer"
                ↓
7. TrackingSession = ACTIVE
                ↓
8. GPS du conducteur activé
                ↓
9. Positions envoyées
                ↓
10. Supabase Realtime
                ↓
11. Passager reçoit les positions
                ↓
12. Carte mise à jour
                ↓
13. ETA recalculé
                ↓
14. Conducteur arrive au checkpoint
                ↓
15. Passager embarque
                ↓
16. Trajet continue
                ↓
17. Destination atteinte
                ↓
18. TrackingSession = COMPLETED
50. Flux temps réel
                  CONDUCTEUR
                       │
                       ▼
                Expo Location
                       │
                       ▼
                  Elysia API
                       │
                       ▼
             TripTrackingSession
                       │
                       ▼
              Supabase Realtime
                       │
                       ▼
                  PASSAGER
                       │
                       ▼
                     Carte
51. Données envoyées pendant le tracking

Une mise à jour peut contenir :

{
  "latitude": 6.18,
  "longitude": 1.22,
  "speed": 32.5,
  "heading": 90,
  "accuracy": 8,
  "timestamp": "2026-08-23T09:41:00Z"
}
52. ETA

Le système peut calculer :

distance restante
+
temps estimé

Exemple :

Distance :
2.4 km


ETA :
7 minutes

L'ETA pourra être recalculé régulièrement.

53. Notifications automatiques

Le système peut déclencher :

Conducteur démarre
        ↓
"Votre conducteur est en route"

Puis :

Distance < 1 km
        ↓
"Votre conducteur approche"

Puis :

Distance < 300 m
        ↓
"Votre conducteur est tout proche"

Puis :

Distance < 100 m
        ↓
"Votre conducteur est arrivé"
54. Batterie et consommation réseau

Le tracking doit être conçu pour limiter :

consommation batterie ;
consommation data ;
fréquence des requêtes ;
charge serveur.

Pour le MVP :

5 à 10 secondes

entre les mises à jour constitue un bon point de départ.

Cette fréquence pourra être adaptée dynamiquement.

55. Tracking adaptatif

Une évolution possible :

Véhicule loin du checkpoint
        ↓
10 secondes


Véhicule proche
        ↓
5 secondes


Véhicule très proche
        ↓
2-3 secondes

Cela permet d'améliorer la précision au moment critique de la récupération du passager.

56. Sécurité du tracking

Le serveur doit vérifier :

Qui envoie la position ?
        ↓
Est-ce bien le conducteur du trajet ?
        ↓
Le trajet est-il actif ?
        ↓
Le tracking est-il actif ?
        ↓
Accepter la position

Un utilisateur ne doit jamais pouvoir envoyer une position pour le trajet d'un autre conducteur.

57. Accès au tracking côté passager

Le serveur doit vérifier :

Utilisateur connecté
        +
Booking CONFIRMED
        +
Trip IN_PROGRESS
        +
Tracking ACTIVE

Seulement dans ce cas :

→ position accessible
58. Confidentialité après le trajet

Lorsque :

TrackingSession = COMPLETED

la position temps réel doit immédiatement devenir inaccessible aux passagers.

Le système ne doit pas permettre :

Passager
  ↓
Ancien trajet
  ↓
Position actuelle du conducteur
59. Conservation de l'historique GPS

L'historique GPS doit être considéré comme une donnée sensible.

Pour le MVP, il est préférable de :

limiter sa conservation ;
limiter son accès ;
ne pas l'exposer dans l'application ;
ne pas l'utiliser comme historique public.

L'historique pourra ensuite être supprimé automatiquement selon une politique de rétention définie.

60. Contraintes métier

La base doit respecter notamment :

Utilisateur
phone UNIQUE
Véhicule
licensePlate UNIQUE
Réservation
tripId + passengerId UNIQUE
Waypoint
tripId + position UNIQUE
Tracking
tripId UNIQUE

Un trajet ne possède qu'une seule session de tracking active/historique.

61. Contraintes numériques
Véhicule
seats > 0
Réservation
seats > 0
Note
1 <= score <= 5
Places disponibles
availableSeats >= 0
Coordonnées
latitude  ∈ [-90, 90]
longitude ∈ [-180, 180]
62. Gestion des transactions

Certaines opérations doivent obligatoirement utiliser une transaction PostgreSQL.

Exemples :

Création réservation
+
Décrémentation des places

ou :

Acceptation réservation
+
Mise à jour des places
+
Création notification

L'objectif est d'éviter les incohérences.

63. Exemple de problème sans transaction

Supposons :

1 place disponible

Deux passagers réservent simultanément :

Passager A → réservation
Passager B → réservation

Sans transaction :

A → confirmé
B → confirmé

Résultat :

2 passagers
1 seule place

C'est interdit.

64. Architecture de sécurité des données
                 UTILISATEUR
                      │
                      ▼
                 Supabase Auth
                      │
                      ▼
                  Elysia API
                      │
              Auth + Authorization
                      │
                      ▼
                  PostgreSQL
                      │
                 RLS si nécessaire
65. RLS

Supabase permet d'utiliser :

Row Level Security

Pour limiter directement l'accès aux données.

Exemple :

User A
   ↓
ses propres données


User B
   ↓
ses propres données

Mais les règles métier complexes resteront dans Elysia.

66. Séparation des responsabilités
Expo
│
└── Interface
    GPS
    Carte
    UX


Elysia/Bun
│
└── Logique métier
    Matching
    Booking
    Tracking
    Permissions


Prisma
│
└── CRUD
    Users
    Trips
    Bookings
    etc.


PostgreSQL
│
└── Données


PostGIS
│
└── Géospatial


Supabase Realtime
│
└── Temps réel


Supabase Storage
│
└── Fichiers


Supabase Auth
│
└── Authentification
67. Architecture finale
                           ┌──────────────────┐
                           │       EXPO       │
                           │  React Native    │
                           └────────┬─────────┘
                                    │
                          ┌─────────┴─────────┐
                          │                   │
                          ▼                   ▼
                    Application          GPS Location
                          │                   │
                          └─────────┬─────────┘
                                    ▼
                            ┌───────────────┐
                            │ ELYSIA / BUN  │
                            │   API métier  │
                            └───────┬───────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
          Prisma                 PostGIS               Realtime
             │                      │                      │
             └──────────┬───────────┘                      │
                        ▼                                  │
                 PostgreSQL                                │
                        │                                  │
                        └──────────────────────────────────┘
                                           │
                                           ▼
                                      PASSAGER
68. Architecture MVP

Pour le MVP, nous ne devons pas construire trop de choses.

Expo
 ↓
Elysia/Bun
 ↓
Supabase
 │
 ├── Auth
 ├── PostgreSQL
 ├── PostGIS
 ├── Storage
 └── Realtime

Le tracking sera limité à :

1 trajet
1 conducteur
0 → N passagers confirmés
1 session de tracking
position actuelle
ETA
69. Fonctionnalités hors MVP

Les fonctionnalités suivantes pourront venir plus tard :

tracking permanent ;
historique GPS avancé ;
analyse des itinéraires ;
prédiction des temps de trajet ;
trafic en temps réel ;
matching ML ;
optimisation des itinéraires ;
détection automatique des arrêts ;
détection automatique du début du trajet ;
détection automatique de l'arrivée ;
heatmaps des déplacements ;
statistiques de mobilité urbaine.
70. Résumé des tables
Table	Rôle
users	Profils utilisateurs
vehicles	Véhicules
trips	Trajets
bookings	Réservations
ratings	Évaluations
notifications	Notifications
user_devices	Appareils et push tokens
reports	Signalements
trip_waypoints	Points intermédiaires
trip_tracking_sessions	Sessions de suivi GPS
trip_locations	Historique GPS
71. Résumé des relations
User
 │
 ├──< Vehicle
 │
 ├──< Trip
 │       │
 │       ├──< Booking
 │       ├──< TripWaypoint
 │       ├──< Rating
 │       └──── TripTrackingSession
 │                    │
 │                    └──< TripLocation
 │
 ├──< Rating
 │
 ├──< Notification
 │
 ├──< UserDevice
 │
 └──< Report
72. Critères de validation de l'étape D

L'étape D sera considérée comme validée lorsque le système pourra représenter :

 un utilisateur ;
 un véhicule ;
 un trajet ;
 un point de départ ;
 une destination ;
 un checkpoint ;
 des points intermédiaires ;
 une réservation ;
 plusieurs passagers ;
 une évaluation ;
 une notification ;
 un appareil mobile ;
 un signalement ;
 une session de tracking ;
 une position GPS ;
 l'ETA ;
 les règles d'accès au tracking ;
 les contraintes de réservation ;
 les données géographiques ;
 PostGIS ;
 les transactions ;
 les règles de confidentialité.
73. Flux métier complet

Le modèle de données permet maintenant de représenter le scénario principal :

                    USER
                     │
                     ▼
                 VEHICLE
                     │
                     ▼
                   TRIP
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
       BOOKING              WAYPOINT
          │
          ▼
      CONFIRMED
          │
          ▼
   DRIVER STARTS TRIP
          │
          ▼
   TRACKING SESSION
          │
          ▼
     GPS LOCATIONS
          │
          ▼
      SUPABASE
      REALTIME
          │
          ▼
       PASSENGER
          │
          ▼
       CHECKPOINT
          │
          ▼
        PICKUP
          │
          ▼
      DESTINATION
          │
          ▼
       COMPLETED
          │
          ▼
        RATING
74. Décision finale de l'étape D

Le modèle de données officiel du projet est désormais basé sur :

                    SUPABASE
                       │
                       ▼
                 PostgreSQL
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
        Prisma       PostGIS     Realtime
          │            │            │
          │            │            │
          ▼            ▼            ▼
       CRUD        Géospatial    Tracking

Le système de tracking est conçu comme une fonctionnalité temporaire liée à un trajet actif, et non comme une localisation permanente des utilisateurs.

Le passager ayant une réservation confirmée pourra ainsi :

voir le véhicule approcher
        +
voir une position actualisée
        +
connaître une estimation d'arrivée
        +
recevoir une notification lorsqu'il approche
        +
savoir lorsque le véhicule est arrivé au checkpoint

tout en limitant l'exposition de la localisation du conducteur.

75. Prochaine étape — Étape E

La prochaine étape est maintenant l'initialisation réelle du projet.

Nous passerons de :

Architecture
      ↓
Modèle de données

à :

CODE

L'étape E comprendra :

Étape E
│
├── Création du monorepo
│
├── Initialisation Expo
│
├── Initialisation Elysia + Bun
│
├── Configuration Supabase
│
├── Configuration PostgreSQL
│
├── Configuration Prisma
│
├── Activation PostGIS
│
├── Variables d'environnement
│
├── Première migration
│
├── Génération Prisma Client
│
├── Connexion API ↔ PostgreSQL
│
├── Premier endpoint
│
└── Premier test de bout en bout
Premier objectif technique

Obtenir cette chaîne fonctionnelle :

Expo
  ↓
Elysia / Bun
  ↓
Prisma
  ↓
Supabase PostgreSQL
  ↓
User

Puis nous ajouterons progressivement :

Trip
 ↓
Booking
 ↓
Matching
 ↓
Tracking GPS
 ↓
Realtime
 ↓
ETA

L'étape D est donc maintenant suffisamment complète pour servir de spécification de base de données pour le développement du MVP.