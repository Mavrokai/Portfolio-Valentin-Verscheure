<template>
  <section id="apropos" class="py-24 px-4 md:px-20 bg-portfolio-dark-alt/80">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <p class="text-xs uppercase tracking-[0.35em] text-amber-300/80 mb-3">
          À propos
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-3 animate-on-scroll animate-fade-in-down">
          Un profil orienté
          <span class="text-amber-300">solutions web</span>
        </h2>
        <p class="max-w-2xl mx-auto text-sm md:text-base text-gray-300/90">
          Formé à la Web@cademie by Epitech Lille et en alternance chez
          DKGroup / DKAgence, je construis des applications qui répondent à de
          vrais besoins métiers&nbsp;: comprendre le contexte, modéliser,
          développer, sécuriser et maintenir.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in aboutItems"
          :key="index"
          class="relative p-6 rounded-2xl bg-gradient-to-b from-black/40 to-portfolio-dark-alt/90 border border-amber-400/15 stagger-item animate-on-scroll transition-all hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
        >
          <div
            class="absolute inset-x-6 -top-[1px] h-[2px] rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300"
          />
          <h3 class="text-xl text-amber-300 mb-3 font-semibold flex items-center gap-2">
            <span class="inline-block h-2 w-2 rounded-full bg-amber-400" />
            {{ item.title }}
          </h3>
          <p class="text-gray-200 text-sm leading-relaxed">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutItems = [
  {
    title: 'Mon parcours',
    content:
      "Passionné par le développement web depuis plus de 2 ans, j'ai rejoint la Web@cademie by Epitech Lille, une formation intensive orientée projet. Mon alternance chez DKGroup / DKAgence me permet de confronter chaque compétence à des besoins réels d'entreprises."
  },
  {
    title: 'Ma philosophie',
    content:
      "Je défends un développement centré sur l'utilisateur et la robustesse du code : comprendre le métier, cadrer le besoin, itérer avec le client, tester et livrer des applications fiables, lisibles et maintenables."
  },
  {
    title: 'Ce que je recherche',
    content:
      "Des projets où je peux continuer à faire grandir mes compétences de développeur web : applications métiers, intégration d'API, ERP (Odoo), outils internes, tout en approfondissant les bonnes pratiques professionnelles."
  }
]
</script>
