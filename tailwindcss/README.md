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

TailwindCSS v3 is *required*!
[How to upgrade](https://tailwindcss.com/docs/upgrade-guide)

At your project file `tailwind.config.js`, add the `preset` and the `content` to `./node_modules/@loja-integrada/admin-components/dist/*.js`

```js
module.exports = {
  presets: [
    require('@loja-integrada/tailwindcss-config/src/defaultPreset')
    // or
    // require('@loja-integrada/tailwindcss-config/src/pagaLIPreset')
  ],
  // content: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}',
  //   './node_modules/@loja-integrada/admin-components/dist/*.js',
  // ],
  // ...
}
```
