# Loja Integrada Admin TailwindCSS Config

<https://lojaintegrada-tailwind.vercel.app/>

## Commands

```bash
yarn tailwind-config-viewer
```

## Publishing

- Merge the PR to `main`
- Create an [release](https://github.com/lojaintegrada/admin-components/releases) with the pattern `tailwindcss@VERSION`, like `tailwindcss@1.0.2`
- Check result at GitHub Actions

Deploy to Vercel is automatic

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
