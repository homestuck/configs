<div align="center">
<h1>@homestuck/prettier-config</h1>

A baseline Prettier configuration used and maintained by members of [@homestuck](https://github.com/homestuck).

[![NPM Version](https://img.shields.io/npm/v/%40homestuck%2Fprettier-config?style=for-the-badge)](https://www.npmjs.com/package/@homestuck/prettier-config)
[![License: MIT](https://img.shields.io/github/license/homestuck/configs?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 🚀 Quick Start

### 1. Install the package:

```bash
npm install --save-dev @homestuck/prettier-config
# or
pnpm add -D @homestuck/prettier-config
```

### 2. Add to your project using one of the following supported methods:

#### Update your project's `package.json` file:

```json
{
  "name": "your-project",
  "prettier": "@homestuck/prettier-config"
}
```

#### Update/Create your project's Prettier configuration YAML or JSON file:

```yaml
# .prettierrc, .prettierrc.yml, .prettierrc.yaml, .prettierrc.json, or .prettierrc.json5
'@homestuck/prettier-config'
```

#### Update/Create your project's Prettier configuration JS (ESModule) file:

```js
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
import homestuckPrettierConfig from '@homestuck/prettier-config'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...homestuckPrettierConfig,
  // Optional config overrides can be set here.
}

export default config
```

#### Update/Create your project's Prettier configuration TS (ESModule) file:

```ts
// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts
import type { Config } from 'prettier'

import baseConfig from '@homestuck/prettier-config'

const config: Config = {
  ...baseConfig,
  // Additional configs and overrides can optionally be set here.
}

export default config
```
