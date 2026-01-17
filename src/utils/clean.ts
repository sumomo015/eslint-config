import type { RawConfig } from '../types'

function cleanConfig(config: RawConfig): RawConfig {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { files, ignores, languageOptions, ...rest } = config
  return rest
}
function cleanConfigs(configs: RawConfig[]): RawConfig[] {
  return configs.map(cleanConfig)
}

export {
  cleanConfig,
  cleanConfigs,
}
