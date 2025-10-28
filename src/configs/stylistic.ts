import eslintStylistic from '@stylistic/eslint-plugin'

import { cleanConfig } from '../utils/clean'

import type { Config } from '../types'

function getStylisticConfigs(): Config[] {
  return [
    cleanConfig({
      ...eslintStylistic.configs.recommended,
      name: 'stylistic/recommended',
    }),
  ]
}

export {
  getStylisticConfigs,
}
