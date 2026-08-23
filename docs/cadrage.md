# Document de cadrage produit

## Application de covoiturage pensée pour le Togo

**Version :** 1.0
**Statut :** Cadrage produit — Étape A
**Périmètre :** MVP
**Plateforme cible :** Mobile — Expo / React Native

---

## 1. Présentation du projet

### 1.1 Contexte

Dans les zones urbaines du Togo, notamment à Lomé, de nombreuses personnes utilisent quotidiennement leur véhicule personnel pour se rendre au travail, à l'université ou effectuer d'autres déplacements réguliers.

Il est fréquent que plusieurs personnes habitant dans une même zone et se dirigeant vers des destinations proches utilisent chacune leur propre véhicule.

Cette situation entraîne :

* une augmentation du nombre de véhicules en circulation ;
* une augmentation des embouteillages ;
* une consommation importante de carburant ;
* des dépenses individuelles élevées ;
* une sous-utilisation des places disponibles dans les véhicules ;
* une augmentation des émissions liées aux déplacements.

### 1.2 Problématique

> Comment permettre à des personnes effectuant des trajets similaires de partager une voiture existante afin de réduire le nombre de véhicules en circulation et les coûts individuels de déplacement ?

### 1.3 Solution proposée

L'application permettra aux utilisateurs de publier, rechercher et partager des trajets en voiture.

Un utilisateur qui effectue déjà un trajet pourra proposer les places disponibles dans son véhicule à d'autres personnes effectuant un trajet similaire.

L'objectif n'est pas de créer une plateforme de transport professionnel, mais de faciliter le **partage de trajets déjà prévus**.

---

# 2. Vision du produit

## 2.1 Vision

> **Faciliter le partage des trajets quotidiens au Togo afin de réduire le nombre de voitures en circulation, diminuer les dépenses de carburant et améliorer l'efficacité des déplacements urbains.**

## 2.2 Proposition de valeur

L'application crée une situation avantageuse pour les différents utilisateurs :

### Conducteur

* partage les places disponibles dans son véhicule ;
* réduit une partie du coût de son trajet ;
* utilise une voiture qu'il devait déjà utiliser.

### Passager

* trouve un trajet compatible ;
* bénéficie d'un déplacement potentiellement moins coûteux ;
* évite d'utiliser son propre véhicule ou un autre moyen de transport.

### Collectivité

* réduction potentielle du nombre de véhicules nécessaires ;
* réduction de la congestion ;
* réduction de la consommation de carburant ;
* meilleure utilisation des véhicules existants ;
* réduction potentielle des émissions.

---

# 3. Positionnement

L'application ne doit pas être positionnée comme un service de taxi ou de VTC.

### Modèle ciblé

> **« Vous allez dans la même direction ? Partagez votre trajet. »**

Le conducteur ne cherche pas à exercer une activité professionnelle de transport.

Il effectue un déplacement qu'il avait déjà prévu et propose les places disponibles.

### Différence avec un VTC

| VTC                                   | Application                               |
| ------------------------------------- | ----------------------------------------- |
| Le chauffeur vient chercher le client | Le conducteur avait déjà prévu son trajet |
| Trajet réalisé pour le client         | Trajet partagé                            |
| Logique de transport                  | Logique de mutualisation                  |
| Prix du transport                     | Contribution aux frais                    |
| Chauffeur professionnel               | Conducteur particulier                    |

Le positionnement et le modèle économique devront toutefois être validés juridiquement avant un déploiement commercial.

---

# 4. Cibles

## 4.1 Cible principale

Personnes effectuant régulièrement des trajets domicile-travail à Lomé.

Exemples :

* salariés ;
* fonctionnaires ;
* entrepreneurs ;
* employés du secteur privé ;
* professionnels travaillant dans les mêmes zones.

## 4.2 Cibles secondaires

* étudiants ;
* élèves majeurs ;
* personnes effectuant régulièrement des trajets interurbains ;
* groupes de personnes travaillant ou étudiant dans une même zone.

## 4.3 Zone de lancement

### Phase initiale

**Lomé et son agglomération.**

Le lancement doit se concentrer sur une zone géographique limitée afin de créer suffisamment de densité de conducteurs et de passagers.

### Extension potentielle

À terme :

* Tsévié ;
* Kpalimé ;
* Aného ;
* autres villes et axes interurbains.

---

# 5. Types d'utilisateurs

## 5.1 Utilisateur

Tout utilisateur possède un compte unique.

Un même utilisateur peut être :

* conducteur ;
* passager ;
* ou les deux.

Exemple :

Le matin :

> Conducteur : Agoè → Centre-ville

Le soir :

> Passager : Centre-ville → Agoè

Cette approche évite de créer deux types de comptes séparés.

## 5.2 Administrateur

L'administrateur dispose d'un espace de gestion permettant notamment de :

* gérer les utilisateurs ;
* gérer les conducteurs ;
* consulter les trajets ;
* gérer les signalements ;
* suspendre un compte ;
* consulter les réservations ;
* consulter les statistiques ;
* surveiller les comportements anormaux.

---

# 6. Fonctionnement général

Le fonctionnement principal repose sur le cycle suivant :

```text
Utilisateur
    ↓
Création du compte
    ↓
Configuration du profil
    ↓
Conducteur ─────────────── Passager
    ↓                            ↓
Publie un trajet          Recherche un trajet
    ↓                            ↓
        ←── Matching ───────────→
                 ↓
            Réservation
                 ↓
             Trajet
                 ↓
              Évaluation
```

---

# 7. Concept de trajet

Le **trajet** constitue l'objet central de l'application.

Un trajet appartient à un conducteur.

Il contient notamment :

* point de départ ;
* destination ;
* date ;
* heure de départ ;
* places disponibles ;
* contribution demandée ;
* véhicule utilisé ;
* statut ;
* caractère ponctuel ou récurrent.

### Exemple

```text
Conducteur : Koffi

Départ : Agoè-Assiyéyé
Destination : Centre-ville
Date : 24/08/2026
Heure : 07:00
Places disponibles : 3
Contribution : 500 FCFA
Type : Trajet récurrent
```

---

# 8. Trajets récurrents

Les trajets domicile-travail constituent une cible prioritaire.

L'application doit donc permettre de définir un trajet récurrent.

### Exemple

```text
Départ : Agoè
Destination : Centre-ville

Heure de départ : 07:00

Jours :
Lundi
Mardi
Mercredi
Jeudi
Vendredi

Places disponibles : 3

Contribution : 500 FCFA
```

Un trajet retour peut également être configuré :

```text
Centre-ville → Agoè
18:00
Lundi → Vendredi
```

Les trajets récurrents constituent une fonctionnalité importante du MVP.

---

# 9. Recherche de trajets

Le passager renseigne :

* point de départ ;
* destination ;
* date ;
* heure souhaitée ;
* éventuellement une tolérance horaire.

Exemple :

```text
Départ :
Agoè

Destination :
Tokoin

Date :
24/08/2026

Heure :
07:00
```

L'application recherche des trajets compatibles.

Une correspondance n'a pas besoin d'être géographiquement ou temporellement exacte.

---

# 10. Système de matching

Le matching constitue l'une des fonctionnalités centrales du produit.

L'objectif est d'identifier les trajets présentant une compatibilité suffisante entre conducteur et passager.

Les principaux critères sont :

1. proximité du point de départ ;
2. proximité de la destination ;
3. compatibilité horaire ;
4. détour nécessaire ;
5. places disponibles ;
6. fiabilité du conducteur.

## 10.1 Score initial

Pour le MVP, le système peut utiliser un score déterministe.

Exemple :

```text
Score =
    35 % proximité du départ
  + 30 % proximité de la destination
  + 20 % compatibilité horaire
  + 10 % détour nécessaire
  +  5 % fiabilité
```

### Exemple

```text
Proximité départ      : 34 / 35
Destination           : 28 / 30
Horaire               : 18 / 20
Détour                :  8 / 10
Fiabilité             :  5 /  5
                         --------
                         93 %
```

L'application peut alors afficher :

> **93 % compatible**

## 10.2 Évolution future

Une fois suffisamment de données collectées, le système pourra évoluer vers :

* recommandation intelligente ;
* optimisation du matching ;
* prédiction de demande ;
* prédiction des zones à forte demande ;
* optimisation des itinéraires.

---

# 11. Publication d'un trajet

Le conducteur doit pouvoir publier un trajet en quelques étapes.

### Informations minimales

* départ ;
* destination ;
* date ;
* heure ;
* nombre de places ;
* contribution ;
* véhicule ;
* trajet ponctuel ou récurrent.

### Exemple

```text
Départ :
Agoè-Assiyéyé

Destination :
Tokoin

Heure :
07:00

Places :
3

Contribution :
500 FCFA / passager
```

---

# 12. Réservation

Le passager peut demander une ou plusieurs places selon les règles du produit.

Flux :

```text
Passager
    ↓
Sélectionne un trajet
    ↓
Consulte le conducteur
    ↓
Demande une place
    ↓
Notification au conducteur
    ↓
Accepter / Refuser
    ↓
Réservation confirmée
```

Lorsqu'une réservation est confirmée :

```text
Places disponibles :
3 → 2
```

Le nombre de places doit être automatiquement mis à jour.

---

# 13. Contribution financière

L'objectif est le **partage des frais**, et non la création d'une activité professionnelle de transport.

La contribution peut notamment prendre en compte :

* coût estimé du carburant ;
* distance ;
* éventuellement péages ;
* nombre de passagers.

## MVP

La première version peut afficher une contribution sans intégrer directement le paiement.

Exemple :

```text
Contribution estimée :
500 FCFA
```

Le paiement peut être effectué directement entre utilisateurs selon les règles définies pour le MVP.

## Version future

Une intégration Mobile Money pourra être envisagée.

Cette fonctionnalité devra prendre en compte :

* transactions ;
* confirmation ;
* remboursements ;
* annulations ;
* litiges ;
* sécurité ;
* conformité réglementaire.

---

# 14. Limitation de la tarification

Pour conserver la logique de covoiturage, le conducteur ne doit pas pouvoir fixer librement des tarifs disproportionnés.

Le système pourra à terme calculer une contribution maximale à partir de :

```text
Distance
    ↓
Consommation estimée
    ↓
Prix du carburant
    ↓
Coût du trajet
    ↓
Partage des frais
```

Cette règle devra être affinée après validation juridique et économique du modèle.

---

# 15. Confiance et sécurité

La confiance constitue un élément essentiel du produit.

## Conducteur

Le profil peut contenir :

* nom ;
* photo ;
* numéro vérifié ;
* identité vérifiée ;
* véhicule ;
* marque ;
* modèle ;
* couleur ;
* plaque d'immatriculation ;
* note ;
* nombre de trajets réalisés.

## Utilisateurs

L'application doit proposer :

* notation ;
* signalement ;
* blocage ;
* historique des trajets ;
* système de réputation.

## Partage du trajet

L'utilisateur doit pouvoir partager les informations de son trajet avec un proche.

Exemple :

```text
Trajet partagé avec :
Contact de confiance

Conducteur :
Koffi

Destination :
Tokoin

Heure :
07:00
```

---

# 16. Annulations

Les deux parties peuvent annuler une réservation ou un trajet.

L'application doit conserver l'historique des annulations.

Exemple de métriques :

```text
Trajets réalisés : 37
Annulations : 2
Taux de réalisation : 94,9 %
```

Ces informations peuvent participer au calcul de la fiabilité.

---

# 17. Notation

Après un trajet, conducteur et passager peuvent s'évaluer.

### Exemple

```text
★★★★★
4,8 / 5

37 trajets réalisés
42 passagers transportés
96 % de trajets réalisés
```

Les notes doivent contribuer à construire un système de réputation.

---

# 18. Fonctionnalités du MVP

## Priorité haute

* [ ] Création de compte
* [ ] Connexion
* [ ] Vérification du numéro de téléphone
* [ ] Profil utilisateur
* [ ] Mode conducteur
* [ ] Mode passager
* [ ] Enregistrement du véhicule
* [ ] Publication d'un trajet
* [ ] Création de trajets récurrents
* [ ] Recherche de trajets
* [ ] Matching
* [ ] Affichage des trajets compatibles
* [ ] Demande de réservation
* [ ] Acceptation/refus d'une réservation
* [ ] Notifications
* [ ] Historique des trajets
* [ ] Notation
* [ ] Signalement
* [ ] Blocage d'utilisateur

## Hors MVP initial

* [ ] Paiement Mobile Money intégré
* [ ] Chat temps réel avancé
* [ ] Matching par machine learning
* [ ] Prédiction de demande
* [ ] Optimisation avancée des itinéraires
* [ ] Dashboard institutionnel
* [ ] Système avancé de calcul des émissions
* [ ] Expansion interurbaine automatisée

---

# 19. Indicateurs de succès

L'application ne doit pas seulement mesurer le nombre d'inscriptions.

Les KPI doivent mesurer son impact réel.

## KPI principaux

### Trajets partagés

Nombre de trajets effectivement mutualisés.

### Occupation moyenne

Nombre moyen de personnes dans une voiture lors d'un trajet partagé.

### Trajets individuels potentiellement évités

Estimation du nombre de déplacements réalisés avec moins de véhicules.

### Distance mutualisée

Nombre de kilomètres réalisés dans le cadre de trajets partagés.

### Carburant économisé

Estimation des litres de carburant économisés.

### Économie financière

Estimation des FCFA économisés par les utilisateurs.

### Impact environnemental

Estimation du CO₂ potentiellement évité.

---

# 20. Exemple d'impact

Supposons :

```text
1 000 trajets partagés

Occupation moyenne :
2,4 personnes / véhicule
```

Cela permettrait potentiellement de mutualiser un nombre important de déplacements individuels.

Les métriques exactes devront être calculées à partir des données réelles de l'application et d'hypothèses documentées.

---

# 21. Exemple d'expérience utilisateur

## Situation

Koffi travaille au centre-ville.

Il habite Agoè et utilise habituellement sa voiture seul.

Il configure :

```text
Agoè → Centre-ville
07:00
Lundi → Vendredi
3 places
```

L'application identifie plusieurs utilisateurs ayant des trajets similaires.

### Passager 1

```text
Agoè → Tokoin
07:05
95 % compatible
```

### Passager 2

```text
Adidogomé → Centre-ville
07:10
87 % compatible
```

Koffi accepte les deux demandes.

Résultat :

```text
1 voiture
+
3 personnes
```

au lieu de plusieurs véhicules effectuant des trajets similaires.

---

# 22. Architecture fonctionnelle du produit

```text
                    APPLICATION
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    UTILISATEUR        TRAJET          RÉSERVATION
        │                │                │
        │                │                │
     Profil          Publication       Demande
     Véhicule        Recherche         Acceptation
     Réputation      Matching          Confirmation
        │                │                │
        └────────────────┼────────────────┘
                         │
                    NOTIFICATIONS
                         │
                    ÉVALUATION
                         │
                    STATISTIQUES
```

---

# 23. Principes produit

Le développement doit respecter les principes suivants :

### 1. Simplicité

Un utilisateur doit pouvoir publier ou rechercher un trajet rapidement.

### 2. Confiance

L'identité et la réputation doivent être visibles et compréhensibles.

### 3. Localisation adaptée au Togo

Les points de rendez-vous et repères locaux doivent être privilégiés lorsque cela est pertinent.

### 4. Économie

La contribution doit rester cohérente avec une logique de partage des frais.

### 5. Impact

L'application doit mesurer sa contribution à la réduction des déplacements individuels.

### 6. Progressivité

Le produit doit commencer par un MVP simple avant d'introduire paiement, IA et fonctionnalités avancées.

---

# 24. Périmètre initial recommandé

```text
                     MVP
                      │
              ┌───────┴───────┐
              │               │
          Lomé            Domicile
                              │
                         ↕ Travail
                              │
                         Covoiturage
                              │
                    Trajets récurrents
                              │
                           Matching
                              │
                         Réservation
```

Le produit sera d'abord conçu pour résoudre **un problème précis** :

> **Permettre aux personnes qui effectuent régulièrement des trajets similaires à Lomé de partager les places disponibles dans leurs voitures.**

---

# 25. Résumé du modèle produit

### Problème

Des personnes ayant des trajets similaires utilisent chacune leur voiture.

### Solution

Permettre à ces personnes de partager un trajet existant.

### Utilisateurs

* conducteurs ;
* passagers ;
* administrateurs.

### Cible initiale

Personnes effectuant des trajets domicile-travail à Lomé.

### Fonction centrale

Matching conducteur/passager.

### Modèle financier initial

Partage des frais du trajet.

### Différenciation

* pensée pour les habitudes de mobilité locales ;
* trajets récurrents ;
* matching géographique et temporel ;
* système de confiance ;
* mesure de l'impact ;
* potentiel d'optimisation par Data Science.

### Objectif final

> **Réduire le nombre de voitures nécessaires pour réaliser les déplacements quotidiens, réduire les dépenses de carburant et améliorer l'utilisation des véhicules existants.**

---

## Statut de l'étape A

**Étape A — Cadrage produit : définie**

### Prochaine étape

**Étape B — UX/UI**

Elle consistera à définir :

1. le parcours complet conducteur ;
2. le parcours complet passager ;
3. les écrans de l'application ;
4. la navigation ;
5. le contenu de chaque écran ;
6. les actions possibles ;
7. les états d'erreur et états vides ;
8. le prototype fonctionnel avant développement Expo.
