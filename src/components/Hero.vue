<template>
  <section
    id="accueil"
    class="relative min-h-[90vh] px-4 md:px-20 py-24 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -left-32 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div
        class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />
    </div>

    <div class="relative z-10 md:w-1/2 space-y-8 animate-fade-in-left">
      <div class="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1 text-xs font-medium text-amber-200 ring-1 ring-amber-400/40 shadow-[0_0_25px_rgba(251,191,36,0.4)]">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Étudiant Web@cademie by Epitech Lille • Alternant DKGroup / DKAgence
      </div>

      <div class="space-y-3">
        <p class="text-sm uppercase tracking-[0.3em] text-amber-200/80">
          Valentin Verscheure
        </p>
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
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

      <p class="max-w-xl text-base md:text-lg text-gray-300/90">
        Entre les exigences de la Web@cademie by Epitech Lille et celles de mon
        alternance chez DKGroup / DKAgence, je mets en avant une approche
        structurée&nbsp;: analyse du besoin, conception, développement, tests
        et documentation pour livrer des applications fiables et maintenables.
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <button
          type="button"
          @click="scrollToProjects"
          class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 px-7 py-3.5 text-sm font-semibold text-portfolio-dark shadow-[0_15px_40px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(251,191,36,0.8)] hover:from-amber-300 hover:via-amber-500 hover:to-amber-400 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 active:scale-95 active:translate-y-0 cursor-pointer z-20"
        >
          <span class="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-200 group-hover:opacity-20" />
          <span class="relative">Voir mes projets</span>
        </button>
        <a
          href="/assets/CV_2025-03-24_Valentin_Verscheure.pdf"
          download="CV_Valentin_Verscheure.pdf"
          class="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-black/30 px-6 py-3 text-sm font-medium text-amber-200 hover:bg-amber-400/10 hover:border-amber-300 transition-all"
        >
          Télécharger mon CV
        </a>
      </div>

      <div class="flex flex-wrap gap-3 pt-2 text-xs text-gray-300/80">
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

    <div class="relative md:w-1/2 flex justify-center animate-fade-in-right">
      <div
        class="relative rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-b from-portfolio-dark/40 via-black/60 to-portfolio-dark-alt/80 p-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <div class="relative rounded-[2.3rem] bg-gradient-to-b from-black/70 to-portfolio-dark-alt/80 p-6">
          <div
            class="absolute inset-x-10 -top-6 mx-auto h-10 rounded-full bg-gradient-to-r from-amber-400/20 via-fuchsia-400/10 to-sky-400/20 blur-2xl"
          />
          <img
            src="/assets/Valentin.webp"
            alt="Photo de Valentin Verscheure"
            class="relative z-10 rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-amber-400/60 animate-float"
          />
          <div class="mt-6 space-y-2 text-base md:text-lg">
            <p class="text-amber-200 font-semibold md:text-xl">
              Objectif : devenir développeur Full Stack orienté métiers.
            </p>
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
              Je mets en pratique au quotidien mes compétences de développeur web
              au sein de DKGroup / DKAgence : applications métiers, intégration
              de solutions, outils internes et portails web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
