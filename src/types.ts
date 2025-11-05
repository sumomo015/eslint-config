import type { Linter, ESLint } from 'eslint'

/**
 * ESLintの設定オブジェクトの型
 */
type Config = Linter.Config

/**
 * ESLintプラグインのマップ型
 * キーがプラグイン名、値がプラグインオブジェクト
 */
type Plugins = Record<string, ESLint.Plugin>

export type {
  Config,
  Plugins,
}
