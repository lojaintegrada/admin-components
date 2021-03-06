# Admin Components / Styleguide

Components for Loja Integrada admin.
[https://lojaintegrada.github.io/admin-components/](https://lojaintegrada.github.io/admin-components/)

## Usage

```bash
yarn add @loja-integrada/admin-components
```

```js
import { Button } from '@loja-integrada/admin-components'

<Button></Button>
```

## Comamnds

### Storybook

```bash
yarn storybook
```

### Test

```bash
yarn test
yarn test:cypress
```

### Lint

```bash
yarn lint
# Run before each commit
yarn lint --fix
```

### Check tailwindcss configs

```bash
npx tailwind-config-viewer
```

## Publishing

- Merge the PR to `main`
- Create an [release](https://github.com/lojaintegrada/admin-components/releases) with the pattern `styleguide@VERSION`, like `styleguide@0.0.23`
- Check result at GitHub Actions

Deploy to GitHub Pages is automatic after deploy to NPM

## Testing

This project works with both Jest or Cypress Components.
Use `.spec.` for Cypress and `.test.` for Jest

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `yarn size` and visulize it with `yarn analyze`.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

Prefer using only Tailwind classes

[WIP]
For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Others

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)
> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.
