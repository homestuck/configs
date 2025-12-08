import path from 'node:path'
import depcheck from 'depcheck'
import { Glob } from 'glob'

const baseConfig = {
  ignoreBinPackage: false, // ignore the packages with bin entry
  skipMissing: false, // skip calculation of missing dependencies
  ignorePatterns: [],
  ignoreMatches: [
    // ignore dependencies that matches these globs
    '@dotenvx/dotenvx',
    '@homestuck/eslint-config',
    '@homestuck/prettier-config',
    // '@homestuck/storybook-config',
    '@homestuck/tsconfig',
    '@storybook/*',
    '@types/*',
    'eslint',
    'eslint-*',
    'typescript',
  ],
  parsers: {
    // the target parsers
    '**/*.js': depcheck.parser.es7,
    '**/*.cjs': depcheck.parser.es7,
    '**/*.mjs': depcheck.parser.es7,
    '**/*.jsx': depcheck.parser.jsx,
    '**/*.ts': depcheck.parser.typescript,
    '**/*.tsx': depcheck.parser.typescript,
  },
  detectors: [
    depcheck.detector.exportDeclaration,
    depcheck.detector.importCallExpression,
    depcheck.detector.importDeclaration,
    depcheck.detector.requireCallExpression,
    depcheck.detector.requireResolveCallExpression,
    depcheck.detector.typescriptImportEqualsDeclaration,
    depcheck.detector.typescriptImportType,
  ],
  specials: [
    depcheck.special.eslint,
    depcheck.special.husky,
    depcheck.special.jest,
    depcheck.special['lint-staged'],
    depcheck.special.prettier,
    depcheck.special.tslint,
    depcheck.special.ttypescript,
    depcheck.special.webpack,
  ],
}

const packageJsonFiles = new Glob('{apps,packages,tooling}/*/package.json', {
  absolute: true,
  ignore: 'node_modules/**',
})

for await (const file of packageJsonFiles) {
  const projectPath = path.dirname(file)

  const options = {
    ...baseConfig,
    package: (await import(file, { with: { type: 'json' } })).default,
  }

  depcheck(projectPath, options).then(unused => {
    console.log(projectPath)

    if (unused.dependencies.length) {
      console.log('Unused dependencies:')
      console.log(unused.dependencies) // an array containing the unused dependencies
    }

    if (unused.devDependencies.length) {
      console.log('Unused devDependencies:')
      console.log(unused.devDependencies) // an array containing the unused devDependencies
    }

    if (unused.missing.length) {
      console.log('Missing dependencies:')
      console.log(unused.missing) // a lookup containing the dependencies missing in `package.json` and where they are used
    }

    // console.log(unused.using) // a lookup indicating each dependency is used by which files
    // console.log(unused.invalidFiles) // files that cannot access or parse
    // console.log(unused.invalidDirs) // directories that cannot access
  })
}
