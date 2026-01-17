import eslintJS from '@eslint/js'

import { cleanConfigs } from '../utils/clean'

import type { RawConfig } from '../types'

function getJavascriptConfigs(): RawConfig[] {
  return cleanConfigs([{
    ...eslintJS.configs.recommended,
    name: 'js/recommended',
  }])
}

export {
  getJavascriptConfigs,
}
