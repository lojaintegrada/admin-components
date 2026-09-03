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

// Sem borda o adorno não é uma caixa, é o addon do komea-ds: 12px de recuo, ícone de 16px e 8px até
// o valor.
//
// O ícone é normalizado porque o default do nosso `Icon` é 5 (20px) e o DS usa 16 nos campos — é o
// que torna a geometria determinística em vez de depender do `size` que a app passou. Descendente e
// não filho direto (`[&_svg]`, não `[&>svg]`) porque a app pode embrulhar o ícone: o campo de busca
// põe um `<button>` no meio. E `h-4 w-4` em vez de `size-4`, porque `size-*` só existe do Tailwind
// 3.4 em diante e há app desta linha pinada em 3.3.0, onde a classe não seria gerada.
//
// Os 8px até o valor saem do padding do **campo**, não do adorno: um filho `w-full` — o botão do
// campo de busca — ocuparia a caixa de conteúdo inteira e comeria um padding posto aqui.
//
// `shrink-0` porque o adorno é item flex: sem ele o `w-7` é só uma base e o navegador comprime a
// caixa quando o campo é estreito, levando a geometria junto.
const borderlessKomeaIcon = 'komea:[&_svg]:h-4 komea:[&_svg]:w-4'

export const prefixBorderlessKomeaClasses = `komea:w-7 komea:shrink-0 komea:justify-start komea:pl-3 ${borderlessKomeaIcon}`

export const sufixBorderlessKomeaClasses = `komea:w-7 komea:shrink-0 komea:justify-end komea:pr-3 ${borderlessKomeaIcon}`

export const prefixClasses = `${adornmentClasses} rounded-l left-0`

export const sufixClasses = `${adornmentClasses} rounded-r right-0`

export const variantClasses = {
  default: 'komea:h-9 h-12',
  small: 'komea:h-8 h-10',
  large: 'komea:h-10 h-14',
  xlarge: 'h-24',
}
