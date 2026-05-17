import eslintReact from '@eslint-react/eslint-plugin'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintNext from '@next/eslint-plugin-next'

import type { Options, RawConfig } from '../types'

const reactConfigs: RawConfig[] = [
  {
    ...eslintReactHooks.configs.flat.recommended,
    name: 'react-hooks',
  },
  eslintReact.configs['strict-type-checked'],
  eslintReact.configs['disable-conflict-eslint-plugin-react-hooks'],
]

const nextConfig: RawConfig = eslintNext.configs['core-web-vitals']

function getReactConfigs(options: NonNullable<Options['feature']>['react']): RawConfig[] {
  if (!options?.enabled) {
    return []
  }

  const { next } = options

  return [
    ...reactConfigs,
    ...(next ? [nextConfig] : []),
  ]
}

export {
  getReactConfigs,
}
