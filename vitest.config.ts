import { defineConfig } from 'vitest/config'

import type { ViteUserConfig } from 'vitest/config'

const config: ViteUserConfig = defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
    environment: 'node',
  },
})

export default config
