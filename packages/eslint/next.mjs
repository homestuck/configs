// import { FlatCompat } from '@eslint/eslintrc'
import pluginNext from '@next/eslint-plugin-next'
import { defineConfig } from 'eslint/config'

import reactEslintConfig from '@homestuck/eslint-config/react'

/* const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
}) */

const $config = defineConfig(
  reactEslintConfig,
  /* ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }), */
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
    },
    settings: {
      next: {
        rootDir: import.meta.dirname,
      },
    },
  },
)

export default $config
