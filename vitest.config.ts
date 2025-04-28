import { defineConfig } from 'vitest/config'

import type { UserConfig } from 'vite'

const config: UserConfig = defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
    environment: 'node',
  },
})

export default config
