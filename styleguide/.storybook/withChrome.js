// A folha do komea entra como módulo próprio, e não dentro do `tailwind.scss`: o style-loader emite um
// `<style>` por módulo, e é isso que permite desligá-la em tempo de execução. Com o `@import` inline o
// Sass achataria as duas num só stylesheet e não haveria o que alternar.
import '@loja-integrada/tailwindcss-config/styles/komea'

// O seletor tem de ser o bloco de declaração exato, e não qualquer regra que mencione `data-chrome`:
// o bundle do Tailwind também casa com isso, porque toda utility da variante `komea:` sai como
// `:root[data-chrome="new"] .komea\:algo`. Desligar por menção derruba as utilities inteiras.
const KOMEA_ROOT = /^:root\[data-chrome=["']?new["']?\]$/

// `sheet.disabled` desliga métrica, cor e raio de uma vez, e é o que faz o estado legado ser de fato
// legado: com a folha ativa, as vars de tipografia do design system valem no `:root` sem escopo
// nenhum e a escala não voltaria.
const komeaSheet = () => {
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText && KOMEA_ROOT.test(rule.selectorText.trim()))
          return sheet
      }
    } catch (e) {
      /* folha de outra origem: não é a nossa */
    }
  }
  return null
}

const applyChrome = (chrome) => {
  const root = document.documentElement
  const sheet = komeaSheet()
  if (chrome === 'new') {
    if (sheet) sheet.disabled = false
    root.setAttribute('data-chrome', 'new')
  } else {
    if (sheet) sheet.disabled = true
    root.removeAttribute('data-chrome')
  }
}

// Sem hook: o Storybook re-renderiza a story a cada mudança de global, que é quando o atributo
// precisa mudar.
export const withChrome = (Story, context) => {
  applyChrome(context.globals.chrome || 'legacy')
  return Story()
}

export const chromeGlobalType = {
  description: 'Paleta, raio e escala tipográfica: preset legado ou a chrome nova do komea',
  defaultValue: 'legacy',
  toolbar: {
    title: 'Chrome',
    icon: 'paintbrush',
    items: [
      { value: 'legacy', title: 'Legado' },
      { value: 'new', title: 'Komea' },
    ],
    dynamicTitle: true,
  },
}
