<template>
  <section id="contact" class="bg-portfolio-dark px-4 py-24 md:px-20">
    <div class="mx-auto max-w-3xl">
      <div class="mb-10 text-center">
        <p class="mb-3 text-xs uppercase tracking-[0.35em] text-amber-300/80">
          Me contacter
        </p>
        <h2 class="mb-3 text-3xl font-bold md:text-4xl animate-on-scroll animate-fade-in-down">
          Travaillons
          <span class="text-amber-300">ensemble</span>
        </h2>
        <p class="mx-auto max-w-xl text-sm text-gray-300/90 md:text-base">
          Une idée de projet ou une question sur mon profil&nbsp;? N&apos;hésitez
          pas à me contacter.
        </p>
      </div>

      <div class="rounded-3xl border border-amber-400/15 bg-gradient-to-b from-black/40 to-portfolio-dark-alt/80 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.85)] md:p-8">
        <div class="mb-6 flex flex-wrap items-center justify-center gap-3 border-b border-amber-400/10 pb-6 sm:justify-start">
          <a
            href="mailto:valentin.verscheure@epitech.eu"
            class="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-black/25 px-3 py-2 text-sm text-amber-100 transition hover:border-amber-300 hover:bg-amber-400/10"
          >
            <svg
              class="h-4 w-4 shrink-0 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            valentin.verscheure@epitech.eu
          </a>

          <a
            href="assets/CV_2025-03-24_Valentin%20_Verscheure%20.pdf"
            download="CV_Valentin_Verscheure.pdf"
            class="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-black/25 px-3 py-2 text-sm text-amber-100 transition hover:border-amber-300 hover:bg-amber-400/10"
          >
            <svg
              class="h-4 w-4 shrink-0 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Télécharger mon CV (PDF)
          </a>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="contact-name" class="sr-only">Votre nom</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Votre nom"
              autocomplete="name"
              required
              class="w-full rounded-xl border border-amber-400/20 bg-portfolio-dark-alt/80 px-4 py-3 outline-none transition-all focus:scale-[1.01] focus:border-amber-400 focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            />
          </div>

          <div>
            <label for="contact-email" class="sr-only">Votre email</label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="Votre email"
              autocomplete="email"
              required
              class="w-full rounded-xl border border-amber-400/20 bg-portfolio-dark-alt/80 px-4 py-3 outline-none transition-all focus:scale-[1.01] focus:border-amber-400 focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            />
          </div>

          <div>
            <label for="contact-message" class="sr-only">Votre message</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Votre message"
              required
              class="w-full rounded-xl border border-amber-400/20 bg-portfolio-dark-alt/80 px-4 py-3 outline-none transition-all focus:scale-[1.01] focus:border-amber-400 focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            ></textarea>
          </div>

          <div
            v-if="success"
            class="text-center text-sm text-green-400"
            role="status"
            aria-live="polite"
          >
            Message envoyé avec succès !
          </div>

          <div
            v-if="error"
            class="text-center text-sm text-red-400"
            role="alert"
          >
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="relative w-full overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 px-6 py-3 font-semibold text-portfolio-dark transition-all hover:-translate-y-1 hover:bg-amber-500 hover:shadow-[0_12px_30px_rgba(251,191,36,0.6)] active:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {{ isLoading ? 'Envoi en cours...' : 'Envoyer mon message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useEmail } from '../composables/useEmail'

const { isLoading, error, success, sendEmail } = useEmail()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  const result = await sendEmail(form.value)
  if (result) {
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>
