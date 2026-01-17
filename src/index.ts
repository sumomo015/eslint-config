import {
  getJavascriptConfigs,
  getTypescriptConfigs,
  getVueConfigs,
  getReactConfigs,
  getImportConfigs,
  getStylisticConfigs,
  getLanguageConfigs,
  getVitestConfigs,
} from './configs'

import type { RawConfig, Options } from './types'

/**
 * ESLint設定を定義する
 *
 * @param options - ESLint設定のオプション
 * @param configs - 追加のカスタム設定
 * @returns ESLint設定の配列
 *
 * @example
 * ```typescript
 * defineESLintConfig({
 *   feature: {
 *     vue: { enabled: true, nuxt: true },
 *     react: { enabled: true, next: true },
 *     vitest: { enabled: true },
 *   },
 *   tsconfigRootDir: __dirname,
 *   internalRegex: '^@myapp/',
 *   ignores: ['dist', 'node_modules']
 * })
 * ```
 */
function defineESLintConfig(options: Options, ...configs: RawConfig[]): RawConfig[] {
  const { feature, tsconfigRootDir, internalRegex, ignores } = options

  const vue = feature?.vue?.enabled === true

  return [
    ...getLanguageConfigs({ vue, tsconfigRootDir, ignores }),
    ...getJavascriptConfigs(),
    ...getTypescriptConfigs(),
    ...getVueConfigs(feature?.vue),
    ...getReactConfigs(feature?.react),
    ...getImportConfigs({ internalRegex: internalRegex }),
    ...getVitestConfigs(feature?.vitest),
    ...getStylisticConfigs(),
    ...configs,
  ]
}

export {
  defineESLintConfig,
}

export type * from './types'
