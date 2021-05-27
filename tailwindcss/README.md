# Loja Integrada Admin TailwindCSS Config

Deploy apenas manual

## Commands

```bash
yarn build
npm publish
```

## Usage

tailwind.config.js

```js
const defaultSettings = require('@lojaintegrada/tailwindcss-config/dist/defaultSettings')

module.exports = {
  ...defaultSettings,
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
}
```
