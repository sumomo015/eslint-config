import type { Config } from '../types'

function cleanConfig(config: Config): Config {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { files, ignores, languageOptions, ...rest } = config
  return rest
}
function cleanConfigs(configs: Config[]): Config[] {
  return configs.map(cleanConfig)
}

export {
  cleanConfig,
  cleanConfigs,
}
