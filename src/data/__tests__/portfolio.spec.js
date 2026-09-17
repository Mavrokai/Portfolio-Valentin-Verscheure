import { describe, expect, it } from 'vitest'

import { portfolioProfile, projects, rncpBlocks } from '../portfolio'

describe('contenu pédagogique du portfolio', () => {
  it('ne contient plus l’ancienne mention de formation', () => {
    const outdatedLabel = new RegExp(['BTS', 'SIO'].join('\\s*'), 'i')

    expect(JSON.stringify({ portfolioProfile, projects })).not.toMatch(outdatedLabel)
  })

  it('documente une analyse pour chaque réalisation', () => {
    for (const project of projects) {
      expect(project.analysis?.approach, project.title).toBeTruthy()
      expect(project.analysis?.learning, project.title).toBeTruthy()
      expect(project.analysis?.nextStep, project.title).toBeTruthy()
      expect(project.evidence?.length, project.title).toBeGreaterThan(0)
    }
  })

  it('étaye toute compétence d’ergonomie par un audit explicite', () => {
    const projectsClaimingErgonomics = projects.filter((project) =>
      project.rncpKeys.qualite?.includes('ergonomie')
    )

    for (const project of projectsClaimingErgonomics) {
      expect(project.ergonomicAudit?.strengths?.length, project.title).toBeGreaterThan(0)
      expect(project.ergonomicAudit?.risks?.length, project.title).toBeGreaterThan(0)
      expect(project.ergonomicAudit?.actions?.length, project.title).toBeGreaterThan(0)
    }
  })

  it('identifie explicitement chaque compétence sans preuve directe', () => {
    const covered = new Set(
      projects.flatMap((project) =>
        Object.entries(project.rncpKeys).flatMap(([blockKey, keys]) =>
          keys.map((key) => `${blockKey}.${key}`)
        )
      )
    )

    const expected = Object.entries(rncpBlocks).flatMap(([blockKey, block]) =>
      Object.keys(block.items).map((key) => `${blockKey}.${key}`)
    )

    const uncovered = expected.filter((key) => !covered.has(key)).sort()
    const declaredGaps = portfolioProfile.gaps.map((gap) => gap.key).sort()

    expect(declaredGaps).toEqual(uncovered)
  })

  it('présente une auto-évaluation fidèle au niveau déclaré', () => {
    expect(portfolioProfile.progression).toEqual([
      expect.objectContaining({ key: 'cadrer', level: 'En progression' }),
      expect.objectContaining({ key: 'developper', level: 'Autonome' }),
      expect.objectContaining({ key: 'qualite', level: 'En progression' })
    ])
  })
})
