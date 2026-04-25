import { onMounted, onUnmounted, nextTick } from 'vue'

export function useAnimations() {
  let observer = null
  const cleanupFunctions = []

  const setupScrollAnimations = () => {
    nextTick(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            
            if (entry.target.classList.contains('stagger-item')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target)
              entry.target.style.animationDelay = `${index * 0.1}s`
            }
            
            if (entry.target.classList.contains('animate-zoom-in')) {
              entry.target.style.animation = 'zoom-in 0.8s ease-out'
            }
          }
        })
      }, observerOptions)

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el)
      })
    })
  }

  const createParticles = () => {
    nextTick(() => {
      const particleContainer = document.createElement('div')
      particleContainer.className = 'floating-particles'
      document.body.appendChild(particleContainer)

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 8 + 's'
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's'
        particle.style.width = (Math.random() * 6 + 2) + 'px'
        particle.style.height = particle.style.width
        particle.style.opacity = Math.random() * 0.5 + 0.3
        particleContainer.appendChild(particle)
      }
    })
  }

const setupSmoothScroll = () => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        anchor.classList.add('animate-shake')
        setTimeout(() => anchor.classList.remove('animate-shake'), 500)
        
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    document.addEventListener('click', handleClick)
    cleanupFunctions.push(() => document.removeEventListener('click', handleClick))
  }

  const setupTextReveal = () => {
    const handleLoad = () => {
      nextTick(() => {
        const textElements = document.querySelectorAll('.text-reveal')
        textElements.forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '1'
          }, index * 200)
        })
      })
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      cleanupFunctions.push(() => window.removeEventListener('load', handleLoad))
    }
  }

  const setupLogoHeartbeat = () => {
    nextTick(() => {
      const logo = document.querySelector('nav span')
      if (!logo) return

      const interval = setInterval(() => {
        logo.classList.add('animate-heartbeat')
        setTimeout(() => logo.classList.remove('animate-heartbeat'), 1500)
      }, 3000)

      cleanupFunctions.push(() => clearInterval(interval))
    })
  }

  const setupProfileParallax = () => {
    nextTick(() => {
      const profileImg = document.querySelector('#accueil img')
      if (!profileImg) return

      const handleMouseMove = (e) => {
        const rect = profileImg.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        profileImg.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
      }

      window.addEventListener('mousemove', handleMouseMove)
      cleanupFunctions.push(() => window.removeEventListener('mousemove', handleMouseMove))
    })
  }

  onMounted(() => {
    setupScrollAnimations()
    createParticles()
    setupSmoothScroll()
    setupTextReveal()
    setupLogoHeartbeat()
    setupProfileParallax()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
    cleanupFunctions.forEach(cleanup => {
      if (typeof cleanup === 'function') cleanup()
    })
  })
}
