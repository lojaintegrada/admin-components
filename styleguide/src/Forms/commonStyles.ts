export const inputPlaceholderClasses = 'placeholder-on-base-2'

export const inputContainerDisabledClasses =
  '!bg-base-3 !pointer-events-none !text-on-base-2 komea:!bg-base-1 komea:!text-on-base komea:opacity-50'

export const inputContainerReadonlyClasses = '!bg-base-2'

export const errorBorderClasses =
  'border-danger focus:border-danger komea:focus-within:border-danger komea:focus-within:ring-danger/20'

export const defaultBorderClasses =
  'border-card-stroke komea:border-input-stroke komea:focus-within:border-focus komea:focus-within:ring-focus/50'

export const focusClass = 'focus:border-inverted-1'

export const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border px-4 rounded text-on-base text-sm min-w-0 w-full transition-border duration-75 komea:px-3 komea:shadow-sm komea:text-body-large md:komea:text-body komea:focus-within:ring-[3px] ${focusClass} ${inputPlaceholderClasses}`

export const inputContainerClasses = `flex focus-within:border-inverted-1 bg-base-1 border rounded text-on-base text-sm min-w-0 w-full transition-border duration-75 overflow-hidden komea:shadow-sm komea:text-body-large md:komea:text-body komea:focus-within:ring-[3px] ${inputPlaceholderClasses}`

const adornmentClasses = `adornment flex justify-center items-center relative w-16 text-f6 text-inverted-2 -mt-px`

// Sem borda o adorno não é uma caixa, é o addon do komea-ds: 12px de recuo e o valor logo depois.
// Os mesmos 40px que a linha 2.x usa, de propósito — com largura do conteúdo o respiro fecharia nos
// 8px exatos do DS, mas o campo ficaria diferente numa app 0.x e numa 2.x no meio da migração, e um
// botão dentro do adorno (a lupa do campo de busca) perderia área clicável ao encolher junto.
// `shrink-0` porque o adorno é item flex: sem ele o `w-10` é só uma base e o navegador comprime a
// caixa quando o campo é estreito, levando o respiro junto.
export const prefixBorderlessKomeaClasses =
  'komea:w-10 komea:shrink-0 komea:justify-start komea:pl-3'

export const sufixBorderlessKomeaClasses =
  'komea:w-10 komea:shrink-0 komea:justify-end komea:pr-3'

export const prefixClasses = `${adornmentClasses} rounded-l left-0`

export const sufixClasses = `${adornmentClasses} rounded-r right-0`

export const variantClasses = {
  default: 'komea:h-9 h-12',
  small: 'komea:h-8 h-10',
  large: 'komea:h-10 h-14',
  xlarge: 'h-24',
}
