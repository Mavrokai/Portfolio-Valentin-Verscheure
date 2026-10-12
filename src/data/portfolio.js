export const rncpBlocks = {
  cadrer: {
    title: 'Cadrer un projet et conceptualiser une solution web',
    items: {
      cdc: 'Rédiger un cahier des charges à partir d’une expression de besoins, dans le respect des réglementations applicables, notamment le RGPD.',
      specs: 'Rédiger des spécifications techniques à partir du cahier des charges afin de cadrer techniquement le développement.',
      environnement: 'Déployer un environnement de travail avec les outils de versionnage, de partage et de collaboration nécessaires.',
      maquette: 'Réaliser une maquette respectant les bonnes pratiques d’ergonomie et d’accessibilité afin de faire valider la structure.',
      modele: 'Modéliser les fonctionnalités, leurs interactions, l’architecture de la solution et sa base de données.',
      presentation: 'Présenter et argumenter les choix techniques, les maquettes et le schéma de la solution.'
    }
  },
  developper: {
    title: 'Développer une solution web',
    items: {
      prototype: 'Développer un prototype afin de présenter l’architecture technique de la solution.',
      code: 'Transcrire les fonctionnalités attendues dans un code respectant accessibilité, ergonomie, référencement et réglementation.',
      integration: 'Intégrer les éléments de la solution conformément aux maquettes et aux normes récentes des langages utilisés.',
      frontend: 'Implémenter la partie front-end d’une solution web.',
      backend: 'Implémenter la logique serveur et la persistance des données.',
      auth: 'Implémenter des règles d’authentification conformes aux bonnes pratiques de sécurité.',
      tests: 'Concevoir et exécuter des tests unitaires et d’intégration pour vérifier les fonctionnalités.',
      deploy: 'Déployer une application sur un serveur afin de la rendre accessible aux utilisateurs.'
    }
  },
  qualite: {
    title: 'Déployer un système d’assurance qualité',
    items: {
      doc_technique: 'Rédiger une documentation technique et fonctionnelle pour faciliter la maintenance et les évolutions.',
      doc_utilisateur: 'Rédiger une documentation utilisateur favorisant l’autonomie et la satisfaction.',
      monitor: 'Recueillir les retours utilisateurs lors du lancement afin d’évaluer la qualité de la solution.',
      amelioration: 'Analyser les retours et les données disponibles pour identifier des améliorations qualitatives et de performance.',
      ergonomie: 'Analyser l’ergonomie, l’accessibilité, la navigation et le référencement afin d’identifier les axes d’amélioration.',
      argumentatif: 'Formaliser et argumenter des propositions d’amélioration pour faire valider des corrections.'
    }
  }
}

export const portfolioProfile = {
  progression: [
    {
      key: 'cadrer',
      number: '01',
      level: 'En progression',
      summary: 'Je sais analyser un besoin, préparer une maquette, formaliser des spécifications et argumenter les choix techniques sur des réalisations concrètes.',
      evidence: ['Maquette Responsive', 'PiePHP', 'Microservices', 'My Cinema', 'My Twitter']
    },
    {
      key: 'developper',
      number: '02',
      level: 'Autonome',
      summary: 'Je développe des interfaces et des fonctionnalités back-end, je manipule des bases de données et je mets en place des flux d’authentification sur des projets complets.',
      evidence: ['CSS Generator', 'My Cinema', 'My Meetic', 'My Twitter', 'My CRUD Tester', 'Mass Protocol']
    },
    {
      key: 'qualite',
      number: '03',
      level: 'En progression',
      summary: 'J’intègre documentation, audits d’ergonomie, suivi de lancement et propositions d’amélioration dans mes réalisations déployées et documentées.',
      evidence: ['Maquette Responsive', 'E-commerce Symfony', 'Mass Protocol', 'My Restaurant', 'My CRUD Tester']
    }
  ],
  gaps: []
}

export const projects = [
  {
    title: 'CSS Generator',
    image: 'assets/spriteGenerator.png',
    repository: 'https://github.com/Mavrokai/CssGenerator-Sprite-',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Générateur de sprites et de classes CSS pour accélérer la préparation des ressources graphiques.',
    longDescription: 'Cet outil automatise la génération d’une feuille de styles et d’un sprite à partir de ressources fournies. Il met l’accent sur la structuration du code front et la fiabilité du résultat généré.',
    context: 'Projet personnel',
    role: 'Conception et développement',
    analysis: {
      approach: 'J’ai découpé le traitement en étapes : lecture des ressources, calcul des positions, génération du sprite puis production des règles CSS.',
      learning: 'Ce projet m’a appris à mieux séparer la logique de traitement de l’interface et à contrôler les données avant de générer un résultat.',
      nextStep: 'Ajouter davantage de formats, des tests automatisés et des messages d’erreur plus précis.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/CssGenerator-Sprite-' },
      { label: 'Capture du résultat', href: 'assets/spriteGenerator.png' }
    ],
    rncpKeys: {
      developper: ['prototype', 'code', 'integration', 'frontend']
    }
  },
  {
    title: 'Maquette - Introduction',
    image: 'assets/MaquetteIntro.png',
    repository: 'https://github.com/Mavrokai/Maquette-Introduction',
    tags: ['Intégration', 'Responsive'],
    description: 'Intégration fidèle d’une maquette avec un travail sur la structure et la hiérarchie visuelle.',
    longDescription: 'Le projet consistait à transformer une maquette fournie en page web structurée, lisible et adaptable, tout en respectant sa grille et sa hiérarchie de contenus.',
    context: 'Projet d’intégration',
    role: 'Intégration front-end',
    analysis: {
      approach: 'J’ai commencé par identifier les zones sémantiques et la grille, puis j’ai intégré les composants visuels avant d’ajuster les espacements et le responsive.',
      learning: 'J’ai progressé dans la lecture d’une maquette et dans la traduction de choix graphiques en règles CSS maintenables.',
      nextStep: 'Compléter le projet par un audit clavier, contraste et Lighthouse documenté.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/Maquette-Introduction' },
      { label: 'Maquette intégrée', href: 'assets/MaquetteIntro.png' }
    ],
    rncpKeys: {
      cadrer: ['maquette'],
      developper: ['integration', 'frontend']
    }
  },
  {
    title: 'Racing JS',
    image: 'assets/racingJS.png',
    repository: 'https://github.com/Mavrokai/RacingJS',
    tags: ['JavaScript', 'DOM', 'Animations'],
    description: 'Jeu de course en JavaScript centré sur la manipulation du DOM et les événements.',
    longDescription: 'Ce prototype jouable met en œuvre une boucle d’interaction côté navigateur, la gestion des commandes et la mise à jour dynamique de l’interface.',
    context: 'Projet pédagogique',
    role: 'Développement front-end',
    analysis: {
      approach: 'J’ai isolé l’état de la course, relié les commandes aux événements du navigateur et synchronisé cet état avec le rendu visuel.',
      learning: 'J’ai appris à raisonner en termes d’état, d’événements et de rafraîchissement d’interface plutôt qu’en modifications DOM dispersées.',
      nextStep: 'Ajouter des tests unitaires sur les règles du jeu et adapter les commandes aux écrans tactiles.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/RacingJS' },
      { label: 'Capture du jeu', href: 'assets/racingJS.png' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['prototype', 'code', 'frontend']
    }
  },
  {
    title: 'Maquette Responsive',
    image: 'assets/MaquetteResponsive.png',
    repository: 'https://github.com/Mavrokai/Maquette-Responsive',
    tags: ['Responsive', 'Flexbox', 'Grid'],
    description: 'Intégration responsive multi-écrans respectant une charte graphique donnée.',
    longDescription: 'Cette réalisation adapte une même hiérarchie de contenu à plusieurs largeurs d’écran avec Flexbox, Grid et des points de rupture ciblés.',
    context: 'Projet',
    role: 'Intégration front-end',
    analysis: {
      approach: 'J’ai construit la page avec une approche mobile-first, puis ajouté les changements de grille nécessaires aux formats tablette et bureau.',
      learning: 'J’ai progressé dans le choix des unités, la gestion des ruptures de mise en page et la conservation d’une hiérarchie claire sur chaque écran.',
      nextStep: 'Automatiser les contrôles visuels sur plusieurs navigateurs et documenter les critères d’accessibilité.'
    },
    ergonomicAudit: {
      strengths: [
        'La hiérarchie des contenus reste stable entre mobile, tablette et ordinateur.',
        'Flexbox et Grid évitent le débordement horizontal aux largeurs prévues.'
      ],
      risks: [
        'Les contrastes et le parcours clavier ne sont pas encore mesurés dans un rapport automatisé.',
        'Les captures disponibles ne couvrent pas tous les navigateurs.'
      ],
      actions: [
        'Réaliser un audit Lighthouse et corriger les alertes d’accessibilité.',
        'Tester le clavier, le zoom à 200 % et plusieurs moteurs de rendu.'
      ]
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/Maquette-Responsive' },
      { label: 'Aperçu responsive', href: 'assets/MaquetteResponsive.png' }
    ],
    rncpKeys: {
      cadrer: ['maquette', 'cdc', 'presentation'],
      developper: ['integration', 'frontend'],
      qualite: ['ergonomie', 'argumentatif']
    }
  },
  {
    title: 'My Cinema',
    image: 'assets/MyCinema.png',
    repository: 'https://github.com/Mavrokai/My-Cinema',
    tags: ['PHP', 'MySQL', 'CRUD'],
    description: 'Application de consultation et de gestion de films avec filtres et persistance des données.',
    longDescription: 'Cette application met en relation une base de données cinéma, des requêtes de recherche et une interface permettant de consulter et de gérer les informations.',
    context: 'Projet de développement web',
    role: 'Développement full-stack',
    analysis: {
      approach: 'J’ai modélisé les principales entités, préparé les requêtes nécessaires aux recherches puis relié les formulaires et les vues à la logique serveur.',
      learning: 'Ce projet m’a permis de comprendre le cycle complet d’une donnée, de sa modélisation jusqu’à son affichage dans l’interface.',
      nextStep: 'Renforcer la validation serveur, les requêtes préparées, les tests d’intégration et la documentation du modèle.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My-Cinema' },
      { label: 'Capture de l’application', href: 'assets/MyCinema.png' }
    ],
    rncpKeys: {
      cadrer: ['modele'],
      developper: ['backend', 'frontend', 'code']
    }
  },
  {
    title: 'My Meetic',
    image: 'assets/MyMeetic.png',
    repository: 'https://github.com/Mavrokai/My-Meetic',
    tags: ['PHP', 'POO', 'Authentification'],
    description: 'Plateforme de rencontre simplifiée avec inscription, profils et recherche.',
    longDescription: 'Le projet combine comptes utilisateurs, authentification, gestion de profils et critères de recherche dans une application PHP orientée objet.',
    context: 'Projet de développement web',
    role: 'Back-end et base de données',
    analysis: {
      approach: 'J’ai séparé les responsabilités métier, organisé les flux d’inscription et de connexion, puis relié les profils à la persistance en base de données.',
      learning: 'J’ai approfondi la programmation orientée objet, la gestion de session et les enjeux de validation liés aux données personnelles.',
      nextStep: 'Approfondir la sécurité des comptes, la conformité RGPD et les tests automatisés des parcours sensibles.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My-Meetic' },
      { label: 'Capture de l’application', href: 'assets/MyMeetic.png' }
    ],
    rncpKeys: {
      cadrer: ['modele'],
      developper: ['auth', 'backend', 'frontend', 'code']
    }
  },
  {
    title: 'My Twitter',
    image: 'assets/MyTwitter.png',
    repository: 'https://github.com/Mavrokai/My-Twitter',
    tags: ['PHP', 'MVC', 'Réseau social'],
    description: 'Réseau social simplifié avec comptes, publications et fil d’actualité.',
    longDescription: 'Cette réalisation structure les comptes, les publications et la timeline autour d’une architecture MVC séparant les vues, les contrôleurs et l’accès aux données.',
    context: 'Projet MVC',
    role: 'Développement full-stack',
    analysis: {
      approach: 'J’ai réparti les fonctionnalités par responsabilités MVC, puis relié les flux de compte, de publication et de consultation du fil d’actualité.',
      learning: 'J’ai appris à maintenir une architecture plus lisible lorsque plusieurs fonctionnalités partagent des données et des règles d’accès.',
      nextStep: 'Ajouter une pagination, mesurer les performances des requêtes et automatiser les tests des principaux parcours.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My-Twitter' },
      { label: 'Capture de l’application', href: 'assets/MyTwitter.png' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['frontend', 'backend', 'auth', 'integration']
    }
  },
  {
    title: 'My Spotify',
    image: 'assets/mySpotify.png',
    repository: 'https://github.com/Mavrokai/My-Spotify',
    tags: ['PHP', 'API', 'UX'],
    description: 'Interface musicale inspirée de Spotify avec navigation et gestion de playlists.',
    longDescription: 'Cette interface de type application musicale travaille la consommation de données, les états d’affichage et la fluidité du parcours utilisateur.',
    context: 'Projet personnel',
    role: 'Conception UI et développement',
    analysis: {
      approach: 'J’ai organisé l’interface autour des principaux parcours musicaux, puis relié les données de l’API aux différents états de l’application.',
      learning: 'J’ai progressé dans la gestion des appels asynchrones et dans la conception d’une interface riche qui reste compréhensible.',
      nextStep: 'Améliorer les états de chargement et d’erreur, la navigation clavier et la mise en cache des données.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My-Spotify' },
      { label: 'Capture de l’interface', href: 'assets/mySpotify.png' }
    ],
    rncpKeys: {
      developper: ['integration', 'frontend', 'code']
    }
  },
  {
    title: 'Framework CSS',
    image: 'assets/projects/frameworkcss.png',
    repository: 'https://github.com/Mavrokai/frameworkcss',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    description: 'Framework CSS maison avec grille responsive, composants UI, popin, onglets et info-bulles.',
    longDescription: 'Bibliothèque de classes utilitaires et de composants (grille, boutons, navbar, popin, onglets, masquage responsive) livrée avec une page de démonstration interactive.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Conception et développement front-end',
    analysis: {
      approach: 'J’ai découpé le framework en modules SCSS/CSS indépendants, puis construit une page de démo pour valider chaque composant sur plusieurs largeurs.',
      learning: 'Ce projet m’a permis de mieux structurer une librairie CSS réutilisable et de documenter le comportement responsive de chaque utilitaire.',
      nextStep: 'Publier une documentation de classes et ajouter des tests visuels automatisés.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/frameworkcss' },
      { label: 'Capture de la démo', href: 'assets/projects/frameworkcss.png' }
    ],
    rncpKeys: {
      developper: ['integration', 'frontend', 'prototype']
    }
  },
  {
    title: 'Puissance 4',
    image: 'assets/projects/puissance4.png',
    repository: 'https://github.com/Mavrokai/Puissance4',
    tags: ['JavaScript', 'DOM', 'Jeu'],
    description: 'Jeu Puissance 4 en JavaScript pur avec scores, personnalisation des joueurs et nouvelle partie.',
    longDescription: 'Implémentation navigateur du Puissance 4 : grille 7×6, tours joueurs, détection de victoire, édition des noms/couleurs et reset de partie.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Développement front-end',
    analysis: {
      approach: 'J’ai modélisé l’état de la grille, relié les clics aux colonnes puis centralisé les règles de victoire et d’égalité dans le script principal.',
      learning: 'J’ai renforcé ma maîtrise de la manipulation du DOM et de la séparation entre état de jeu et rendu.',
      nextStep: 'Ajouter un mode contre l’IA et des tests unitaires sur les règles de victoire.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/Puissance4' },
      { label: 'Capture du jeu', href: 'assets/projects/puissance4.png' }
    ],
    rncpKeys: {
      developper: ['prototype', 'code', 'frontend']
    }
  },
  {
    title: 'PiePHP',
    image: 'assets/projects/piephp.png',
    repository: 'https://github.com/Mavrokai/PiePHP',
    tags: ['PHP', 'MVC', 'Framework'],
    description: 'Mini-framework PHP MVC maison (routing, contrôleurs, vues, webroot).',
    longDescription: 'Reconstruction pédagogique d’un framework type CakePHP : noyau (Core), structure src/, point d’entrée et assets dans webroot.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Architecture et développement back-end',
    analysis: {
      approach: 'J’ai isolé le routing et le cycle requête → contrôleur → vue, puis organisé le code pour pouvoir brancher des modules applicatifs dessus.',
      learning: 'Ce projet m’a clarifié le fonctionnement interne d’un framework MVC et la frontière entre noyau et application.',
      nextStep: 'Ajouter une couche ORM légère et des tests sur le routeur.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/PiePHP' }
    ],
    rncpKeys: {
      cadrer: ['environnement', 'modele', 'specs'],
      developper: ['prototype', 'backend', 'code']
    }
  },
  {
    title: 'FreeAds',
    image: 'assets/projects/freeads.png',
    repository: 'https://github.com/Mavrokai/FreeAds',
    tags: ['Laravel', 'PHP', 'Blade'],
    description: 'Site d’annonces classées développé avec Laravel (auth, CRUD, vues Blade).',
    longDescription: 'Application Laravel complète pour publier, consulter et gérer des annonces, avec authentification et templates Blade.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Développement full-stack',
    analysis: {
      approach: 'J’ai structuré les modèles et contrôleurs Laravel autour du cycle de vie d’une annonce, puis relié les formulaires aux validations et à la persistance.',
      learning: 'J’ai progressé sur l’écosystème Laravel (routing, Eloquent, Blade, auth) et sur l’organisation d’un projet MVC moderne.',
      nextStep: 'Ajouter des tests Feature Laravel et une pagination filtrée des annonces.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/FreeAds' }
    ],
    rncpKeys: {
      developper: ['backend', 'frontend', 'auth', 'code']
    }
  },
  {
    title: 'PushSwap',
    image: 'assets/projects/pushswap.png',
    repository: 'https://github.com/Mavrokai/PushSwap',
    tags: ['PHP', 'Algorithmes', 'Tri'],
    description: 'Implémentation PHP de Push Swap : tri d’une pile avec un jeu d’instructions limité.',
    longDescription: 'Algorithme de tri contraint inspiré du sujet Push Swap : manipulation de piles et génération d’une séquence d’opérations optimale.',
    context: 'Projet algorithmique',
    role: 'Développement algorithmique',
    analysis: {
      approach: 'J’ai représenté les piles en structures PHP, puis itéré sur des stratégies de tri pour réduire le nombre d’instructions.',
      learning: 'Ce projet a renforcé mon raisonnement algorithmique et ma lecture de contraintes de complexité.',
      nextStep: 'Comparer plusieurs stratégies et mesurer le nombre d’opérations sur des jeux de tests.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/PushSwap' }
    ],
    rncpKeys: {
      developper: ['code', 'prototype']
    }
  },
  {
    title: 'My Snapchat',
    image: 'assets/projects/my-snapchat.png',
    repository: 'https://github.com/Mavrokai/My_SnapChat',
    tags: ['React Native', 'Expo', 'TypeScript'],
    description: 'Application mobile d’envoi de photos éphémères inspirée de Snapchat.',
    longDescription: 'App Expo/React Native avec authentification, envoi de snaps temporisés, profils et actualisation des snaps reçus.',
    context: 'Projet mobile Web@cademie',
    role: 'Développement mobile',
    analysis: {
      approach: 'J’ai découpé les écrans (auth, caméra, inbox, profil), branché Expo Image Picker et géré la durée de visualisation côté client.',
      learning: 'J’ai appris à orchestrer navigation, permissions et persistance locale dans une app mobile React Native.',
      nextStep: 'Améliorer la synchro serveur et les états hors-ligne.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My_SnapChat' }
    ],
    rncpKeys: {
      developper: ['frontend', 'auth', 'integration', 'code']
    }
  },
  {
    title: 'My Quiz',
    image: 'assets/projects/my-quiz.png',
    repository: 'https://github.com/Mavrokai/My_Quiz',
    tags: ['PHP', 'MVC', 'Twig'],
    description: 'Application de quiz en architecture MVC PHP avec templates Twig et base SQL.',
    longDescription: 'Quiz interactif structuré en MVC : questions, scores, migrations SQL et rendu Twig.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Développement full-stack',
    analysis: {
      approach: 'J’ai modélisé les entités quiz/questions, branché les contrôleurs sur Twig et préparé le schéma SQL nécessaire au scoring.',
      learning: 'J’ai consolidé le pattern MVC et l’intégration Twig côté PHP.',
      nextStep: 'Ajouter un back-office de création de quiz et des tests d’intégration.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/My_Quiz' }
    ],
    rncpKeys: {
      cadrer: ['modele'],
      developper: ['backend', 'frontend', 'code']
    }
  },
  {
    title: 'BSQ',
    image: 'assets/projects/bsq.png',
    repository: 'https://github.com/Mavrokai/BSQ',
    tags: ['PHP', 'Algorithmes'],
    description: 'Algorithme BSQ (Biggest Square) en PHP avec générateur de cartes.',
    longDescription: 'Recherche du plus grand carré dans une carte d’obstacles, accompagnée d’un générateur Perl de grilles de test.',
    context: 'Projet algorithmique',
    role: 'Développement algorithmique',
    analysis: {
      approach: 'J’ai parsé la carte, appliqué une approche de programmation dynamique pour le plus grand carré, puis validé avec des grilles générées.',
      learning: 'Ce sujet m’a entraîné à traiter des entrées structurées et à raisonner sur la complexité spatiale/temporelle.',
      nextStep: 'Ajouter une batterie de tests automatisés sur différentes tailles de cartes.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/BSQ' }
    ],
    rncpKeys: {
      developper: ['code', 'prototype']
    }
  },
  {
    title: 'h5ai',
    image: 'assets/projects/h5ai.png',
    repository: 'https://github.com/Mavrokai/h5ai',
    tags: ['Node.js', 'Express', 'EJS'],
    description: 'Explorateur de fichiers web façon h5ai : arborescence, recherche et listing.',
    longDescription: 'Serveur Express qui expose un navigateur de fichiers avec icônes, chemin courant, recherche et rendu EJS.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Développement full-stack',
    analysis: {
      approach: 'J’ai branché Express sur le système de fichiers, généré une vue arborescente et ajouté une recherche côté interface.',
      learning: 'J’ai progressé sur Node/Express, le rendu serveur et la sécurisation relative des chemins fichiers.',
      nextStep: 'Restreindre l’accès aux dossiers sensibles et ajouter un tri multi-colonnes.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/h5ai' },
      { label: 'Capture de l’explorateur', href: 'assets/projects/h5ai.png' }
    ],
    rncpKeys: {
      developper: ['backend', 'frontend', 'integration', 'code']
    }
  },
  {
    title: 'IRC Chat',
    image: 'assets/projects/irc.png',
    repository: 'https://github.com/Mavrokai/IRC',
    tags: ['Node.js', 'Socket.io', 'Temps réel'],
    description: 'Chat IRC temps réel avec Socket.io : salons, messages et client web.',
    longDescription: 'Serveur Node + Socket.io et client web pour rejoindre des salons, échanger en temps réel et gérer les connexions.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Développement full-stack temps réel',
    analysis: {
      approach: 'J’ai séparé handlers Socket.io et client Vite, puis géré les événements de connexion, de salon et de message.',
      learning: 'Ce projet m’a familiarisé avec la communication bidirectionnelle et la synchronisation d’état multi-clients.',
      nextStep: 'Persister l’historique des salons et ajouter la modération des messages.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/IRC' },
      { label: 'Capture du chat', href: 'assets/projects/irc.png' }
    ],
    rncpKeys: {
      developper: ['backend', 'frontend', 'integration', 'code']
    }
  },
  {
    title: 'My Events (CMS)',
    image: 'assets/projects/cms-events.png',
    repository: 'https://github.com/Mavrokai/CMS',
    tags: ['Vue', 'Spring Boot', 'Java'],
    description: 'Plateforme d’événements : client Vue et API Spring Boot (My_events).',
    longDescription: 'Architecture découpée client/serveur : front Vue et back Java/Spring pour gérer des événements et leurs données associées.',
    context: 'Projet pédagogique Web@cademie',
    role: 'Front-end Vue et intégration API',
    analysis: {
      approach: 'J’ai monté le client Vue avec Vite, consommé l’API Spring et structuré les écrans autour des parcours événementiels.',
      learning: 'J’ai appris à collaborer autour d’un contrat API entre un front moderne et un back Java.',
      nextStep: 'Documenter les endpoints et renforcer la gestion des erreurs réseau côté UI.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/CMS' },
      { label: 'Capture du client', href: 'assets/projects/cms-events.png' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['frontend', 'integration', 'backend']
    }
  },
  {
    title: 'EvalExpr',
    image: 'assets/projects/evalexpr.png',
    repository: 'https://github.com/Mavrokai/EvaleXPR',
    tags: ['PHP', 'Parseur'],
    description: 'Évaluateur d’expressions mathématiques en PHP.',
    longDescription: 'Parseur/évaluateur d’expressions arithmétiques, avec scripts de test dédiés.',
    context: 'Projet algorithmique',
    role: 'Développement algorithmique',
    analysis: {
      approach: 'J’ai découpé le parsing et l’évaluation, puis validé le comportement via un script de tests dédié.',
      learning: 'J’ai approfondi la gestion des priorités d’opérateurs et la robustesse face aux entrées invalides.',
      nextStep: 'Étendre le support des parenthèses complexes et des fonctions mathématiques.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/EvaleXPR' }
    ],
    rncpKeys: {
      developper: ['code', 'prototype']
    }
  },
  {
    title: 'E-commerce Java',
    image: 'assets/projects/ecommerce-java.png',
    repository: 'https://github.com/Mavrokai/Ecommerce',
    tags: ['Java', 'Spring Boot', 'Équipe'],
    description: 'Projet e-commerce Java en équipe (Spring Boot, PostgreSQL).',
    longDescription: 'Réalisation collaborative d’une boutique en ligne : backend Maven/Spring Boot, documentation d’installation et base PostgreSQL.',
    context: 'Projet d’équipe Web@cademie',
    role: 'Développement back-end en équipe',
    analysis: {
      approach: 'Nous avons réparti les responsabilités (API, données, docs), puis livré un backend Spring Boot avec guide d’installation.',
      learning: 'J’ai progressé sur le travail d’équipe Git, Maven et la mise en place d’un service e-commerce.',
      nextStep: 'Exposer une démo publique et compléter les tests d’intégration des paniers/commandes.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/Ecommerce' },
      { label: 'Guide d’installation', href: 'https://github.com/Mavrokai/Ecommerce/blob/main/Installation.md' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['backend', 'code'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'Previously',
    image: 'assets/projects/previously.png',
    repository: 'https://github.com/Mavrokai/previously',
    tags: ['Vue', 'Quasar', 'Pinia'],
    description: 'Application web de suivi de films et séries (Vue 3 + Quasar).',
    longDescription: 'Client Quasar/Vue pour cataloguer et suivre des œuvres audiovisuelles, avec navigation, état Pinia et appels API.',
    context: 'Projet spécialisation Web@cademie',
    role: 'Développement front-end',
    analysis: {
      approach: 'J’ai structuré l’app autour de Quasar (layout, routes) et Pinia pour l’état, puis branché les écrans sur les données externes.',
      learning: 'J’ai renforcé ma pratique de Vue 3 Composition API dans un framework UI abouti.',
      nextStep: 'Améliorer les états vides/erreur et la recherche filtrée.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/previously' },
      { label: 'Capture de l’app', href: 'assets/projects/previously.png' }
    ],
    rncpKeys: {
      developper: ['frontend', 'integration', 'code']
    }
  },
  {
    title: 'My CRUD Tester',
    image: 'assets/projects/mycrudtester.png',
    repository: 'https://github.com/Mavrokai/mycrudtester',
    tags: ['Node.js', 'MongoDB', 'JWT', 'Tests'],
    description: 'API REST utilisateurs avec JWT, 187 tests Jasmine et collection Postman.',
    longDescription: 'API Express de gestion d’utilisateurs (CRUD, auth JWT, bcrypt, soft delete) couverte par des tests unitaires Jasmine et des tests fonctionnels Postman, packagée avec Docker.',
    context: 'Projet qualité / tests Web@cademie',
    role: 'API et assurance qualité',
    analysis: {
      approach: 'J’ai implémenté les routes utilisateur, sécurisé l’auth JWT, puis construit une suite de tests unitaires et Postman pour valider chaque parcours.',
      learning: 'Ce projet m’a ancré la culture du test (BDD Jasmine, couverture NYC) et la conception d’une API REST sûre.',
      nextStep: 'Publier un rapport de couverture et automatiser la suite dans une CI.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/mycrudtester' },
      { label: 'Collection Postman', href: 'https://github.com/Mavrokai/mycrudtester' }
    ],
    rncpKeys: {
      developper: ['backend', 'auth', 'tests', 'code'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'Kiloupabocou',
    image: 'assets/projects/kiloupabocou.png',
    repository: 'https://github.com/Mavrokai/kiloupabocou',
    tags: ['Docker', 'ELK', 'Symfony'],
    description: 'Infrastructure Docker Symfony + stack ELK pour centraliser et visualiser les logs.',
    longDescription: 'Compose multi-conteneurs (Nginx, PHP-FPM, MySQL, Elasticsearch, Logstash, Kibana, Filebeat) pour déployer Symfony et observer les logs.',
    context: 'Projet infrastructure / DevOps',
    role: 'Industrialisation et monitoring',
    analysis: {
      approach: 'J’ai orchestré les services Docker, branché Filebeat sur les logs applicatifs et exposé Kibana pour l’analyse.',
      learning: 'J’ai progressé sur Docker Compose, le routage de logs et l’observabilité d’une appli Symfony.',
      nextStep: 'Documenter les dashboards Kibana et ajouter des alertes sur la taille des logs.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/kiloupabocou' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['deploy'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'Microservices',
    image: 'assets/projects/microservices.png',
    repository: 'https://github.com/Mavrokai/microservices',
    tags: ['PHP Slim', 'Express', 'MongoDB'],
    description: 'Deux APIs microservices : utilisateurs/messages (Slim/MySQL) et discussions (Express/MongoDB).',
    longDescription: 'Architecture multi-services avec API PHP Slim et API ExpressJS, chacune sur sa base, pour séparer utilisateurs, messages et discussions.',
    context: 'Projet architecture Web@cademie',
    role: 'Développement d’APIs',
    analysis: {
      approach: 'J’ai isolé les responsabilités par service, préparé les schémas MySQL/Mongo et documenté le démarrage de chaque API.',
      learning: 'J’ai compris les enjeux de découpage, de ports et de cohérence entre services hétérogènes.',
      nextStep: 'Ajouter une gateway et des contrats OpenAPI partagés.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/microservices' }
    ],
    rncpKeys: {
      cadrer: ['environnement', 'modele'],
      developper: ['backend', 'code'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'E-commerce Symfony',
    image: 'assets/projects/ecommerce-optimisation.png',
    repository: 'https://github.com/Mavrokai/EcommerceOPtimisation',
    tags: ['Symfony', 'Twig', 'PostgreSQL'],
    description: 'Boutique Symfony 6.4 (Twig, PostgreSQL) avec travail d’optimisation et capture d’écran de parcours.',
    longDescription: 'Projet e-commerce Symfony centré sur l’installation maîtrisée de la stack (PHP, Composer, PostgreSQL) et l’optimisation du parcours boutique.',
    context: 'Projet pédagogique / optimisation',
    role: 'Développement Symfony',
    analysis: {
      approach: 'J’ai suivi une installation reproductible Symfony 6.4, branché Twig/PostgreSQL puis itéré sur le parcours e-commerce.',
      learning: 'J’ai consolidé Symfony, l’environnement PHP et la lecture de performances côté boutique.',
      nextStep: 'Mesurer Lighthouse avant/après optimisation et publier le rapport.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/EcommerceOPtimisation' },
      { label: 'Capture boutique', href: 'assets/projects/ecommerce-optimisation.png' }
    ],
    rncpKeys: {
      developper: ['backend', 'frontend', 'integration'],
      qualite: ['ergonomie', 'doc_technique', 'amelioration']
    },
    ergonomicAudit: {
      strengths: [
        'Parcours boutique lisible sur la capture de référence.',
        'Stack Symfony/Twig adaptée à un rendu serveur cohérent.'
      ],
      risks: [
        'Les métriques Lighthouse avant/après ne sont pas encore publiées.',
        'Le responsive multi-appareils reste à documenter systématiquement.'
      ],
      actions: [
        'Réaliser un audit Lighthouse et corriger les alertes prioritaires.',
        'Comparer les temps de chargement avant et après optimisation.'
      ]
    }
  },
  {
    title: 'DevResp',
    image: 'assets/projects/devresp.png',
    repository: 'https://github.com/Mavrokai/devresp',
    tags: ['Symfony', 'Twig', 'PostgreSQL'],
    description: 'Projet Symfony e-commerce orienté bonnes pratiques d’installation et de stack PHP.',
    longDescription: 'Mise en place d’une application Symfony 6.4 avec Twig et PostgreSQL, avec documentation d’installation multi-OS.',
    context: 'Projet pédagogique',
    role: 'Développement Symfony',
    analysis: {
      approach: 'J’ai documenté l’installation bout-en-bout puis structuré le projet Symfony pour un usage e-commerce.',
      learning: 'J’ai renforcé la reproductibilité d’un environnement PHP/Symfony sur plusieurs systèmes.',
      nextStep: 'Différencier clairement ce dépôt de la version optimisation et y attacher des métriques qualité.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/devresp' },
      { label: 'Capture', href: 'assets/projects/devresp.png' }
    ],
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['backend', 'frontend'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'Mediaval RPG',
    image: 'assets/projects/ruby-rpg.png',
    repository: 'https://github.com/Mavrokai/ruby',
    tags: ['Ruby on Rails', 'SQLite', 'RPG'],
    description: 'Jeu web RPG médiéval : quêtes, combats au tour par tour, PNJ et progression.',
    longDescription: 'Application Rails où un maître du jeu crée des quêtes (étapes, énigmes, objets) et où les joueurs incarnent un personnage, combattent et s’équipent.',
    context: 'Projet W-WEB-401 RoR',
    role: 'Développement full-stack Rails',
    analysis: {
      approach: 'J’ai modélisé quêtes, personnages et combats dans Rails, préparé seeds et Docker, puis exposé les parcours MJ/joueur.',
      learning: 'J’ai découvert l’écosystème Rails (MVC, Active Record, seeds) appliqué à une mécanique de jeu riche.',
      nextStep: 'Déployer une instance de démo et ajouter des tests de modèles.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/ruby' }
    ],
    rncpKeys: {
      cadrer: ['modele', 'environnement'],
      developper: ['backend', 'frontend', 'code'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'My Restaurant',
    image: 'assets/projects/java-restaurant.png',
    repository: 'https://github.com/Mavrokai/java',
    tags: ['Java', 'Spring Boot', 'Thymeleaf'],
    description: 'Back-office et site public pour restaurateurs (carte, menus, allergènes, avis).',
    longDescription: 'Outil Spring Boot 3 / Thymeleaf / MySQL avec espace admin sécurisé et vitrine client sur un thème restaurant japonais.',
    context: 'Projet Java Web@cademie',
    role: 'Développement full-stack Java',
    analysis: {
      approach: 'J’ai modélisé les entités carte/menus, sécurisé l’admin Spring Security et rendu les pages publiques en Thymeleaf.',
      learning: 'J’ai consolidé Spring MVC, JPA et la séparation back-office / site public.',
      nextStep: 'Publier une démo Docker complète et des captures du back-office.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/java' }
    ],
    rncpKeys: {
      cadrer: ['modele'],
      developper: ['backend', 'frontend', 'auth', 'code'],
      qualite: ['doc_technique', 'doc_utilisateur']
    }
  },
  {
    title: 'WebtoonReader',
    image: 'assets/projects/webtoon-reader.png',
    repository: 'https://github.com/Mavrokai/app',
    tags: ['React Native', 'Expo', 'MangaDex'],
    description: 'App mobile de lecture de webtoons/manhwa avec API MangaDex et capteurs téléphone.',
    longDescription: 'Lecteur Expo SDK 54 branché sur MangaDex, avec synchronisation backend SQLite et usage de capteurs (accéléromètre, Face ID, contacts, agenda).',
    context: 'Projet mobile W-DEV-400',
    role: 'Développement mobile et API locale',
    analysis: {
      approach: 'J’ai intégré plusieurs endpoints MangaDex, monté un petit serveur de sync et branché les capteurs natifs Expo dans les parcours de lecture.',
      learning: 'J’ai appris à combiner API tierce, backend local et capacités hardware dans une app Expo contrainte de version.',
      nextStep: 'Publier des captures Expo Go et un guide de démo court.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/app' }
    ],
    rncpKeys: {
      developper: ['frontend', 'backend', 'integration', 'code']
    }
  },
  {
    title: 'HTML5 Gaming',
    image: 'assets/projects/gaming.png',
    repository: 'https://github.com/Mavrokai/gaming',
    tags: ['HTML5', 'Game design', 'HUD'],
    description: 'Projet de jeu HTML5 avec assets HUD (sorts, portrait) et documentation associée.',
    longDescription: 'Base de jeu HTML5 comprenant une charte HUD (portrait, sorts) et un PDF de conception, orientée expérience de combat.',
    context: 'Projet gaming / conception',
    role: 'Conception et assets UI',
    analysis: {
      approach: 'J’ai préparé les éléments de HUD et la documentation de gameplay pour servir de base à l’implémentation HTML5.',
      learning: 'Ce travail m’a sensibilisé au lien entre game design, UI de combat et assets exploitables en front.',
      nextStep: 'Livrer un build jouable navigateur et capturer la première scène.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/gaming' },
      { label: 'Asset HUD', href: 'assets/projects/gaming.png' }
    ],
    rncpKeys: {
      cadrer: ['maquette'],
      developper: ['frontend']
    }
  },
  {
    title: 'My Go',
    image: 'assets/projects/mygo.png',
    repository: 'https://github.com/Mavrokai/mygo',
    tags: ['Documentation'],
    description: 'Dépôt de documentation / supports liés au parcours My Go.',
    longDescription: 'Espace de documentation projet (dossier docs) associé au sujet My Go, destiné à centraliser les supports.',
    context: 'Support pédagogique',
    role: 'Documentation',
    analysis: {
      approach: 'J’ai structuré un dépôt dédié pour centraliser la documentation du sujet.',
      learning: 'Ce dépôt rappelle l’importance de séparer code et supports documentaires.',
      nextStep: 'Compléter les docs avec un README d’entrée et des liens vers les preuves techniques.'
    },
    evidence: [
      { label: 'Dépôt', href: 'https://github.com/Mavrokai/mygo' }
    ],
    rncpKeys: {
      qualite: ['doc_technique']
    }
  },
  {
    title: 'Mass Protocol',
    image: 'assets/projects/muscccs.png',
    repository: 'https://github.com/Mavrokai/muscccs',
    tags: ['React', 'Vite', 'Supabase'],
    description: 'Application web “Mass Protocol” (suivi musculation) déployée sur Vercel.',
    longDescription: 'Front React/Vite branché sur Supabase pour l’authentification et les données, avec écran de connexion/inscription et démo publique.',
    context: 'Projet personnel déployé',
    role: 'Conception et développement full-stack',
    analysis: {
      approach: 'J’ai construit le front React, branché Supabase pour l’auth, puis déployé sur Vercel pour obtenir une URL publique.',
      learning: 'J’ai progressé sur le couple React + BaaS et sur le déploiement front en conditions réelles.',
      nextStep: 'Enrichir le dashboard post-connexion et documenter le modèle de données.'
    },
    evidence: [
      { label: 'Code source', href: 'https://github.com/Mavrokai/muscccs' },
      { label: 'Démo en ligne', href: 'https://muscccs.vercel.app' },
      { label: 'Capture connexion', href: 'assets/projects/muscccs.png' }
    ],
    rncpKeys: {
      developper: ['frontend', 'backend', 'auth', 'deploy', 'integration'],
      qualite: ['monitor', 'doc_utilisateur']
    }
  }
]

export function buildRncpGroups (keysByBlock) {
  return Object.entries(keysByBlock).flatMap(([blockKey, keys]) => {
    const block = rncpBlocks[blockKey]
    if (!block) return []

    const items = keys.map((key) => block.items[key]).filter(Boolean)
    return items.length ? [{ blockTitle: block.title, items }] : []
  })
}
