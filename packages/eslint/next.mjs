import pluginNext from '@next/eslint-plugin-next'
import { defineConfig } from 'eslint/config'

import reactEslintConfig from '@homestuck/eslint-config/react'

const $config = defineConfig(
  reactEslintConfig,
  {
    name: '@next/next/recommended',
    plugins: {
      // @ts-expect-error --- false positive from NextJS custom typedef
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
    },
  },
  {
    name: 'Next Settings',
  },
)

export default $config
