import type { Linter, ESLint } from 'eslint'

/**
 * ESLintの設定オブジェクトの型
 */
type RawConfig = Linter.Config

/**
 * ESLintプラグインのマップ型
 * キーがプラグイン名、値がプラグインオブジェクト
 */
type RawPlugins = Record<string, ESLint.Plugin>

/**
 * ESLint設定のオプション
 */
interface Options {
  /**
   * 機能ごとの有効化設定
   */
  feature?: {
    /**
     * Vue.js関連の設定
     */
    vue?: {
      /** Vue.js設定を有効にするか */
      enabled: boolean
      /** Nuxt.jsを使用するか */
      nuxt?: boolean
    }
    /**
     * React関連の設定
     */
    react?: {
      /** React設定を有効にするか */
      enabled: boolean
      /** Next.jsを使用するか */
      next?: boolean
    }
    /**
     * Vitest関連の設定
     */
    vitest?: {
      /** Vitest設定を有効にするか */
      enabled: boolean
    }
  }
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

export type {
  Options,
  RawConfig,
  RawPlugins,
}
