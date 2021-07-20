# Loja Integrada Admin TailwindCSS Config

<https://lojaintegrada-tailwind.vercel.app/>

Manually deploy to NPM is required when updated.
Deploy to preview is automatic at Vercel.

## Commands

```bash
yarn tailwind-config-viewer
npm publish
```

## Usage

At yout `tailwind.config.js`

```js
module.exports = {
  presets: [
    require('@lojaintegrada/tailwindcss-config/src/defaultPreset')
    // or
    // require('@lojaintegrada/tailwindcss-config/src/pagaLIPreset')
  ],
  // mode: 'jit',
  // purge: [],
  // ...
}
```
