import { defineESLintConfig } from './src'

import type { Config } from './src/types'

export default defineESLintConfig({
  mode: 'TS_ONLY',
  tsconfigRootDir: import.meta.dirname,
  ignores: ['dist/', 'coverage/'],
}) satisfies Config[]
