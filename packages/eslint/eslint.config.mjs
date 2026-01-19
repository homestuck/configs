/* eslint-disable import/no-named-as-default-member */
import js from '@eslint/js'
import tseslintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginImport from 'eslint-plugin-import'
import pluginPerfectionist from 'eslint-plugin-perfectionist'
import pluginRegexp from 'eslint-plugin-regexp'
import pluginStorybook from 'eslint-plugin-storybook'
import pluginTurbo from 'eslint-plugin-turbo'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import ts from 'typescript-eslint'

const rootEslintConfig = defineConfig(
  pluginTurbo.configs['flat/recommended'],
  {
    name: 'eslint/js/recommended',
    ...js.configs.recommended,
  },
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  {
    ...pluginPerfectionist.configs['recommended-natural'],
    name: 'perfectionist/recommended-natural',
  },
  { ...pluginRegexp.configs['flat/recommended'], name: 'regexp/recommended' },
  pluginUnicorn.configs.recommended,
  pluginImport.flatConfigs.recommended,
  // @ts-expect-error --- false positive
  pluginStorybook.configs['flat/recommended'],
  { ...eslintConfigPrettier, name: 'prettier/recommended' },
  globalIgnores(
    ['**/.next', '**/dist', '**/pnpm-lock.yaml', '**/next-env.d.ts'],
    'Global Ignores',
  ),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    name: 'Global Settings',
    plugins: {
      'unused-imports': pluginUnusedImports,
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
      // '@typescript-eslint/no-explicit-any': ['error'],
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
)

export default rootEslintConfig
