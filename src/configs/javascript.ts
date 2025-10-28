import eslintJS from '@eslint/js'

import { cleanConfigs } from '../utils/clean'

import type { Config } from '../types'

function getJavascriptConfigs(): Config[] {
  return cleanConfigs([{
    ...eslintJS.configs.recommended,
    name: 'js/recommended',
  }])
}

export {
  getJavascriptConfigs,
}
