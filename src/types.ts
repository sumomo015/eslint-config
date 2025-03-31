import type { Linter, ESLint } from 'eslint'

type Config = Linter.Config
type Plugins = Record<string, ESLint.Plugin>

export type {
  Config,
  Plugins,
}
