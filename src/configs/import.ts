import eslintImport from 'eslint-plugin-import-x'

import type { Config, Plugins } from '../types'

interface ImportConfigsOptions {
  internalRegex?: string
}

function getImportConfigs(options?: ImportConfigsOptions): Config[] {
  return [
    {
      name: 'import-x/recommended',
      plugins: eslintImport.flatConfigs.recommended.plugins as Plugins,
      rules: {
        'import-x/no-empty-named-blocks': 'warn',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-self-import': 'error',
        'import-x/consistent-type-specifier-style': 'warn',
        'import-x/exports-last': 'warn',
        'import-x/first': 'warn',
        'import-x/group-exports': 'warn',
        'import-x/newline-after-import': ['warn', { count: 1 }],
        'import-x/no-duplicates': 'warn',
        'import-x/no-named-default': 'warn',
        'import-x/no-namespace': 'warn',
        'import-x/order': ['warn', {
          'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          'newlines-between': 'always',
        }],
      },
      settings: {
        'import-x/internal-regex': options?.internalRegex,
      },
    },
  ]
}

export {
  getImportConfigs,
}

export type {
  ImportConfigsOptions,
}
