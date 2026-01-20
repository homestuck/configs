<div align="center">
<h1>@homestuck/eslint-config</h1>

Baseline ESLint configurations used and maintained by members of [@homestuck](https://github.com/homestuck).

[![NPM Version](https://img.shields.io/npm/v/%40homestuck%2Feslint-config?style=for-the-badge)](https://www.npmjs.com/package/@homestuck/eslint-config)
[![License: MIT](https://img.shields.io/github/license/homestuck/configs?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 🚀 Quick Start

### 1. Install the package:

```bash
npm install --save-dev @homestuck/eslint-config
# or
pnpm add -D @homestuck/eslint-config
```

### 2. Add the most applicable config to your project's ESLint configuration file:

#### Javascript/Typescript:

```js
import baseConfig from '@homestuck/eslint-config'

const config = [
  ...baseConfig,
  // Additional configs can optionally be set here.
]

export default config
```

#### React:

```js
import reactConfig from '@homestuck/eslint-config/react'

const config = [
  ...reactConfig,
  // Additional configs can optionally be set here.
]

export default config
```

#### NextJS:

```js
import nextConfig from '@homestuck/eslint-config/next'

const config = [
  ...nextConfig,
  // Additional configs can optionally be set here.
]

export default config
```
