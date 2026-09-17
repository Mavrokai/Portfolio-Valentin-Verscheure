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
      summary: 'Je sais analyser un besoin, préparer une maquette et modéliser une solution. Je dois encore approfondir la formalisation complète des cahiers des charges et l’argumentation des choix.',
      evidence: ['Maquette Responsive', 'My Cinema', 'My Twitter'],
      nextStep: 'Produire des dossiers de conception plus complets et conserver les décisions prises pendant chaque projet.'
    },
    {
      key: 'developper',
      number: '02',
      level: 'Autonome',
      summary: 'Je développe des interfaces et des fonctionnalités back-end, je manipule des bases de données et je mets en place des flux d’authentification sur des projets complets.',
      evidence: ['CSS Generator', 'My Cinema', 'My Meetic', 'My Twitter'],
      nextStep: 'Renforcer la couverture de tests, les performances et la sécurité des applications mises en production.'
    },
    {
      key: 'qualite',
      number: '03',
      level: 'En progression',
      summary: 'J’intègre l’ergonomie, le responsive et les premiers contrôles qualité dans mes réalisations. La documentation, le suivi des retours et les tests automatisés restent mes principaux axes de progression.',
      evidence: ['Maquette - Introduction', 'Maquette Responsive', 'My Spotify'],
      nextStep: 'Systématiser les audits Lighthouse, les tests automatisés et la documentation utilisateur et technique.'
    }
  ],
  gaps: [
    { key: 'cadrer.cdc', title: 'Cahier des charges', action: 'Ajouter un cahier des charges daté et relié à une réalisation.' },
    { key: 'cadrer.specs', title: 'Spécifications techniques', action: 'Publier les choix d’architecture, contraintes et critères d’acceptation d’un projet.' },
    { key: 'cadrer.presentation', title: 'Présentation argumentée', action: 'Joindre une présentation qui justifie les maquettes et les choix techniques.' },
    { key: 'developper.tests', title: 'Plan de tests', action: 'Relier des résultats de tests unitaires et d’intégration à une réalisation.' },
    { key: 'developper.deploy', title: 'Déploiement d’une application', action: 'Ajouter une démonstration publique et décrire sa procédure de mise en ligne.' },
    { key: 'qualite.doc_technique', title: 'Documentation technique', action: 'Publier une documentation d’installation, d’architecture et de maintenance.' },
    { key: 'qualite.doc_utilisateur', title: 'Documentation utilisateur', action: 'Ajouter un guide court couvrant les principaux parcours.' },
    { key: 'qualite.monitor', title: 'Suivi du lancement', action: 'Présenter des retours utilisateurs recueillis après une mise en ligne.' },
    { key: 'qualite.amelioration', title: 'Analyse d’améliorations', action: 'Comparer des mesures avant et après une amélioration vérifiable.' },
    { key: 'qualite.argumentatif', title: 'Préconisations argumentées', action: 'Joindre un document qui priorise et justifie des corrections.' }
  ]
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
      cadrer: ['maquette'],
      developper: ['integration', 'frontend'],
      qualite: ['ergonomie']
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
