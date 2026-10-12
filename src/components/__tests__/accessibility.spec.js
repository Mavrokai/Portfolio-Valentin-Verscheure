import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'

import Contact from '../Contact.vue'
import Hero from '../Hero.vue'
import NavBar from '../NavBar.vue'
import Projects from '../Projects.vue'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('accessibilité et liens essentiels', () => {
  it('propose un lien de CV qui cible le fichier réellement publié', () => {
    const wrapper = mount(Hero)
    const cvLink = wrapper.get('a[download]')

    expect(cvLink.attributes('href')).toBe(
      'assets/CV_2025-03-24_Valentin%20_Verscheure%20.pdf'
    )
  })

  it('affiche les trois moyens de contact dans la carte de profil', () => {
    const wrapper = mount(Hero)
    const contactLinks = wrapper.findAll('[data-hero-contact]')

    expect(contactLinks.map((link) => link.attributes('href'))).toEqual([
      'mailto:valentin.verscheure@epitech.eu',
      'https://www.linkedin.com/in/valentin-verscheure',
      'https://github.com/Mavrokai'
    ])
    expect(contactLinks.map((link) => link.text())).toEqual([
      'Email',
      'LinkedIn',
      'GitHub'
    ])
  })

  it('place un portrait compact avant le texte sur mobile', () => {
    const wrapper = mount(Hero)
    const section = wrapper.get('section#accueil')
    const profileCard = wrapper.get('[data-profile-card]')
    const portrait = profileCard.get('img')
    const title = wrapper.get('h1')

    expect(section.classes()).toEqual(
      expect.arrayContaining(['py-8', 'md:py-24', 'gap-6', 'md:gap-12', 'justify-start', 'md:justify-center'])
    )
    expect(profileCard.classes()).toEqual(
      expect.arrayContaining(['order-first', 'md:order-none'])
    )
    expect(portrait.classes()).toEqual(
      expect.arrayContaining(['w-28', 'h-28', 'md:w-80', 'md:h-80'])
    )
    expect(title.classes()).toEqual(
      expect.arrayContaining(['text-3xl', 'md:text-6xl'])
    )
  })

  it('associe un libellé explicite à chaque champ de contact', () => {
    const wrapper = mount(Contact)

    expect(wrapper.get('label[for="contact-name"]').text()).toBe('Votre nom')
    expect(wrapper.get('#contact-name').attributes('autocomplete')).toBe('name')
    expect(wrapper.get('label[for="contact-email"]').text()).toBe('Votre email')
    expect(wrapper.get('#contact-email').attributes('autocomplete')).toBe('email')
    expect(wrapper.get('label[for="contact-message"]').text()).toBe('Votre message')
  })

  it('expose correctement l’état du menu mobile', async () => {
    const wrapper = mount(NavBar)
    const trigger = wrapper.get('button[aria-label="Menu mobile"]')

    expect(trigger.attributes('aria-controls')).toBe('mobile-navigation')
    expect(trigger.attributes('aria-expanded')).toBe('false')

    await trigger.trigger('click')

    expect(trigger.attributes('aria-expanded')).toBe('true')
    expect(wrapper.get('#mobile-navigation').isVisible()).toBe(true)
  })

  it('garde le focus dans la modale et le restaure à la fermeture', async () => {
    const wrapper = mount(Projects, { attachTo: document.body })
    const trigger = wrapper.findAll('button')[0]

    await trigger.trigger('click')
    await nextTick()

    const dialog = document.querySelector('[role="dialog"]')
    const closeButton = dialog.querySelector(
      'button[aria-label="Fermer l’analyse du projet"]'
    )

    expect(document.activeElement).toBe(closeButton)

    dialog.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
      cancelable: true
    }))

    expect(document.activeElement.textContent).toContain('Capture du résultat')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()

    expect(document.querySelector('[role="dialog"]')).toBeNull()
    expect(document.activeElement).toBe(trigger.element)
  })
})
