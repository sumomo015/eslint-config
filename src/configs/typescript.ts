import eslintTS from 'typescript-eslint'

import { cleanConfigs } from '../utils/clean'

import type { RawConfig } from '../types'

function getTypescriptConfigs(): RawConfig[] {
  return cleanConfigs([
    ...(eslintTS.configs.strictTypeChecked as RawConfig[]),
    ...(eslintTS.configs.stylisticTypeChecked as RawConfig[]),
    {
      name: 'typescript-eslint/overrides',
      rules: {
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'warn',
        '@typescript-eslint/promise-function-async': 'warn',
      },
    },
  ])
}

export {
  getTypescriptConfigs,
}
