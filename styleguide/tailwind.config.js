import defaultPreset from '@loja-integrada/tailwindcss-config'

const config = {
  presets: [defaultPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
}

export default config