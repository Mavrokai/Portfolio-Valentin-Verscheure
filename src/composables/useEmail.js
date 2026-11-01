import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_lmf8hyk'
const TEMPLATE_ID = 'template_cxqeb2u'
const PUBLIC_KEY = 'l_ce7qtvjadGdWq3w'

export function useEmail() {
  const isLoading = ref(false)
  const error = ref(null)
  const success = ref(false)

  const sendEmail = async (formData) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      // Aliases couvrant les noms de variables les plus courants côté EmailJS
      const params = {
        from_name: formData.name,
        user_name: formData.name,
        name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        user_email: formData.email,
        email: formData.email,
        message: formData.message
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY
      })

      success.value = true
      return true
    } catch (err) {
      const detail = err?.text || err?.message || ''
      error.value = detail
        ? `Envoi impossible : ${detail}`
        : 'Une erreur est survenue lors de l’envoi. Vérifiez la configuration EmailJS (domaine autorisé, service et template).'
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    success,
    sendEmail
  }
}
