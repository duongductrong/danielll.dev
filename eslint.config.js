//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  { ignores: ['.claude/**', 'eslint.config.js', 'prettier.config.js'] },
  ...tanstackConfig,
]
