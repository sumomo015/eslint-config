import {
  getJavascriptConfigs,
  getTypescriptConfigs,
  getVueConfigs,
  getImportConfigs,
  getStylisticConfigs,
  getLanguageConfigs,
} from './configs'

import type { Config } from './types'

/**
 * ESLint設定のオプション
 */
interface ESLintConfigsOptions {
  /**
   * 設定モード
   * - `TS_ONLY`: TypeScriptのみ
   * - `VUE_WITH_TS`: Vue.js with TypeScript
   */
  mode: 'TS_ONLY' | 'VUE_WITH_TS'
  /**
   * TypeScript設定ファイルのルートディレクトリ
   */
  tsconfigRootDir: string
  /**
   * 内部モジュールを識別するための正規表現パターン
   */
  internalRegex?: string
  /**
   * 無視するファイルパターンの配列
   */
  ignores?: string[]
}

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
 *   mode: 'TS_ONLY',
 *   tsconfigRootDir: __dirname,
 *   internalRegex: '^@myapp/',
 *   ignores: ['dist', 'node_modules']
 * })
 * ```
 */
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

export type { ESLintConfigsOptions, Config }
