import eslintStylistic from '@stylistic/eslint-plugin'

import { cleanConfig } from '../utils/clean'

import type { RawConfig } from '../types'

function getStylisticConfigs(): RawConfig[] {
  return [
    cleanConfig({
      ...eslintStylistic.configs.customize({ severity: 'warn' }),
      name: 'stylistic/recommended',
    }),
  ]
}

export {
  getStylisticConfigs,
}
