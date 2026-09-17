<template>
  <div
    class="min-h-screen bg-portfolio-dark text-gray-100 bg-gradient-to-b from-portfolio-dark via-[#241011] to-portfolio-dark-alt"
  >
    <div class="relative">
      <a
        href="#main-content"
        class="fixed left-4 top-4 z-100 -translate-y-24 rounded-full bg-amber-400 px-4 py-2 font-semibold text-portfolio-dark transition-transform focus:translate-y-0"
      >
        Aller au contenu principal
      </a>
      <NavBar />
      <main id="main-content" class="pt-20 md:pt-24" tabindex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Progression />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import NavBar from './components/NavBar.vue'
import Progression from './components/Progression.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import { useAnimations } from './composables/useAnimations'

useAnimations()
</script>
