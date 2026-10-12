<template>
  <section id="projets" class="bg-portfolio-dark-alt px-4 py-24 md:px-20">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <p class="mb-3 text-xs uppercase tracking-[0.35em] text-amber-300/80">
          Projets & réalisations
        </p>
        <h2 class="mb-3 text-3xl font-bold md:text-4xl animate-on-scroll animate-fade-in-down">
          Mettre en pratique
          <span class="text-amber-300">les compétences</span>
        </h2>
        <p class="mx-auto max-w-3xl text-sm text-gray-300/90 md:text-base">
          Chaque réalisation présente le contexte, ma démarche, les
          apprentissages obtenus, les axes d’amélioration et les compétences
          du titre RNCP réellement mobilisées.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="stagger-item animate-on-scroll relative flex flex-col overflow-hidden rounded-2xl border border-amber-400/15 bg-linear-to-b from-black/40 via-portfolio-dark/90 to-portfolio-dark-alt/90 transition-all hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              :src="project.image"
              :alt="`Aperçu du projet ${project.title}`"
              loading="lazy"
              width="640"
              height="352"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div class="absolute bottom-3 left-4 flex flex-wrap gap-2 text-[11px]">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-amber-400/40 bg-black/60 px-2 py-0.5 text-amber-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-3 p-5">
            <h3 class="text-lg font-semibold text-gray-50">
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-300/90">
              {{ project.description }}
            </p>

            <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-400">
              <span>{{ project.context }}</span>
              <span class="italic">Rôle : {{ project.role }}</span>
            </div>

            <div class="mt-auto pt-4">
              <button
                type="button"
                class="w-full rounded-full bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-portfolio-dark transition-all hover:bg-amber-500 hover:shadow-[0_5px_18px_rgba(251,191,36,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                @click="openModal(project, $event)"
              >
                Voir l’analyse du projet
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeProject"
        ref="modalContainer"
        class="fixed inset-0 z-100 flex items-end justify-center p-0 sm:items-center sm:p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
        :aria-describedby="modalDescriptionId"
        tabindex="-1"
        @keydown.tab="trapFocus"
      >
        <div
          class="absolute inset-0 bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
          @click="closeModal"
        />
        <div
          class="relative z-10 flex max-h-dvh w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-amber-400/20 bg-linear-to-b from-portfolio-dark to-black/90 shadow-[0_-8px_48px_rgba(0,0,0,0.85)] sm:max-h-[90vh] sm:rounded-2xl"
          @click.stop
        >
          <div class="flex shrink-0 items-center justify-between gap-3 border-b border-amber-400/15 px-4 py-3 sm:px-6">
            <h3 :id="modalTitleId" class="pr-2 text-lg font-semibold text-gray-50">
              {{ activeProject.title }}
            </h3>
            <button
              type="button"
              class="shrink-0 rounded-xl border border-amber-400/30 p-2 text-amber-300/90 transition hover:bg-amber-400/10 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label="Fermer l’analyse du projet"
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
                :alt="`Aperçu détaillé du projet ${activeProject.title}`"
                class="h-full w-full object-cover object-top"
              />
            </div>

            <div class="space-y-6 px-4 py-5 sm:px-6">
              <div>
                <p
                  :id="modalDescriptionId"
                  class="text-sm leading-relaxed text-gray-300/95"
                >
                  {{ activeProject.longDescription }}
                </p>
                <div class="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
                  <span>{{ activeProject.context }}</span>
                  <span class="italic">Rôle : {{ activeProject.role }}</span>
                </div>
              </div>

              <div class="grid gap-3 md:grid-cols-3">
                <div class="rounded-xl border border-amber-400/10 bg-black/25 p-4">
                  <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Démarche
                  </p>
                  <p class="text-sm leading-relaxed text-gray-300/95">
                    {{ activeProject.analysis.approach }}
                  </p>
                </div>
                <div class="rounded-xl border border-amber-400/10 bg-black/25 p-4">
                  <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Apprentissage
                  </p>
                  <p class="text-sm leading-relaxed text-gray-300/95">
                    {{ activeProject.analysis.learning }}
                  </p>
                </div>
                <div class="rounded-xl border border-amber-400/10 bg-black/25 p-4">
                  <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Piste d’amélioration
                  </p>
                  <p class="text-sm leading-relaxed text-gray-300/95">
                    {{ activeProject.analysis.nextStep }}
                  </p>
                </div>
              </div>

              <div
                v-if="activeProject.ergonomicAudit"
                class="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4"
              >
                <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Analyse ergonomique
                </p>
                <div class="grid gap-4 text-sm md:grid-cols-3">
                  <div>
                    <p class="mb-2 font-semibold text-gray-100">Points d’appui</p>
                    <ul class="list-disc space-y-1 pl-4 text-gray-300 marker:text-emerald-400">
                      <li v-for="item in activeProject.ergonomicAudit.strengths" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="mb-2 font-semibold text-gray-100">Limites constatées</p>
                    <ul class="list-disc space-y-1 pl-4 text-gray-300 marker:text-amber-400">
                      <li v-for="item in activeProject.ergonomicAudit.risks" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="mb-2 font-semibold text-gray-100">Actions prévues</p>
                    <ul class="list-disc space-y-1 pl-4 text-gray-300 marker:text-sky-400">
                      <li v-for="item in activeProject.ergonomicAudit.actions" :key="item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                  Acquis RNCP
                </p>
                <ul class="space-y-3 text-sm text-gray-300/95">
                  <li
                    v-for="group in modalRncpGroups"
                    :key="group.blockTitle"
                    class="rounded-xl border border-amber-400/10 bg-black/25 p-3"
                  >
                    <p class="mb-2 text-xs font-medium text-amber-200/90">
                      {{ group.blockTitle }}
                    </p>
                    <ul class="list-disc space-y-2 pl-4 marker:text-amber-400/60">
                      <li v-for="line in group.items" :key="line" class="leading-snug">
                        {{ line }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                  Preuves disponibles
                </p>
                <div class="grid gap-3 sm:grid-cols-2">
                  <a
                    v-for="evidence in activeProject.evidence"
                    :key="evidence.href"
                    :href="evidence.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    {{ evidence.label }}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

import { buildRncpGroups, projects } from '../data/portfolio'

const activeProject = ref(null)
const modalContainer = ref(null)
const modalTitleId = 'project-modal-title'
const modalDescriptionId = 'project-modal-description'
let previousActiveElement = null

const modalRncpGroups = computed(() =>
  activeProject.value ? buildRncpGroups(activeProject.value.rncpKeys) : []
)

async function openModal (project, event) {
  previousActiveElement = event?.currentTarget ?? document.activeElement
  activeProject.value = project
  document.body.style.overflow = 'hidden'
  await nextTick()
  modalContainer.value
    ?.querySelector('button[aria-label="Fermer l’analyse du projet"]')
    ?.focus()
}

function closeModal () {
  activeProject.value = null
  document.body.style.overflow = ''
  nextTick(() => previousActiveElement?.focus())
}

function onKeydown (event) {
  if (event.key === 'Escape' && activeProject.value) closeModal()
}

function trapFocus (event) {
  const focusable = modalContainer.value?.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (!focusable?.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>
