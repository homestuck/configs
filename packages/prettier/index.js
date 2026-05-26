/**
 * @import { Config as PrettierConfig } from "prettier"
 * @import { PluginConfig as SortImportsConfig } from "@ianvs/prettier-plugin-sort-imports"
 * @import { SortJsonOptions as SortJsonConfig } from "prettier-plugin-sort-json"
 * @import { PluginOptions as TailwindCSSConfig }  from "prettier-plugin-tailwindcss"
 * @typedef { PrettierConfig & SortImportsConfig & SortJsonConfig & TailwindCSSConfig } HomestuckPrettierConfig
 * */

/** @type HomestuckPrettierConfig */
export default {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: [
    '<TYPES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>^@homestuck',
    '^@homestuck/(.*)$',
    '<TYPES>^(@local|@internal|@workspace|@repo)',
    '^(@local|@internal|@workspace|@repo)/(.*)$',
    '',
    '<TYPES>^[.|..|~|#]',
    '^(~/|#)',
    '^[../]',
    '^[./]',
  ],
  importOrderCaseSensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.9.3',
  jsonRecursiveSort: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    '@prettier/plugin-xml',
    'prettier-plugin-packagejson',
    'prettier-plugin-sort-json',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  proseWrap: 'preserve',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindAttributes: ['class', 'className', 'ngClass', 'class:list'],
  tailwindFunctions: ['clsx', 'cn', 'cva', 'tw', 'twMerge'],
  trailingComma: 'all',
  useTabs: false,
  xmlQuoteAttributes: 'double',
  xmlSelfClosingSpace: true,
  xmlSortAttributesByKey: true,
  xmlWhitespaceSensitivity: 'preserve',
}
