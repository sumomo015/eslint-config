import {
  getJavascriptConfigs,
  getTypescriptConfigs,
  getVueConfigs,
  getImportConfigs,
  getStylisticConfigs,
  getLanguageConfigs,
} from './configs'

import type { Config } from './types'

interface ESLintConfigsOptions {
  mode: 'TS_ONLY' | 'VUE_WITH_TS'
  tsconfigRootDir: string
  internalRegex?: string
  ignores?: string[]
}

function defineESLintConfig(options: ESLintConfigsOptions, ...configs: Config[]): Config[] {
  const { mode, tsconfigRootDir, internalRegex, ignores } = options
  const isNeedVue = mode === 'VUE_WITH_TS'

  return [
    ...getLanguageConfigs({ mode, tsconfigRootDir, ignores }),
    ...getJavascriptConfigs(),
    ...getTypescriptConfigs(),
    ...(isNeedVue ? getVueConfigs() : []),
    ...getImportConfigs({ internalRegex: internalRegex }),
    ...getStylisticConfigs(),
    ...configs,
  ]
}

export {
  defineESLintConfig,
}
