// `src/_komea.scss` é cópia do arquivo gerado na linha 2.x da lib, que vive no repo `front-library`.
// O gerador mora só lá — duplicá-lo aqui convidaria as duas linhas a divergirem em silêncio.
//
// Para comparar sem PAT nem checkout cruzado, a 2.x entra como devDependency sob o alias
// `tailwindcss-config-v2` (mesmo nome de pacote, não daria para instalar sem alias). Localmente,
// KOMEA_SOURCE aponta para um checkout.
const { readFileSync } = require('fs')
const { resolve } = require('path')

const MIRROR = resolve(__dirname, '../src/_komea.scss')
const SOURCE =
  process.env.KOMEA_SOURCE ||
  require.resolve('tailwindcss-config-v2/styles/komea')

// O cabeçalho difere de propósito: cada cópia explica o seu próprio papel.
const body = (path) => {
  const lines = readFileSync(path, 'utf8').split('\n')
  let start = 0
  while (
    start < lines.length &&
    (lines[start].startsWith('//') || lines[start].trim() === '')
  )
    start++
  return lines.slice(start).join('\n').trim()
}

if (body(MIRROR) !== body(SOURCE)) {
  console.error(
    'src/_komea.scss divergiu de ' +
      SOURCE +
      '\nCopie o arquivo do front-library preservando o cabeçalho desta cópia.'
  )
  process.exit(1)
}

console.log('src/_komea.scss está em dia com a linha 2.x da lib.')
