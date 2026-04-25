<template>
  <section id="competences" class="relative py-24 px-4 md:px-20 bg-portfolio-dark">
    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <p class="text-xs uppercase tracking-[0.35em] text-amber-300/80 mb-3">
          Compétences Web@cademie
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-3 animate-on-scroll animate-fade-in-down">
          Un socle technique
          <span class="text-amber-300">solide</span>
        </h2>
        <p class="max-w-2xl mx-auto text-sm md:text-base text-gray-300/90">
          Des compétences couvrant tout le cycle de vie d&apos;une application :
          front-end, back-end, bases de données, outils DevOps et écosystème
          Odoo pour les SI des organisations.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(group, gIndex) in groupedSkills"
          :key="gIndex"
          class="p-6 rounded-2xl bg-gradient-to-b from-black/40 to-portfolio-dark-alt/80 border border-amber-400/15 stagger-item animate-on-scroll"
        >
          <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            <span class="inline-block h-1.5 w-6 rounded-full bg-amber-400" />
            {{ group.label }}
          </h3>

          <div class="space-y-4">
            <div
              v-for="(skill, index) in group.items"
              :key="index"
              class="flex items-start gap-3"
            >
              <i
                :class="[
                  skill.icon,
                  skill.size ?? 'text-xl',
                  'mt-1 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]'
                ]"
              ></i>
              <div>
                <p class="text-sm font-semibold text-gray-100">
                  {{ skill.name }}
                </p>
                <p v-if="skill.description" class="text-xs text-gray-300/90 mt-0.5">
                  {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const groupedSkills = [
  {
    label: 'Front-end & UX',
    items: [
      { name: 'HTML5', icon: 'devicon-html5-plain', description: 'Structure sémantique et accessible' },
      { name: 'CSS3 / SASS', icon: 'devicon-css3-plain', description: 'Mise en page moderne, responsive design' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', description: 'Design system cohérent et rapide' },
      { name: 'JavaScript / Vue / React', icon: 'devicon-javascript-plain', description: 'Interfaces dynamiques et SPA' }
    ]
  },
  {
    label: 'Back-end & Données',
    items: [
      { name: 'PHP', icon: 'devicon-php-plain', description: 'Logique métier, APIs et MVC' },
      { name: 'Laravel / Symfony', icon: 'devicon-laravel-plain', description: 'Applications structurées et testables' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain', description: 'Scripts, outils et services backend' },
      { name: 'MySQL & SQL', icon: 'devicon-mysql-plain-wordmark', size: 'text-3xl', description: 'Modélisation, requêtes et optimisation' }
    ]
  },
  {
    label: 'Outils & Environnement',
    items: [
      { name: 'Odoo & Odoo.sh', icon: 'devicon-odoo-plain', description: 'Personnalisation d’ERP pour les organisations' },
      { name: 'Docker', icon: 'devicon-docker-plain', size: 'text-2xl', description: 'Environnements isolés et reproductibles' },
      { name: 'Git / Gitea', icon: 'devicon-gitea-plain', description: 'Gestion de versions et travail en équipe' }
    ]
  }
]
</script>
