# Document UX/UI — Étape B

## Application de covoiturage pensée pour le Togo

**Version :** 1.0
**Statut :** Conception UX/UI — Étape B
**Étape précédente :** Cadrage produit — Étape A
**Plateforme cible :** Mobile — Expo / React Native

---

# 1. Objectif de l'étape B

L'objectif de cette étape est de transformer le cadrage produit en une **expérience utilisateur concrète**.

Cette étape définit :

* les parcours utilisateurs ;
* la navigation ;
* les écrans principaux ;
* les actions disponibles ;
* les informations affichées ;
* les états d'erreur et états vides ;
* les principes UX adaptés au contexte togolais.

Le développement technique ne commence qu'après validation de cette conception.

---

# 2. Principes UX

L'application doit respecter les principes suivants :

### Simplicité

L'utilisateur doit pouvoir trouver ou proposer un trajet rapidement.

### Clarté

Les informations importantes doivent être immédiatement compréhensibles :

* départ ;
* destination ;
* heure ;
* conducteur ;
* véhicule ;
* places ;
* contribution ;
* compatibilité.

### Confiance

L'utilisateur doit savoir avec qui il partage son trajet.

### Localisation adaptée au Togo

Les points de repère locaux doivent être privilégiés lorsque cela facilite le rendez-vous.

### Action rapide

Les deux actions principales doivent être immédiatement accessibles :

* **Trouver un trajet**
* **Partager mon trajet**

---

# 3. Parcours principaux

L'application repose sur deux parcours principaux.

```text
                     APPLICATION
                          │
             ┌────────────┴────────────┐
             │                         │
         CONDUIRE                   PASSAGER
             │                         │
       Publier trajet             Rechercher
             │                         │
             └────────────┬────────────┘
                          │
                       Matching
                          │
                       Résultats
                          │
                    Détail du trajet
                          │
                      Réservation
                          │
                       Confirmation
                          │
                         Trajet
                          │
                       Évaluation
```

---

# 4. Utilisateur unique

L'application ne crée pas deux comptes séparés.

Un même utilisateur peut être :

* conducteur ;
* passager ;
* ou les deux.

Exemple :

```text
Matin :
Conducteur
Agoè → Centre-ville

Soir :
Passager
Centre-ville → Agoè
```

Le changement de rôle doit être possible sans recréer de compte.

---

# 5. Navigation principale

La navigation principale utilise une barre inférieure à quatre onglets :

```text
┌──────────────────────────────────────┐
│                                      │
│              CONTENU                 │
│                                      │
├──────────────────────────────────────┤
│ Accueil │ Trajets │ Activité │ Profil│
└──────────────────────────────────────┘
```

## 5.1 Accueil

Point d'entrée principal.

Permet notamment de :

* rechercher un trajet ;
* publier un trajet ;
* consulter le prochain trajet ;
* accéder rapidement aux actions principales.

## 5.2 Trajets

Permet :

* rechercher ;
* consulter les trajets disponibles ;
* publier un trajet ;
* gérer les trajets récurrents.

## 5.3 Activité

Regroupe :

* trajets à venir ;
* demandes ;
* réservations ;
* historique.

## 5.4 Profil

Regroupe :

* informations personnelles ;
* véhicule ;
* réputation ;
* vérifications ;
* sécurité ;
* paramètres.

---

# 6. Splash screen

## Objectif

Afficher brièvement l'identité de l'application lors du lancement.

```text
          [LOGO]

       Nom de l'application

    « Partageons nos trajets. »
```

Après le chargement, l'utilisateur est redirigé vers :

* onboarding si nouveau compte ;
* connexion si non authentifié ;
* accueil si déjà connecté.

---

# 7. Onboarding

L'onboarding est limité à trois écrans.

## 7.1 Écran 1 — Réduire le nombre de voitures

Message :

> **Moins de voitures sur nos routes**

L'écran présente le principe de mutualisation des trajets.

---

## 7.2 Écran 2 — Économiser

Message :

> **Économisez sur vos trajets**

Le conducteur partage les frais.

Le passager bénéficie d'un trajet partagé.

---

## 7.3 Écran 3 — Trouver des personnes allant dans la même direction

Message :

> **Vous allez dans la même direction ?**

L'application trouve des utilisateurs ayant des trajets compatibles.

Bouton :

**Commencer**

---

# 8. Authentification

## 8.1 Connexion

```text
Bienvenue

Numéro de téléphone

[ +228 XX XX XX XX ]

[ Continuer ]
```

La vérification par numéro de téléphone constitue le mécanisme d'authentification principal du MVP.

---

# 9. Création du profil

Après vérification du téléphone :

```text
Créer votre profil

Photo
[ Ajouter ]

Prénom
[ ]

Nom
[ ]

[ Continuer ]
```

L'inscription doit rester courte.

Les informations complémentaires peuvent être demandées progressivement.

---

# 10. Choix du mode d'utilisation

Après inscription :

```text
Comment souhaitez-vous utiliser l'application ?

┌──────────────────────┐
│ 🚗 CONDUIRE          │
│                      │
│ Partager mes trajets │
└──────────────────────┘

┌──────────────────────┐
│ PASSAGER             │
│                      │
│ Rechercher un trajet │
└──────────────────────┘
```

Ce choix est uniquement une préférence initiale.

Il ne limite pas les fonctionnalités du compte.

---

# 11. Écran d'accueil

L'accueil doit être orienté vers l'action.

```text
Bonjour Koffi

Où allez-vous aujourd'hui ?

┌─────────────────────────────┐
│ Départ                      │
│ Agoè                        │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Destination                 │
│ Centre-ville                │
└─────────────────────────────┘

[ Trouver un trajet ]

──────────────────────────────

Vous conduisez aujourd'hui ?

[ Partager mon trajet ]

──────────────────────────────

Votre prochain trajet

Agoè → Centre-ville
07:00
```

Les deux actions principales doivent être immédiatement visibles :

* **Trouver un trajet**
* **Partager mon trajet**

---

# 12. Recherche d'un trajet

## 12.1 Formulaire

```text
Rechercher un trajet

Départ
[ Agoè ]

Destination
[ Tokoin ]

Date
[ Aujourd'hui ]

Heure souhaitée
[ 07:00 ]

Tolérance
[ ± 30 min ]

[ Rechercher ]
```

---

# 13. Résultats de recherche

Les résultats sont classés par compatibilité.

Exemple :

```text
3 trajets trouvés

┌─────────────────────────────┐
│ 95 % compatible             │
│                             │
│ Koffi M.          ★ 4.8     │
│                             │
│ Agoè → Centre-ville         │
│ 07:00                       │
│                             │
│ Toyota Corolla              │
│ 2 places disponibles        │
│ 500 FCFA                    │
│                             │
│ [ Voir le trajet ]          │
└─────────────────────────────┘
```

Le score de compatibilité doit être clairement visible.

---

# 14. Détail d'un trajet

Avant de réserver, le passager doit pouvoir consulter les informations essentielles.

```text
Agoè → Centre-ville

07:00
24 août

────────────────────────

Conducteur

[PHOTO]

Koffi Mensah
★★★★★ 4.8

37 trajets
96 % de trajets réalisés

────────────────────────

Véhicule

Toyota Corolla
Grise
XX-1234-XX

────────────────────────

2 places disponibles

Contribution
500 FCFA

[ Demander une place ]
```

Le passager doit pouvoir répondre à quatre questions :

1. Avec qui vais-je voyager ?
2. Dans quel véhicule ?
3. Où et quand ?
4. Combien cela coûte ?

---

# 15. Demande de réservation

Après sélection de :

**Demander une place**

l'application affiche une confirmation.

```text
Confirmer votre demande

Trajet
Agoè → Centre-ville

Date
24 août — 07:00

Conducteur
Koffi Mensah

Contribution
500 FCFA

[ Confirmer ]

[ Annuler ]
```

---

# 16. Réservation en attente

Après confirmation :

```text
Demande envoyée

Votre demande a été envoyée au conducteur.

Vous recevrez une notification
lorsqu'il aura répondu.

[ Retour à l'accueil ]
```

Statut :

**EN ATTENTE**

---

# 17. Réservation confirmée

```text
✓ Trajet confirmé

Agoè → Centre-ville

24 août
07:00

Conducteur
Koffi Mensah
★★★★★

Point de rendez-vous
Agoè-Assiyéyé

[ Voir les détails ]

[ Partager mon trajet ]
```

---

# 18. Publication d'un trajet

Le conducteur accède à la publication depuis :

* l'accueil ;
* l'onglet Trajets.

Le formulaire est divisé en plusieurs étapes.

---

## 18.1 Étape 1 — Itinéraire

```text
Votre trajet

Départ
[ Agoè ]

Destination
[ Centre-ville ]

[ Continuer ]
```

---

## 18.2 Étape 2 — Horaire

```text
Quand partez-vous ?

Date
[ 24 août ]

Heure
[ 07:00 ]

☐ Trajet récurrent

[ Continuer ]
```

---

## 18.3 Étape 3 — Véhicule et places

```text
Votre véhicule

Toyota Corolla

Places disponibles

[-] 3 [+]

[ Continuer ]
```

---

## 18.4 Étape 4 — Contribution

```text
Contribution souhaitée

[ 500 FCFA ]

Estimation recommandée :
400 – 600 FCFA

[ Publier le trajet ]
```

---

# 19. Création d'un trajet récurrent

Si l'utilisateur sélectionne :

**Trajet récurrent**

l'application affiche :

```text
Répéter le trajet

☑ Lundi
☑ Mardi
☑ Mercredi
☑ Jeudi
☑ Vendredi
☐ Samedi
☐ Dimanche

Heure
07:00

Date de début
24 août

[ Créer le trajet ]
```

Les trajets récurrents sont prioritaires pour les déplacements domicile-travail.

---

# 20. Gestion des trajets

L'utilisateur doit pouvoir consulter ses trajets publiés.

Exemple :

```text
Mes trajets

Actifs

Agoè → Centre-ville
07:00
Lun → Ven
3 places

[ Modifier ]

[ Désactiver ]
```

Il doit pouvoir :

* modifier ;
* désactiver ;
* consulter ;
* voir les réservations.

---

# 21. Écran Activité

L'activité est divisée en trois catégories :

```text
À venir | Demandes | Historique
```

---

## 21.1 À venir

```text
Demain — 07:00

Agoè → Centre-ville

Conducteur :
Koffi

✓ Confirmé
```

---

## 21.2 Demandes

Pour un conducteur :

```text
Nouvelle demande

Ama S.
Agoè → Tokoin

07:05

★ 4.7

[ Refuser ] [ Accepter ]
```

---

## 21.3 Historique

```text
18 août

Agoè → Centre-ville

✓ Terminé
```

---

# 22. Évaluation

À la fin du trajet :

```text
Comment s'est passé votre trajet ?

Koffi Mensah

★★★★★

Votre note

[ Ajouter un commentaire ]

[ Valider ]
```

Le conducteur et le passager peuvent s'évaluer mutuellement.

---

# 23. Profil utilisateur

```text
┌──────────────────────────────┐
│          [PHOTO]             │
│                              │
│       Koffi Mensah           │
│       ★ 4.8                  │
│                              │
│       37 trajets             │
└──────────────────────────────┘

Mon véhicule

Toyota Corolla
XX-1234-XX

Mes trajets récurrents

Vérification

Historique

Sécurité

Paramètres
```

---

# 24. Profil conducteur

Le profil conducteur doit présenter :

* photo ;
* prénom/nom ;
* note ;
* nombre de trajets ;
* taux de réalisation ;
* véhicule ;
* statut de vérification.

Exemple :

```text
Koffi Mensah
★★★★★ 4.8

37 trajets
96 % de trajets réalisés

✓ Téléphone vérifié
✓ Identité vérifiée
✓ Véhicule vérifié
```

---

# 25. Gestion du véhicule

Le conducteur doit pouvoir enregistrer son véhicule.

Informations principales :

* marque ;
* modèle ;
* couleur ;
* plaque d'immatriculation ;
* nombre de places ;
* éventuellement photo du véhicule.

Exemple :

```text
Mon véhicule

Marque
Toyota

Modèle
Corolla

Couleur
Gris

Plaque
XX-1234-XX

Places
5

[ Enregistrer ]
```

---

# 26. Sécurité

L'écran sécurité contient :

```text
Sécurité

✓ Téléphone vérifié
✓ Identité vérifiée
✓ Véhicule vérifié

Contact de confiance
[ Ajouter ]

Partager mon trajet
[ Activé ]

Utilisateurs bloqués

Signaler un problème
```

---

# 27. Partage du trajet

L'utilisateur doit pouvoir partager son trajet avec un proche.

Exemple d'informations partagées :

```text
Trajet

Conducteur :
Koffi Mensah

Départ :
Agoè-Assiyéyé

Destination :
Centre-ville

Heure :
07:00

Statut :
En cours
```

Cette fonctionnalité est importante pour renforcer la confiance.

---

# 28. Géolocalisation adaptée au Togo

L'application ne doit pas dépendre uniquement d'adresses précises.

Les utilisateurs doivent pouvoir utiliser :

* quartiers ;
* carrefours ;
* points de repère ;
* lieux connus ;
* points de rendez-vous.

Exemples :

```text
Agoè-Assiyéyé
GTA
Adidogomé
Totsi
Tokoin
Colombe de la Paix
```

La géolocalisation doit aider l'utilisateur sans compliquer son expérience.

---

# 29. Point de rendez-vous

Pour chaque trajet, le conducteur peut définir un point de rendez-vous.

Exemple :

```text
Départ :
Agoè

Point de rendez-vous :
Carrefour GTA

Destination :
Centre-ville
```

Le point de rendez-vous peut être différent de l'adresse exacte du domicile du conducteur.

Cette approche améliore également la confidentialité.

---

# 30. États vides

Chaque écran doit prévoir un état lorsqu'aucune donnée n'est disponible.

## Aucun trajet

```text
Aucun trajet trouvé

Nous n'avons trouvé aucun trajet
correspondant à votre recherche.

[ Modifier ma recherche ]
```

## Aucun trajet publié

```text
Vous n'avez encore aucun trajet.

[ Publier mon premier trajet ]
```

## Aucun historique

```text
Votre historique est vide.

Vos trajets terminés apparaîtront ici.
```

---

# 31. États d'erreur

Les erreurs doivent être explicites.

## Erreur réseau

```text
Impossible de charger les données.

Vérifiez votre connexion puis réessayez.

[ Réessayer ]
```

## Trajet complet

```text
Ce trajet n'a plus de places disponibles.

[ Rechercher un autre trajet ]
```

## Demande refusée

```text
Votre demande n'a pas été acceptée.

[ Rechercher un autre trajet ]
```

---

# 32. Notifications

Les notifications doivent informer l'utilisateur des événements importants.

### Passager

* demande envoyée ;
* demande acceptée ;
* demande refusée ;
* trajet bientôt disponible ;
* trajet annulé ;
* rappel avant le trajet.

### Conducteur

* nouvelle demande ;
* réservation annulée ;
* rappel du trajet ;
* nouveau passager ;
* évaluation reçue.

---

# 33. Navigation globale

Structure recommandée :

```text
Application
│
├── Accueil
│   ├── Rechercher
│   ├── Publier
│   └── Prochain trajet
│
├── Trajets
│   ├── Rechercher
│   ├── Résultats
│   ├── Mes trajets
│   └── Trajets récurrents
│
├── Activité
│   ├── À venir
│   ├── Demandes
│   └── Historique
│
└── Profil
    ├── Informations
    ├── Véhicule
    ├── Réputation
    ├── Vérification
    ├── Sécurité
    └── Paramètres
```

---

# 34. Hiérarchie des écrans

## Priorité 1 — Cœur du produit

1. Accueil
2. Recherche
3. Résultats / Matching
4. Détail du trajet
5. Réservation
6. Publication d'un trajet
7. Confirmation

## Priorité 2 — Fonctionnement

8. Activité
9. Mes trajets
10. Notifications
11. Profil
12. Véhicule
13. Évaluation

## Priorité 3 — Confiance et sécurité

14. Vérification
15. Sécurité
16. Contact de confiance
17. Signalement
18. Blocage

---

# 35. Parcours passager complet

```text
Connexion
   ↓
Accueil
   ↓
Trouver un trajet
   ↓
Départ
   ↓
Destination
   ↓
Date / heure
   ↓
Recherche
   ↓
Résultats
   ↓
Score de compatibilité
   ↓
Détail du trajet
   ↓
Profil conducteur
   ↓
Demande de réservation
   ↓
Attente
   ↓
Confirmation
   ↓
Point de rendez-vous
   ↓
Trajet
   ↓
Évaluation
```

---

# 36. Parcours conducteur complet

```text
Connexion
   ↓
Accueil
   ↓
Partager mon trajet
   ↓
Départ
   ↓
Destination
   ↓
Date / heure
   ↓
Trajet récurrent ?
   ↓
Véhicule
   ↓
Places disponibles
   ↓
Contribution
   ↓
Publication
   ↓
Réception des demandes
   ↓
Acceptation / Refus
   ↓
Trajet
   ↓
Évaluation
```

---

# 37. Parcours trajet récurrent

```text
Créer trajet
      ↓
Départ
      ↓
Destination
      ↓
Heure
      ↓
Jours de la semaine
      ↓
Véhicule
      ↓
Places
      ↓
Contribution
      ↓
Publication
      ↓
Trajets générés
```

---

# 38. Principes de design

L'interface doit privilégier :

* une hiérarchie visuelle claire ;
* de gros boutons pour les actions principales ;
* des formulaires courts ;
* des informations essentielles visibles immédiatement ;
* une navigation simple ;
* une utilisation confortable sur les smartphones ;
* une interface adaptée aux connexions mobiles variables.

Les éléments critiques ne doivent pas dépendre exclusivement d'animations ou de contenus lourds.

---

# 39. Écran d'accueil — structure recommandée

L'accueil constitue l'écran le plus important.

```text
┌───────────────────────────────────┐
│ Bonjour Koffi                     │
│                                   │
│ Où allez-vous aujourd'hui ?      │
│                                   │
│ ┌───────────────────────────────┐ │
│ │ 📍 Départ                     │ │
│ │ Agoè                          │ │
│ └───────────────────────────────┘ │
│                                   │
│ ┌───────────────────────────────┐ │
│ │ 📍 Destination                │ │
│ │ Centre-ville                  │ │
│ └───────────────────────────────┘ │
│                                   │
│ [     Trouver un trajet      ]    │
│                                   │
│ ───────────────────────────────── │
│                                   │
│ Vous conduisez aujourd'hui ?     │
│                                   │
│ [    Partager mon trajet      ]   │
│                                   │
│ ───────────────────────────────── │
│                                   │
│ Prochain trajet                   │
│ Agoè → Centre-ville               │
│ 07:00                             │
│                                   │
├───────────────────────────────────┤
│ Accueil │ Trajets │ Activité │ Profil │
└───────────────────────────────────┘
```

---

# 40. Objectif UX principal

Toutes les décisions UX doivent servir une question :

> **Comment permettre à deux personnes qui effectuent des trajets compatibles de se trouver rapidement et de partager leur trajet en toute confiance ?**

Le produit ne doit donc pas être construit comme un simple catalogue de trajets.

Le **matching** doit être au centre de l'expérience.

---

# 41. Périmètre UX du MVP

## Inclus

* [ ] Onboarding
* [ ] Authentification
* [ ] Création de profil
* [ ] Accueil
* [ ] Recherche de trajet
* [ ] Résultats
* [ ] Matching
* [ ] Détail trajet
* [ ] Profil conducteur
* [ ] Publication trajet
* [ ] Trajets récurrents
* [ ] Réservation
* [ ] Notifications
* [ ] Activité
* [ ] Historique
* [ ] Évaluation
* [ ] Véhicule
* [ ] Sécurité
* [ ] Signalement

## Non prioritaire pour la première version

* [ ] Chat temps réel avancé
* [ ] Paiement Mobile Money intégré
* [ ] Matching par machine learning
* [ ] Prédiction de demande
* [ ] Optimisation avancée des itinéraires
* [ ] Dashboard institutionnel
* [ ] Fonctionnalités interurbaines avancées

---

# 42. Résumé de l'étape B

L'expérience utilisateur repose sur quatre actions fondamentales :

```text
                    UTILISATEUR
                         │
          ┌──────────────┴──────────────┐
          │                             │
     TROUVER UN TRAJET          PARTAGER UN TRAJET
          │                             │
          ▼                             ▼
      Recherche                      Publication
          │                             │
          └──────────────┬──────────────┘
                         ▼
                      MATCHING
                         │
                         ▼
                    RÉSERVATION
                         │
                         ▼
                       TRAJET
                         │
                         ▼
                     ÉVALUATION
```

L'interface doit rester simple, locale et orientée vers ces actions.

---

# 43. Prochaine étape

### Étape C — Architecture technique

Après validation de l'UX/UI, nous pourrons définir :

1. architecture générale ;
2. architecture Expo ;
3. architecture backend ;
4. API ;
5. authentification ;
6. base PostgreSQL ;
7. modèle de données ;
8. système de matching ;
9. géolocalisation ;
10. notifications ;
11. gestion des fichiers ;
12. sécurité ;
13. stratégie de déploiement.

La conception technique devra être directement dérivée des besoins définis dans les étapes A et B.
