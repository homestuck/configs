/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error - no types
import pluginJSXA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactCompiler from 'eslint-plugin-react-compiler'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect'
import { defineConfig } from 'eslint/config'

import rootEslintConfig from '@homestuck/eslint-config'

const $config = defineConfig(
  rootEslintConfig,
  {
    ...pluginReact.configs.flat.recommended,
    name: 'react/recommended',
  },
  {
    ...pluginReactHooks.configs.flat.recommended,
    name: 'react-hooks/recommended',
  },
  {
    ...pluginReactYouMightNotNeedAnEffect.configs.recommended,
    name: 'react-you-might-not-need-an-effect/recommended',
  },
  {
    ...pluginReactCompiler.configs.recommended,
    name: 'react-compiler/recommended',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  pluginJSXA11y.flatConfigs.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended?.languageOptions,
    },
    name: 'React Settings',
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          depth: 3,
          labelAttributes: ['children'],
          labelComponents: ['FormLabel'],
        },
      ],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-array-index-key': ['warn'],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': ['off'],
    },
    settings: {
      react: {
        version: '19',
      },
    },
  },
)

export default $config
