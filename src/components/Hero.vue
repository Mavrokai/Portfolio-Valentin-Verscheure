<template>
  <section
    id="accueil"
    class="relative flex flex-col items-center justify-start gap-6 overflow-hidden px-4 py-8 md:min-h-[90vh] md:flex-row md:items-center md:justify-center md:gap-12 md:px-20 md:py-24"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -left-32 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div
        class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />
    </div>

    <div class="relative z-20 order-2 w-full space-y-4 animate-fade-in-left md:order-none md:w-1/2 md:space-y-8">
      <div class="inline-flex max-w-full items-center gap-2 rounded-full bg-black/40 px-4 py-1 text-xs font-medium text-amber-200 ring-1 ring-amber-400/40 shadow-[0_0_25px_rgba(251,191,36,0.4)]">
        <span class="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
        <span class="min-w-0 leading-snug">
          Étudiant Web@cademie by Epitech Lille • Alternant DKGroup / DKAgence
        </span>
      </div>

      <div class="space-y-2 md:space-y-3">
        <p class="text-sm uppercase tracking-[0.3em] text-amber-200/80">
          Valentin Verscheure
        </p>
        <h1 class="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
          <span
            class="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent"
          >
            Je conçois,
          </span>
          <br />
          <span class="text-gray-100">
            développe et déploie
          </span>
          <br />
          <span class="text-amber-300">
            des solutions web pour les organisations.
          </span>
        </h1>
      </div>

      <p class="max-w-xl text-sm text-gray-300/90 md:text-lg">
        Entre les exigences de la Web@cademie by Epitech Lille et celles de mon
        alternance chez DKGroup / DKAgence, je mets en avant une approche
        structurée&nbsp;: analyse du besoin, conception, développement, tests
        et documentation pour livrer des applications fiables et maintenables.
      </p>

      <div class="flex flex-wrap items-center gap-3 md:gap-4">
        <button
          type="button"
          @click="scrollToProjects"
          class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-portfolio-dark shadow-[0_15px_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(251,191,36,0.8)] hover:from-amber-300 hover:via-amber-500 hover:to-amber-400 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 active:scale-95 active:translate-y-0 cursor-pointer z-20"
        >
          <span class="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-200 group-hover:opacity-20" />
          <span class="relative">Voir mes projets</span>
        </button>
        <a
          href="assets/CV_2025-03-24_Valentin%20_Verscheure%20.pdf"
          download="CV_Valentin_Verscheure.pdf"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-black/30 px-6 py-3 text-sm font-medium text-amber-200 hover:bg-amber-400/10 hover:border-amber-300 transition-all"
        >
          Télécharger mon CV
        </a>
      </div>

      <div class="flex flex-wrap gap-2 pt-2 text-xs text-gray-300/80 md:gap-3">
        <span class="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1">
          Analyse & conception (UML, MCD, cas d&apos;utilisation)
        </span>
        <span class="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1">
          Développement Web (PHP, JS, frameworks, Odoo)
        </span>
        <span class="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1">
          Bases de données & SQL (MySQL)
        </span>
      </div>
    </div>

    <div
      data-profile-card
      class="relative z-10 order-first flex w-full justify-center animate-fade-in-right md:order-none md:w-1/2"
    >
      <div
        class="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-b from-portfolio-dark/40 via-black/60 to-portfolio-dark-alt/80 p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] md:w-auto"
      >
        <div class="relative overflow-hidden rounded-[2.3rem] bg-gradient-to-b from-black/70 to-portfolio-dark-alt/80 p-4 md:p-6">
          <div
            class="pointer-events-none absolute inset-x-10 -top-6 mx-auto h-10 rounded-full bg-gradient-to-r from-amber-400/20 via-fuchsia-400/10 to-sky-400/20 blur-2xl"
          />

          <!-- Mobile: photo + texte empilés. Desktop: inchangé. -->
          <div class="relative z-10 flex max-md:flex-col max-md:items-center max-md:gap-3 max-md:text-center md:block md:text-left">
            <img
              :src="profileImage"
              alt="Photo de Valentin Verscheure"
              width="549"
              height="822"
              class="h-28 w-28 shrink-0 rounded-3xl border-4 border-amber-400/60 object-cover object-top max-md:mx-auto md:h-80 md:w-80 md:animate-float"
            />
            <div class="w-full space-y-2 text-sm md:mt-6 md:text-lg">
              <p class="font-semibold leading-snug text-amber-200 md:text-xl">
                Objectif : devenir développeur Full Stack orienté métiers.
              </p>
              <p class="hidden leading-relaxed text-gray-300 md:block md:text-lg">
                Je mets en pratique au quotidien mes compétences de développeur web
                au sein de DKGroup / DKAgence : applications métiers, intégration
                de solutions, outils internes et portails web.
              </p>
            </div>
          </div>

          <div class="relative z-10 mt-3 grid grid-cols-3 gap-2 border-t border-amber-400/15 pt-3 md:mt-5 md:flex md:flex-wrap md:justify-start md:pt-4">
            <a
              data-hero-contact
              href="mailto:valentin.verscheure@epitech.eu"
              class="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-400/30 bg-black/25 px-2 py-2.5 text-[11px] font-medium text-amber-200 transition hover:border-amber-300 hover:bg-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:gap-2 sm:px-3 sm:text-xs md:justify-start"
            >
              <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              data-hero-contact
              href="https://www.linkedin.com/in/valentin-verscheure"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-400/30 bg-black/25 px-2 py-2.5 text-[11px] font-medium text-amber-200 transition hover:border-amber-300 hover:bg-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:gap-2 sm:px-3 sm:text-xs md:justify-start"
            >
              <svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              data-hero-contact
              href="https://github.com/Mavrokai"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-400/30 bg-black/25 px-2 py-2.5 text-[11px] font-medium text-amber-200 transition hover:border-amber-300 hover:bg-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:gap-2 sm:px-3 sm:text-xs md:justify-start"
            >
              <svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const profileImage = 'assets/Valentin.webp'

const scrollToProjects = () => {
  const target = document.getElementById('projets')
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
