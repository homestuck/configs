import pluginJSXA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactCompiler from 'eslint-plugin-react-compiler'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect'
import { defineConfig } from 'eslint/config'

import { rootEslintConfig } from '@homestuck/eslint-config'

const reactEslintConfig = defineConfig(
  ...rootEslintConfig,
  { ...pluginReact.configs.flat.recommended },
  pluginReactHooks.configs.flat.recommended,
  pluginReactYouMightNotNeedAnEffect.configs.recommended,
  pluginReactCompiler.configs.recommended,
  pluginJSXA11y.flatConfigs.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended?.languageOptions,
    },
    name: 'React',
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

export default reactEslintConfig
