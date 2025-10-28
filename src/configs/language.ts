import eslintParserTS from '@typescript-eslint/parser'
import eslintParserVue from 'vue-eslint-parser'

import type { Config } from '../types'

interface LanguageConfigsOptions {
  mode: 'TS_ONLY' | 'VUE_WITH_TS'
  tsconfigRootDir: string
  ignores?: string[]
}

function getLanguageConfigs(options: LanguageConfigsOptions): Config[] {
  const result: (Config | undefined)[] = [
    _getFilesConfig(options),
    options.ignores ? _getIgnoresConfig(options.ignores) : undefined,
    _getLanguageOptionsConfig(options),
  ]

  return result.filter(config => !!config)
}

function _getFilesConfig(options: LanguageConfigsOptions): Config {
  const { mode } = options
  return {
    name: 'global/files',
    files: mode === 'TS_ONLY' ? ['**/*.ts'] : ['**/*.ts', '**/*.vue'],
  }
}

function _getIgnoresConfig(ignores: string[]): Config {
  return {
    name: 'global/ignores',
    ignores,
  }
}

function _getLanguageOptionsConfig(options: LanguageConfigsOptions): Config {
  const name = 'global/language-options'

  const { mode, tsconfigRootDir } = options
  if (mode === 'TS_ONLY') {
    return {
      name,
      languageOptions: {
        parser: eslintParserTS,
        sourceType: 'module',
        parserOptions: {
          projectService: true,
          tsconfigRootDir: tsconfigRootDir,
        },
      },
    }
  }
  else {
    return {
      name,
      languageOptions: {
        parser: eslintParserVue,
        parserOptions: {
          parser: eslintParserTS,
          sourceType: 'module',
          extraFileExtensions: ['.vue'],
          projectService: true,
          tsconfigRootDir: tsconfigRootDir,
        },
      },
    }
  }
}

export {
  getLanguageConfigs,
  _getFilesConfig,
  _getLanguageOptionsConfig,
}

export type {
  LanguageConfigsOptions,
}
