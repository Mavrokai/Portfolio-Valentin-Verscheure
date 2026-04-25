<template>
  <footer
    class="relative z-10 mt-auto border-t border-amber-400/10 bg-[rgba(27,11,10,0.98)] shadow-[0_-4px_30px_rgba(251,191,36,0.2)] transition-all"
    role="contentinfo"
  >
    <div class="max-w-4xl mx-auto px-4 md:px-20 py-10 md:py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">

        <div class="flex items-center gap-4 text-center md:text-left">
          <span
            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 text-sm font-bold text-amber-400 ring-1 ring-amber-400/50 shadow-[0_0_24px_rgba(251,191,36,0.35)]"
          >
            V.V
          </span>
          <div class="flex flex-col gap-0.5">
            <span class="text-sm font-semibold tracking-wide text-gray-100">
              Valentin Verscheure
            </span>
            <span class="text-xs text-gray-400">
              Portfolio — développement web
            </span>
          </div>
        </div>

        <p class="text-sm text-gray-300 text-center max-w-md leading-relaxed">
          &copy; {{ new Date().getFullYear() }} — Réalisé avec
          <span class="font-medium text-amber-300">Vue.js</span>
          et
          <span class="font-medium text-amber-300">Tailwind CSS</span>
        </p>

        <div class="flex items-center gap-2">
          <a
            href="https://github.com/valentinverscheure"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/25 bg-black/30 text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/valentin-verscheure"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/25 bg-black/30 text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:valentin.verscheure@epitech.eu"
            aria-label="Email"
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/25 bg-black/30 text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>
