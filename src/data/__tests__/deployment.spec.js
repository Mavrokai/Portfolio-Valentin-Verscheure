import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('déploiement GitHub Pages', () => {
  it('publie le build Vite au lieu des fichiers sources', () => {
    const workflow = readFileSync(
      resolve(process.cwd(), '.github/workflows/deploy-pages.yml'),
      'utf8'
    )

    expect(workflow).toContain('npm run build')
    expect(workflow).toContain('path: ./dist')
    expect(workflow).toContain('actions/deploy-pages@v4')
  })
})
