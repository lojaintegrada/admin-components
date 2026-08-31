import komeaPreset from '@loja-integrada/tailwindcss-config/komea'

const config = {
  presets: [komeaPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
}

export default config