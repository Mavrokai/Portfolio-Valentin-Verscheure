<template>
  <div
    class="min-h-screen bg-portfolio-dark text-gray-100 bg-gradient-to-b from-portfolio-dark via-[#241011] to-portfolio-dark-alt"
  >
    <div class="relative">
      <NavBar />
      <main class="pt-20 md:pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
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
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import { useAnimations } from './composables/useAnimations'

useAnimations()
</script>
