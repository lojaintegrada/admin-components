# Loja Integrada Admin TailwindCSS Config

Deploy apenas manual

## Use

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

## Commands

```bash
yarn build
npm publish
```
