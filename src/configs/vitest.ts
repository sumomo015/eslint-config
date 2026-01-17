import eslintVitest from '@vitest/eslint-plugin'

import type { RawConfig, Options } from '../types'

function getVitestConfigs(options: NonNullable<Options['feature']>['vitest']): RawConfig[] {
  if (!options?.enabled) {
    return []
  }

  return [
    eslintVitest.configs.recommended,
  ]
}

export {
  getVitestConfigs,
}
