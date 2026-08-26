const plugin = require('tailwindcss/plugin')
const variablePreset = require('./variablePreset')

// Raio e tipografia como CSS var, com o valor de hoje no fallback. Sem a folha `_komea.scss` que
// declara as variáveis, o CSS gerado é o mesmo do `variablePreset` — é isso que permite adotar este
// preset sem mudança visual e deixar a paleta da chrome nova sobrescrever depois.
//
// Espelho de `packages/tailwindcss-config/komeaPreset.ts` do repo `front-library`, que atende a
// linha 2.x. A única divergência é o fallback dos degraus `text-f*`: nesta linha eles são só
// `font-size`, sem entrelinha nem tracking, então o fallback é `inherit` — declarar valor aqui
// mudaria o visual de quem adota o preset sem a folha.
const RADIUS = {
  // `xs` não existe no Tailwind v3, mas existe no design system e é o degrau dos controles pequenos
  // (checkbox). O fallback é o `rounded` legado: sem a paleta, `rounded-xs` fica igual ao que era.
  xs: '0.25rem',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem'
}

// O fator do squircle multiplica aqui, na utility, e não na variável: uma custom property declarada
// no :root resolve o calc no contexto do :root, onde o fator ainda vale 1, e o bump nunca aconteceria.
const borderRadius = Object.keys(RADIUS).reduce(function (acc, step) {
  const name = step === 'DEFAULT' ? '' : '-' + step
  acc[step] =
    'calc(var(--radius' +
    name +
    ', ' +
    RADIUS[step] +
    ') * var(--radius-squircle-scale, 1))'
  return acc
}, {})

// Cada degrau legado aponta para um papel do design system. `f1` não tem papel equivalente (o par
// seria um papel expressivo, que pede a Lektorat), então não consulta token nenhum.
const TYPE_SCALE = {
  f1: { role: null, size: '3rem' },
  f2: { role: 'title-large', size: '2.25rem' },
  f3: { role: 'title-large', size: '1.5rem' },
  f4: { role: 'title', size: '1.25rem' },
  f5: { role: 'body-large', size: '1rem' },
  f6: { role: 'body', size: '0.875rem' },
  f7: { role: 'caption', size: '0.75rem' },
  f8: { role: 'caption', size: '0.625rem' }
}

// Os degraus nativos coincidem com os papéis em tamanho e entrelinha, então o de→para é
// essencialmente o tracking, que o Tailwind não declara. `lg` (18px) fica de fora: não tem papel
// equivalente e mapeá-lo mudaria o tamanho. O fallback é o valor NATIVO do Tailwind, para que o
// preset sozinho não altere nada.
const NATIVE_STEPS = {
  xs: { role: 'caption', size: '0.75rem', lineHeight: '1rem' },
  sm: { role: 'body', size: '0.875rem', lineHeight: '1.25rem' },
  base: { role: 'body-large', size: '1rem', lineHeight: '1.5rem' },
  xl: { role: 'title', size: '1.25rem', lineHeight: '1.75rem' },
  '2xl': { role: 'title-large', size: '1.5rem', lineHeight: '2rem' }
}

// Papéis com o nome do design system, ao lado dos apelidos legados, para que código novo escreva
// `text-title`/`text-action` sem passar pelo vocabulário antigo. `action` é o rótulo de botão e não
// tem equivalente na escala legada, por isso só existe aqui.
const ROLES = {
  'title-large': {
    size: '1.5rem',
    lineHeight: '2rem',
    letterSpacing: '-0.019em',
    weight: '600'
  },
  title: {
    size: '1.25rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.017em',
    weight: '500'
  },
  'body-large': {
    size: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.011em',
    weight: '400'
  },
  body: {
    size: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '-0.006em',
    weight: '400'
  },
  caption: {
    size: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: 'normal',
    weight: '400'
  },
  action: {
    size: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '-0.006em',
    weight: '500'
  },
  code: {
    size: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: 'normal',
    weight: '400'
  }
}

const role = function (name, attr, fallback) {
  return 'var(--text-' + name + '-' + attr + ', ' + fallback + ')'
}

const fontSize = {}

Object.keys(TYPE_SCALE).forEach(function (step) {
  const spec = TYPE_SCALE[step]
  if (!spec.role) {
    fontSize[step] = spec.size
    return
  }
  fontSize[step] = [
    role(spec.role, 'size', spec.size),
    {
      // `inherit` no fallback reproduz exatamente o comportamento de hoje, onde o degrau declara só
      // o tamanho e estas três propriedades vêm da herança.
      lineHeight: role(spec.role, 'lh', 'inherit'),
      letterSpacing: role(spec.role, 'ls', 'inherit'),
      fontWeight: role(spec.role, 'weight', 'inherit')
    }
  ]
})

Object.keys(NATIVE_STEPS).forEach(function (step) {
  const spec = NATIVE_STEPS[step]
  fontSize[step] = [
    role(spec.role, 'size', spec.size),
    {
      lineHeight: role(spec.role, 'lh', spec.lineHeight),
      letterSpacing: role(spec.role, 'ls', 'normal'),
      fontWeight: role(spec.role, 'weight', 'inherit')
    }
  ]
})

const roleClasses = plugin(function (api) {
  const components = {}
  Object.keys(ROLES).forEach(function (name) {
    const spec = ROLES[name]
    components['.text-' + name] = {
      fontSize: role(name, 'size', spec.size),
      lineHeight: role(name, 'lh', spec.lineHeight),
      letterSpacing: role(name, 'ls', spec.letterSpacing),
      fontWeight: role(name, 'weight', spec.weight)
    }
  })
  api.addComponents(components)
})

// O `variablePreset` muta e reexporta o `variablePreset`; a guarda quebra o build se ele deixar de
// trazer a escala legada em `theme.extend.fontSize`, que é o que este preset substitui.
if (!variablePreset.theme.extend.fontSize.f6) {
  throw new Error(
    'komeaPreset: o variablePreset mudou de forma; confira onde a escala legada é declarada'
  )
}

module.exports = Object.assign({}, variablePreset, {
  theme: Object.assign({}, variablePreset.theme, {
    extend: Object.assign({}, variablePreset.theme.extend, {
      borderRadius: borderRadius,
      fontSize: fontSize
    }),
    fontWeight: Object.assign({}, variablePreset.theme.fontWeight, {
      // Os papéis usam 500 em título, ação e labels. Nesta linha a chave vinha como `false`, então a
      // classe não existia e o browser sintetizava o peso.
      medium: 500,
      // 700 não existe na escala do design system. Fica desligado só aqui, e não no `defaultPreset`,
      // porque aquele ainda atende apps de hex que não estão adotando o design system.
      bold: false
    })
  }),
  plugins: (variablePreset.plugins || []).concat([roleClasses])
})
