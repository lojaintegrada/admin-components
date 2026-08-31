const plugin = require('tailwindcss/plugin')

// `komea:` escopa uma utility na chrome nova. Serve para o que não tem token a reapontar — altura,
// padding, gap: spacing cru, que o `_komea.scss` não alcança. O componente escreve o valor legado
// como base e o do design system no modificador, e cada preset entrega o seu.
//
// Sem `:where()` de propósito: o seletor precisa somar especificidade para vencer a utility sem
// modificador, que declara a mesma propriedade. Com `:where()` a disputa cairia na ordem de emissão.
module.exports = plugin(function ({ addVariant }) {
  addVariant('komea', ':root[data-chrome="new"] &')
})
