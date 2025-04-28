import { defineESLintConfig } from './src'

import type { Config } from './src/types'

const config: Config[] = defineESLintConfig({
  mode: 'TS_ONLY',
  tsconfigRootDir: import.meta.dirname,
  ignores: ['dist/', 'coverage/'],
})

export default config
