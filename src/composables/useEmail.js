import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_n61vxrf'
const TEMPLATE_ID = 'template_l84cbzf'
const PUBLIC_KEY = 'LjDX-Ppqsw11gIMpa'

export function useEmail() {
  const isLoading = ref(false)
  const error = ref(null)
  const success = ref(false)

  const sendEmail = async (formData) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      // Variables attendues par le template EmailJS "Contact Us"
      const params = {
        title: `Message de ${formData.name}`,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        // Alias de compatibilité
        from_name: formData.name,
        user_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        user_email: formData.email
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY
      })

      success.value = true
      return true
    } catch (err) {
      const detail = String(err?.text || err?.message || '')
      if (/invalid grant|reconnect your outlook/i.test(detail)) {
        error.value =
          'Le compte Outlook lié à EmailJS a expiré. Reconnecte Outlook dans le dashboard EmailJS (Email Services), puis réessaie.'
      } else if (detail) {
        error.value = `Envoi impossible : ${detail}`
      } else {
        error.value =
          'Une erreur est survenue lors de l’envoi. Vérifie EmailJS (service, template, domaines autorisés).'
      }
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
