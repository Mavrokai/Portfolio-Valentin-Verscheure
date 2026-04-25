import { ref } from 'vue'
import emailjs from '@emailjs/browser'

export function useEmail() {
  const isLoading = ref(false)
  const error = ref(null)
  const success = ref(false)

  const sendEmail = async (formData) => {
    isLoading.value = true
    error.value = null
    success.value = false

    try {
      const params = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      }

      await emailjs.send("service_lmf8hyk", "template_cxqeb2u", params)
      
      success.value = true
      return true
    } catch (err) {
      error.value = err.message || 'Une erreur est survenue'
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
