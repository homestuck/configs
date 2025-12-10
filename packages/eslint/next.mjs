import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'

import reactEslintConfig from '@homestuck/eslint-config/react'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const nextEslintConfig = defineConfig(
  reactEslintConfig,
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }),
)

export default nextEslintConfig
