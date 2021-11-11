module.exports = {
  presets: [require('@loja-integrada/tailwindcss-config/src/defaultPreset')],
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
}
