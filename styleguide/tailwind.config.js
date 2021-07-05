const defaultSettings = require('@lojaintegrada/tailwindcss-config/dist/defaultSettings')

module.exports = {
  ...defaultSettings,
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
}
