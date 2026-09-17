import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Progression from '../Progression.vue'

describe('Progression', () => {
  it('rend l’auto-évaluation des trois blocs RNCP', () => {
    const wrapper = mount(Progression)

    expect(wrapper.get('section#progression').exists()).toBe(true)
    expect(wrapper.findAll('article')).toHaveLength(3)
    expect(wrapper.text()).toContain('Développement : autonome')
    expect(wrapper.text()).toContain('Cadrage et qualité : en progression')
    expect(wrapper.text()).toContain('Prochaine étape')
  })
})
