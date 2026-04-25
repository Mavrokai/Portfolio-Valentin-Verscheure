<template>
  <nav
    :class="[
      'fixed top-0 inset-x-0 z-50 h-20 flex items-center justify-between px-4 md:px-20 transition-all backdrop-blur-xl border-b border-amber-400/10 bg-gradient-to-b from-black/40 to-portfolio-dark/80 shadow-[0_10px_40px_rgba(0,0,0,0.6)]',
      { 'scrolled': isScrolled }
    ]"
  >
    <div class="flex items-center gap-3">
      <span
        class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-2xl font-bold text-amber-400 ring-1 ring-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
      >
        V.V
      </span>
      <div class="hidden sm:flex flex-col leading-tight">
        <span class="text-sm font-semibold tracking-wide text-amber-300">
          Valentin Verscheure
        </span>
        <span class="text-[11px] uppercase tracking-[0.2em] text-gray-400">
          Web@cademie by Epitech Lille • Alternance DKGroup / DKAgence
        </span>
      </div>
    </div>

    <div class="hidden md:flex gap-8 text-sm font-medium">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.href"
        class="group relative text-gray-300 hover:text-amber-300 transition-all hover:-translate-y-0.5"
      >
        <span>{{ link.label }}</span>
        <span
          class="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 group-hover:w-full"
        />
      </a>
    </div>

    <button
      @click="toggleMobileMenu"
      class="md:hidden p-2 rounded-xl border border-amber-400/30 bg-black/40 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
      aria-label="Menu mobile"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </nav>

  <div
    v-show="isMobileMenuOpen"
    class="md:hidden fixed top-20 w-full bg-portfolio-dark/95 backdrop-blur-xl border-b border-amber-400/10 animate-fade-in-down"
  >
    <div class="flex flex-col p-4 gap-4 border-t border-amber-400/20">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.href"
        @click="closeMobileMenu"
        class="py-2 hover:text-amber-400"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const links = [
  { id: 1, href: '#accueil', label: 'Accueil' },
  { id: 2, href: '#apropos', label: 'À propos' },
  { id: 3, href: '#competences', label: 'Compétences' },
  { id: 4, href: '#projets', label: 'Projets' },
  { id: 5, href: '#contact', label: 'Contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
