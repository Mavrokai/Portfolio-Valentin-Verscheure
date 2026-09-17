import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('configuration Tailwind', () => {
  it('charge explicitement le thème JavaScript avec Tailwind v4', () => {
    const stylesheet = readFileSync(
      resolve(process.cwd(), 'src/assets/styles/main.css'),
      'utf8'
    )

    expect(stylesheet).toContain('@config "../../../tailwind.config.js";')
    expect(stylesheet.indexOf('@import "./animations.css";')).toBeLessThan(
      stylesheet.indexOf('@config "../../../tailwind.config.js";')
    )
  })
})
