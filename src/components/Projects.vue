<template>
  <section id="projets" class="py-24 px-4 md:px-20 bg-portfolio-dark-alt">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <p class="text-xs uppercase tracking-[0.35em] text-amber-300/80 mb-3">
          Projets SIO & personnels
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-3 animate-on-scroll animate-fade-in-down">
          Mettre en pratique
          <span class="text-amber-300">les compétences</span>
        </h2>
        <p class="max-w-2xl mx-auto text-sm md:text-base text-gray-300/90">
          Sélection de projets qui illustrent l&apos;analyse de besoin, la
          conception, le développement, l&apos;intégration et la mise en
          production d&apos;applications web — avec le lien vers les
          compétences du titre RNCP mobilisées.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="relative flex flex-col overflow-hidden rounded-2xl bg-linear-to-b from-black/40 via-portfolio-dark/90 to-portfolio-dark-alt/90 border border-amber-400/15 stagger-item animate-on-scroll hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-all"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div class="absolute bottom-3 left-4 flex flex-wrap gap-2 text-[11px]">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full bg-black/60 px-2 py-0.5 text-amber-200 border border-amber-400/40"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-3 p-5">
            <h3 class="text-lg font-semibold text-gray-50">
              {{ project.title }}
            </h3>
            <p v-if="project.description" class="text-sm text-gray-300/90">
              {{ project.description }}
            </p>

            <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-400">
              <span v-if="project.context">
                {{ project.context }}
              </span>
              <span v-if="project.role" class="italic">
                Rôle : {{ project.role }}
              </span>
            </div>

            <div class="mt-auto pt-4 flex gap-3">
              <button
                type="button"
                class="flex-1 text-center py-2 px-4 rounded-full bg-amber-400 text-portfolio-dark text-sm font-semibold hover:bg-amber-500 transition-all hover:shadow-[0_5px_18px_rgba(251,191,36,0.55)]"
                @click="openModal(project)"
              >
                Voir le projet
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeProject"
        class="fixed inset-0 z-100 flex items-end justify-center sm:items-center p-0 sm:p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
      >
        <div
          class="absolute inset-0 bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
          @click="closeModal"
        />
        <div
          class="relative z-10 flex max-h-dvh w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-amber-400/20 bg-linear-to-b from-portfolio-dark to-black/90 shadow-[0_-8px_48px_rgba(0,0,0,0.85)] sm:rounded-2xl sm:max-h-[90vh]"
          @click.stop
        >
          <div class="flex shrink-0 items-center justify-between gap-3 border-b border-amber-400/15 px-4 py-3 sm:px-6">
            <h3 :id="modalTitleId" class="text-lg font-semibold text-gray-50 pr-2">
              {{ activeProject.title }}
            </h3>
            <button
              type="button"
              class="shrink-0 rounded-xl border border-amber-400/30 p-2 text-amber-300/90 transition hover:bg-amber-400/10 hover:text-amber-200"
              aria-label="Fermer la fenêtre"
              @click="closeModal"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div class="aspect-video w-full overflow-hidden bg-black/40 sm:aspect-21/9">
              <img
                :src="activeProject.image"
                :alt="`Aperçu du projet ${activeProject.title}`"
                class="h-full w-full object-cover object-top"
              />
            </div>

            <div class="space-y-5 px-4 py-5 sm:px-6">
              <p v-if="activeProject.longDescription" class="text-sm leading-relaxed text-gray-300/95">
                {{ activeProject.longDescription }}
              </p>
              <p v-else class="text-sm leading-relaxed text-gray-300/95">
                {{ activeProject.description }}
              </p>

              <div class="flex flex-wrap gap-3 text-xs text-gray-500">
                <span v-if="activeProject.context">{{ activeProject.context }}</span>
                <span v-if="activeProject.role" class="italic">Rôle : {{ activeProject.role }}</span>
              </div>

              <div>
                <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                  Compétences RNCP associées
                </p>
                <ul class="space-y-3 text-sm text-gray-300/95">
                  <li
                    v-for="(group, gIdx) in modalRncpGroups"
                    :key="gIdx"
                    class="rounded-xl border border-amber-400/10 bg-black/25 p-3"
                  >
                    <p class="mb-2 text-xs font-medium text-amber-200/90">
                      {{ group.blocTitle }}
                    </p>
                    <ul class="list-disc space-y-2 pl-4 marker:text-amber-400/60">
                      <li v-for="(line, i) in group.items" :key="i" class="leading-snug">
                        {{ line }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <a
                v-if="activeProject.repository"
                :href="activeProject.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 py-3 px-6 text-sm font-semibold text-portfolio-dark transition hover:bg-amber-500 hover:shadow-[0_8px_24px_rgba(251,191,36,0.45)]"
              >
                Voir le code sur GitHub
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const modalTitleId = 'project-modal-title'

/** Textes officiels regroupés par bloc RNCP (référence unique). */
const RNCP_BLOCS = {
  cadrer: {
    title: 'Cadrer un projet et conceptualiser une solution web',
    items: {
      cdc: 'Rédiger un Cahier Des Charges (CDC) en partant d’une expression de besoins, afin de cadrer fonctionnellement un projet de solution web dans le respect des réglementations en vigueur et notamment le RGPD.',
      specs: 'Rédiger des spécifications techniques en analysant un CDC, afin de cadrer techniquement un projet de développement de solution web.',
      environnement: 'Déployer un environnement de travail en mettant en place les outils de versionnage, de partage et de collaboration/communication nécessaires, afin de cadrer opérationnellement un projet de développement de solution web.',
      maquette: 'Réaliser une maquette afin de permettre au client de valider la structure de la solution web en respectant les bonnes pratiques en termes d’ergonomie et d’accessibilité.',
      modele: 'Identifier les fonctionnalités à développer, en modélisant les divers éléments et leurs interconnexions, afin de structurer l’architecture de la solution web et de Base De Données (BDD).',
      presentation: 'Rédiger une présentation pour présenter les choix techniques, les maquettes, et le schéma de la solution web en argumentant les choix faits afin de permettre au client ou au décideur de valider la proposition de solution.'
    }
  },
  developper: {
    title: 'Développer une solution web',
    items: {
      prototype: 'Développer le prototype de la solution web afin de présenter l’architecture technique au client.',
      code: 'Rédiger le code de la solution en transcrivant les fonctionnalités du CDC, en respectant les normes d’accessibilité, d’ergonomie, de référencement, et la réglementation en vigueur afin de développer la solution web.',
      integration: 'Intégrer les différents éléments de la solution web en fonction des maquettes, en respectant les dernières normes des langages utilisés (HTML, CSS, JS, …).',
      frontend: 'Implémenter la partie « front-end » d’une solution web.',
      backend: 'Implémenter la logique et la base de données assurant la persistance des données côté serveur (le « back-end »).',
      auth: 'Implémenter des règles d’authentification, en respectant les bonnes pratiques en matière de sécurité, afin de sécuriser l’accès à une solution web.',
      tests: 'Implémenter un plan de tests en concevant les différents tests unitaires et d’intégration afin de vérifier que l’ensemble des fonctionnalités développées fonctionne bien séparément et à l’unisson.',
      deploy: 'Déployer une application web en utilisant un serveur afin de rendre l’application accessible aux utilisateurs.'
    }
  },
  qualite: {
    title: 'Déployer un système d’assurance qualité tout au long du cycle de vie d’une solution web',
    items: {
      doc_technique: 'Rédiger une documentation technique à destination des équipes parties prenantes en réalisant la documentation technique et fonctionnelle de la solution web, afin de garantir sa pérennité et son évolution future.',
      doc_utilisateur: 'Rédiger une documentation utilisateur pour apporter un support aux utilisateurs, afin de garantir l’autonomie et la satisfaction des utilisateurs de la solution web.',
      monitor: 'Monitorer le lancement d’une solution web, en recueillant les retours utilisateurs, afin d’évaluer la qualité de la solution web déployée.',
      amelioration: 'Identifier des améliorations qualitatives et de performance d’une solution web, en analysant les retours utilisateurs et les données d’analyse du trafic, afin d’améliorer la qualité et la disponibilité d’une solution web déployée.',
      ergonomie: 'Analyser la qualité de l’ergonomie et la qualité de l’accessibilité de la solution (normes, design, ergonomie, navigation, référencement, bonnes pratiques, etc.) pour identifier les axes d’amélioration.',
      argumentatif: 'Rédiger un document argumentatif en listant des propositions d’améliorations afin de faire valider des préconisations de développements correctifs d’une solution web.'
    }
  }
}

function buildRncpGroups (keysByBloc) {
  const out = []
  for (const [blocKey, keyList] of Object.entries(keysByBloc)) {
    const bloc = RNCP_BLOCS[blocKey]
    if (!bloc || !keyList?.length) continue
    const items = keyList.map((k) => bloc.items[k]).filter(Boolean)
    if (items.length) out.push({ blocTitle: bloc.title, items })
  }
  return out
}

const projects = [
  {
    title: 'CSS Generator',
    image: '/assets/spriteGenerator.png',
    repository: 'https://github.com/Mavrokai/CssGenerator-Sprite-',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Générateur de sprites et de classes CSS pour accélérer la préparation des assets.',
    longDescription:
      'Outil orienté productivité : génération de feuilles de styles et de sprites à partir de règles définies, avec mise en œuvre des bonnes pratiques d’intégration et structuration du code front.',
    context: 'Projet personnel',
    role: 'Conception & développement',
    rncpKeys: {
      cadrer: ['specs'],
      developper: ['prototype', 'code', 'integration', 'frontend', 'tests'],
      qualite: ['doc_technique', 'ergonomie']
    }
  },
  {
    title: 'Maquette - Introduction',
    image: '/assets/MaquetteIntro.png',
    repository: 'https://github.com/Mavrokai/Maquette-Introduction',
    tags: ['Intégration', 'Responsive'],
    description: 'Intégration fidèle d’une maquette avec un focus sur la structure et la hiérarchie visuelle.',
    longDescription:
      'Travail d’intégration à partir d’une maquette fournie : respect de la grille, hiérarchie des contenus et premières vérifications d’accessibilité et de lisibilité.',
    context: 'Entraînement intégration',
    role: 'Intégrateur',
    rncpKeys: {
      cadrer: ['maquette', 'presentation'],
      developper: ['integration', 'frontend'],
      qualite: ['ergonomie']
    }
  },
  {
    title: 'Racing JS',
    image: '/assets/racingJS.png',
    repository: 'https://github.com/Mavrokai/RacingJS',
    tags: ['JavaScript', 'DOM', 'Animations'],
    description: 'Jeu de course en JavaScript pour travailler la manipulation du DOM et les événements.',
    longDescription:
      'Prototype jouable mettant l’accent sur la logique métier côté navigateur, la gestion des événements et le rafraîchissement de l’interface, avec validation manuelle du comportement.',
    context: 'Projet pédagogique',
    role: 'Développeur front',
    rncpKeys: {
      cadrer: ['environnement'],
      developper: ['prototype', 'code', 'frontend', 'tests'],
      qualite: ['monitor']
    }
  },
  {
    title: 'Maquette Responsive',
    image: '/assets/MaquetteResponsive.png',
    repository: 'https://github.com/Mavrokai/Maquette-Responsive',
    tags: ['Responsive', 'Flexbox', 'Grid'],
    description: 'Intégration responsive multi-devices en respectant une charte graphique donnée.',
    longDescription:
      'Adaptation des mises en page aux différentes largeurs d’écran (Flexbox, Grid), cohérence visuelle et confort de lecture sur mobile et desktop.',
    context: 'Entraînement BTS SIO',
    role: 'Intégrateur',
    rncpKeys: {
      cadrer: ['maquette', 'cdc'],
      developper: ['integration', 'frontend'],
      qualite: ['ergonomie', 'amelioration']
    }
  },
  {
    title: 'My Cinema',
    image: '/assets/MyCinema.png',
    repository: 'https://github.com/Mavrokai/My-Cinema',
    tags: ['PHP', 'MySQL', 'CRUD'],
    description: 'Application de gestion de films avec consultation, filtres et gestion des données.',
    longDescription:
      'Application CRUD complète : modélisation des entités cinéma, requêtes SQL, interface utilisateur pour consulter et administrer les données, séparation des responsabilités côté serveur.',
    context: 'Projet d’initiation à la programmation web',
    role: 'Full-stack',
    rncpKeys: {
      cadrer: ['modele', 'specs'],
      developper: ['backend', 'frontend', 'code', 'deploy'],
      qualite: ['doc_technique']
    }
  },
  {
    title: 'My Meetic',
    image: '/assets/MyMeetic.png',
    repository: 'https://github.com/Mavrokai/My-Meetic',
    tags: ['PHP', 'POO', 'Authentification'],
    description: 'Plateforme de rencontre simplifiée avec gestion des profils et système d’inscription.',
    longDescription:
      'Site dynamique avec comptes utilisateurs, authentification sécurisée, profils et recherche : mise en œuvre du back-end, de la persistance en BDD et des écrans principaux.',
    context: 'Projet web PHP',
    role: 'Back-end & base de données',
    rncpKeys: {
      cadrer: ['modele'],
      developper: ['auth', 'backend', 'frontend', 'code'],
      qualite: ['doc_utilisateur', 'ergonomie']
    }
  },
  {
    title: 'My Twitter',
    image: '/assets/MyTwitter.png',
    repository: 'https://github.com/Mavrokai/My-Twitter',
    tags: ['PHP', 'MVC', 'Réseau social'],
    description: 'Reproduction simplifiée de Twitter : timeline, publication et gestion des comptes.',
    longDescription:
      'Architecture MVC, fil d’actualité, publications et gestion des utilisateurs : coordination front / back, règles d’accès et tests de flux entre les modules.',
    context: 'Projet structure MVC',
    role: 'Full-stack',
    rncpKeys: {
      cadrer: ['environnement', 'presentation'],
      developper: ['frontend', 'backend', 'auth', 'tests', 'integration'],
      qualite: ['argumentatif', 'monitor']
    }
  },
  {
    title: 'My Spotify',
    image: '/assets/mySpotify.png',
    repository: 'https://github.com/Mavrokai/My-Spotify',
    tags: ['PHP', 'API', 'UX'],
    description: 'Interface inspirée de Spotify pour travailler sur l’ergonomie et la gestion de playlists.',
    longDescription:
      'Interface riche type application musicale : parcours utilisateur, consommation d’API et soin du design pour une expérience fluide.',
    context: 'Projet personnel',
    role: 'Conception UI & développement',
    rncpKeys: {
      cadrer: ['maquette'],
      developper: ['integration', 'frontend', 'code'],
      qualite: ['ergonomie', 'amelioration', 'doc_utilisateur']
    }
  }
]

const activeProject = ref(null)

const modalRncpGroups = computed(() => {
  if (!activeProject.value?.rncpKeys) return []
  return buildRncpGroups(activeProject.value.rncpKeys)
})

function openModal (project) {
  activeProject.value = project
  document.body.style.overflow = 'hidden'
}

function closeModal () {
  activeProject.value = null
  document.body.style.overflow = ''
}

function onKeydown (e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
