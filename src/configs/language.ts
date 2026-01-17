import eslintParserTS from '@typescript-eslint/parser'
import eslintParserVue from 'vue-eslint-parser'

import type { RawConfig } from '../types'

interface LanguageConfigsOptions {
  tsconfigRootDir: string
  vue?: boolean
  ignores?: string[]
}

const GLOBAL_FILES_PATTERN = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']
const GLOBAL_FILES_PATTERN_VUE = GLOBAL_FILES_PATTERN.concat(['**/*.vue'])

function getLanguageConfigs(options: LanguageConfigsOptions): RawConfig[] {
  const result: (RawConfig | undefined)[] = [
    _getFilesConfig(options),
    options.ignores ? _getIgnoresConfig(options.ignores) : undefined,
    _getLanguageOptionsConfig(options),
  ]

  return result.filter(config => !!config)
}

function _getFilesConfig(options: LanguageConfigsOptions): RawConfig {
  const { vue } = options
  return {
    name: 'global/files',
    files: vue ? GLOBAL_FILES_PATTERN_VUE : GLOBAL_FILES_PATTERN,
  }
}

function _getIgnoresConfig(ignores: string[]): RawConfig {
  return {
    name: 'global/ignores',
    ignores,
  }
}

function _getLanguageOptionsConfig(options: LanguageConfigsOptions): RawConfig {
  const name = 'global/language-options'

  const { vue, tsconfigRootDir } = options

  if (!vue) {
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

export {
  getLanguageConfigs,
}

export type {
  LanguageConfigsOptions,
}
