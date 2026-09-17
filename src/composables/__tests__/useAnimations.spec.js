import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, nextTick } from 'vue'

import { useAnimations } from '../useAnimations'

const Harness = defineComponent({
  setup () {
    useAnimations()
  },
  template: `
    <div>
      <nav><span>V.V</span></nav>
      <section id="accueil"><img alt="profil"></section>
      <div class="animate-on-scroll"></div>
    </div>
  `
})

class IntersectionObserverMock {
  observe = vi.fn()
  disconnect = vi.fn()
}

describe('useAnimations', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    })))
  })

  afterEach(() => {
    document.querySelectorAll('.floating-particles').forEach((element) => element.remove())
    vi.unstubAllGlobals()
  })

  it('supprime les particules ajoutées lorsque l’application est démontée', async () => {
    const wrapper = mount(Harness)
    await nextTick()

    expect(document.querySelector('.floating-particles')).not.toBeNull()

    wrapper.unmount()

    expect(document.querySelector('.floating-particles')).toBeNull()
  })

  it('désactive les animations décoratives si le mouvement est réduit', async () => {
    window.matchMedia = vi.fn(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }))

    const wrapper = mount(Harness)
    await nextTick()

    expect(document.querySelector('.floating-particles')).toBeNull()

    wrapper.unmount()
  })
})
