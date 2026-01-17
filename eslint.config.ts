import { defineESLintConfig } from './src'

import type { RawConfig } from './src'

const config: RawConfig[] = defineESLintConfig({
  feature: {
    vitest: { enabled: true },
  },
  tsconfigRootDir: import.meta.dirname,
  ignores: ['dist/', 'coverage/'],
})

export default config
