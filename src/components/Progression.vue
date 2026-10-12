<template>
  <section
    id="progression"
    class="relative border-y border-amber-400/10 bg-portfolio-dark px-4 py-24 md:px-20"
  >
    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <p class="mb-3 text-xs uppercase tracking-[0.35em] text-amber-300/80">
          Auto-évaluation RNCP
        </p>
        <h2 class="mb-3 text-3xl font-bold md:text-4xl animate-on-scroll animate-fade-in-down">
          Ma progression
          <span class="text-amber-300">professionnelle</span>
        </h2>
        <p class="mx-auto max-w-3xl text-sm text-gray-300/90 md:text-base">
          Développement : autonome. Cadrage et qualité : en progression.
          Cette auto-évaluation relie mes réalisations aux acquis déjà
          mobilisés et aux efforts nécessaires pour atteindre le niveau suivant.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <article
          v-for="item in portfolioProfile.progression"
          :key="item.key"
          class="stagger-item animate-on-scroll flex flex-col rounded-2xl border border-amber-400/15 bg-gradient-to-b from-black/40 to-portfolio-dark-alt/80 p-6"
        >
          <div class="mb-5 flex items-start justify-between gap-4">
            <span class="text-3xl font-black text-amber-400/35">
              {{ item.number }}
            </span>
            <span
              class="rounded-full border px-3 py-1 text-xs font-semibold"
              :class="levelClass(item.level)"
            >
              {{ item.level }}
            </span>
          </div>

          <h3 class="mb-3 text-lg font-semibold text-amber-300">
            {{ rncpBlocks[item.key].title }}
          </h3>
          <p class="text-sm leading-relaxed text-gray-300/95">
            {{ item.summary }}
          </p>

          <div class="mt-6">
            <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Réalisations mobilisées
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="project in item.evidence"
                :key="project"
                class="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200"
              >
                {{ project }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <aside class="mt-10 rounded-2xl border border-amber-400/20 bg-black/30 p-6">
        <div class="mb-5 max-w-3xl">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            Preuves à compléter
          </p>
          <h3 class="text-xl font-semibold text-gray-100">
            Compétences encore insuffisamment documentées
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-300/90">
            Ces compétences font partie du titre, mais les dépôts actuellement
            publics ne contiennent pas encore de livrable permettant de les
            démontrer directement. Elles constituent ma feuille de route.
          </p>
        </div>

        <ul class="grid gap-3 md:grid-cols-2">
          <li
            v-for="gap in portfolioProfile.gaps"
            :key="gap.key"
            class="rounded-xl border border-amber-400/10 bg-portfolio-dark-alt/60 p-4"
          >
            <p class="text-sm font-semibold text-amber-200">
              {{ gap.title }}
            </p>
            <p class="mt-1 text-xs leading-relaxed text-gray-400">
              {{ gap.action }}
            </p>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { portfolioProfile, rncpBlocks } from '../data/portfolio'

function levelClass (level) {
  return level === 'Autonome'
    ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
    : 'border-amber-400/40 bg-amber-400/10 text-amber-200'
}
</script>
