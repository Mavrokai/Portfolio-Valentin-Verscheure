<template>
  <section id="contact" class="py-24 px-4 md:px-20 bg-portfolio-dark">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-[0.35em] text-amber-300/80 mb-3">
          Me contacter
        </p>
        <h2 class="text-3xl md:text-4xl font-bold mb-3 animate-on-scroll animate-fade-in-down">
          Travaillons
          <span class="text-amber-300">ensemble</span>
        </h2>
        <p class="max-w-xl mx-auto text-sm md:text-base text-gray-300/90">
          Une idée de projet ou une question sur mon profil&nbsp;? N&apos;hésitez
          pas à me contacter.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 rounded-3xl bg-gradient-to-b from-black/40 to-portfolio-dark-alt/80 border border-amber-400/15 p-6 md:p-8 shadow-[0_18px_55px_rgba(0,0,0,0.85)]">
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <svg
              class="w-8 h-8 text-amber-400 transition-all hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:valentin.verscheure@epitech.eu"
              class="hover:text-amber-400 transition-colors text-sm"
            >
              valentin.verscheure@epitech.eu
            </a>
          </div>

          <div class="flex items-center gap-4">
            <svg
              class="w-8 h-8 text-amber-400 transition-all hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <a
              href="/assets/CV_2025-03-24_Valentin_Verscheure.pdf"
              download="CV_Valentin_Verscheure.pdf"
              class="hover:text-amber-400 transition-colors text-sm"
            >
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              class="w-full px-4 py-3 bg-portfolio-dark-alt/80 rounded-xl border border-amber-400/20 focus:border-amber-400 outline-none transition-all focus:scale-[1.01] focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            />
          </div>

          <div>
            <input
              v-model="form.email"
              type="email"
              name="email"
              placeholder="Votre email"
              required
              class="w-full px-4 py-3 bg-portfolio-dark-alt/80 rounded-xl border border-amber-400/20 focus:border-amber-400 outline-none transition-all focus:scale-[1.01] focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            />
          </div>

          <div>
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Votre message"
              required
              class="w-full px-4 py-3 bg-portfolio-dark-alt/80 rounded-xl border border-amber-400/20 focus:border-amber-400 outline-none transition-all focus:scale-[1.01] focus:shadow-[0_0_25px_rgba(251,191,36,0.35)]"
            ></textarea>
          </div>

          <div v-if="success" class="text-green-400 text-center text-sm">
            Message envoyé avec succès !
          </div>

          <div v-if="error" class="text-red-400 text-center text-sm">
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-portfolio-dark font-semibold hover:bg-amber-500 transition-all relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(251,191,36,0.6)] active:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
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
