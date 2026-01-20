<div align="center">
<h1>@homestuck/tsconfig</h1>

Baseline TypeScript configurations used and maintained by members of [@homestuck](https://github.com/homestuck).

[![NPM Version](https://img.shields.io/npm/v/%40homestuck%2Ftsconfig?style=for-the-badge)](https://www.npmjs.com/package/@homestuck/tsconfig)
[![License: MIT](https://img.shields.io/github/license/homestuck/configs?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 🚀 Quick Start

### 1. Install the package:

```bash
npm install --save-dev @homestuck/tsconfig
# or
pnpm add -D @homestuck/tsconfig
```

### 2. Add the most applicable config to your project's Typescript configuration file:

#### Standard Package:

```json
// tsconfig.json
{
  "extends": "@homestuck/tsconfig/base.json"
  // Additional configs and overrides can optionally be set here.
}
```

#### Internal Package:

```json
// tsconfig.json
{
  "extends": "@homestuck/tsconfig/internal-package.json"
  // Additional configs and overrides can optionally be set here.
}
```
