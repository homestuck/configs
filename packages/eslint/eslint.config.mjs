/* eslint-disable import/no-named-as-default-member */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ESLint from '@eslint/js'
import TSESLintParser from '@typescript-eslint/parser'
import ESLintConfigPrettier from 'eslint-config-prettier'
import ESLintPluginImport from 'eslint-plugin-import'
import ESLintPluginPerfectionist from 'eslint-plugin-perfectionist'
import { configs as ESLintPluginRegexpConfigs } from 'eslint-plugin-regexp'
import ESLintPluginStorybook from 'eslint-plugin-storybook'
import ESLintPluginTurbo from 'eslint-plugin-turbo'
import ESLintPluginUnicorn from 'eslint-plugin-unicorn'
import ESLintPluginUnusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import TSESLint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const rootEslintConfig = defineConfig(
  {
    ignores: ['**/.next', '**/dist', '**/pnpm-lock.yaml', '**/next-env.d.ts'],
  },
  ESLintPluginTurbo.configs['flat/recommended'],
  ESLint.configs.recommended,
  TSESLint.configs.recommendedTypeChecked,
  TSESLint.configs.strictTypeChecked,
  TSESLint.configs.stylisticTypeChecked,
  ESLintPluginPerfectionist.configs['recommended-natural'],
  ESLintPluginRegexpConfigs['flat/recommended'],
  ESLintPluginUnicorn.configs.recommended,
  ESLintPluginImport.flatConfigs.recommended,
  // @ts-expect-error --- false positive
  ESLintPluginStorybook.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parser: TSESLintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    name: 'Settings',
    plugins: {
      'unused-imports': ESLintPluginUnusedImports,
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/first': ['error'],
      'import/newline-after-import': ['error'],
      'import/no-duplicates': ['error'],
      'import/no-extraneous-dependencies': ['off'],
      'import/order': ['off'],
      'import/prefer-default-export': ['off'],

      'no-console': ['warn'],
      'no-unused-vars': ['off'],

      'perfectionist/sort-enums': ['off'],
      'perfectionist/sort-imports': ['off'],
      'perfectionist/sort-named-imports': ['off'],
      'perfectionist/sort-object-types': [
        'error',
        {
          partitionByComment: true,
          partitionByNewLine: false,
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          partitionByComment: true,
          partitionByNewLine: false,
        },
      ],

      'unicorn/better-regex': ['warn'],
      'unicorn/consistent-function-scoping': ['off'],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
          },
        },
      ],
      'unicorn/no-array-reduce': ['off'],
      'unicorn/no-null': ['off'],
      'unicorn/no-useless-undefined': ['off'],
      'unicorn/prevent-abbreviations': ['off'],

      'unused-imports/no-unused-imports': ['error'],
    },
    settings: {
      'import/extensions': [
        '.ts',
        '.cts',
        '.mts',
        '.tsx',
        '.js',
        '.jsx',
        '.mjs',
        '.cjs',
      ],
      'import/resolver': {
        node: {
          extensions: [
            '.ts',
            '.cts',
            '.mts',
            '.tsx',
            '.js',
            '.jsx',
            '.mjs',
            '.cjs',
          ],
        },
        typescript: true,
      },
      react: {
        defaultVersion: '19',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    name: 'TypeScript Settings',
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-empty-function': ['warn'],
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-misused-promises': [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        { classes: false, functions: false },
      ],
    },
  },
  ESLintConfigPrettier,
)

export default rootEslintConfig
