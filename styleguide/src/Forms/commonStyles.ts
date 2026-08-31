export const inputPlaceholderClasses = 'placeholder-on-base-2'

export const inputContainerDisabledClasses =
  '!bg-base-3 !pointer-events-none !text-on-base-2'

export const inputContainerReadonlyClasses = '!bg-base-2'

export const errorBorderClasses =
  'border-danger focus:border-danger komea:focus:ring-danger/20'

export const defaultBorderClasses = 'border-card-stroke komea:border-input-stroke'

export const focusClass = 'focus:border-inverted-1'

export const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border px-4 rounded text-on-base text-sm min-w-0 w-full transition-border duration-75 komea:border-input-stroke komea:px-3 komea:shadow-sm komea:text-body-large md:komea:text-body komea:focus:border-focus komea:focus:ring-[3px] komea:focus:ring-focus/50 ${focusClass} ${inputPlaceholderClasses}`

export const inputContainerClasses = `flex focus-within:border-inverted-1 bg-base-1 border rounded text-on-base text-sm min-w-0 w-full transition-border duration-75 overflow-hidden komea:border-input-stroke komea:shadow-sm komea:text-body-large md:komea:text-body komea:focus-within:border-focus komea:focus-within:ring-[3px] komea:focus-within:ring-focus/50 ${inputPlaceholderClasses}`

const adornmentClasses = `adornment flex justify-center items-center relative w-16 text-f6 text-inverted-2 -mt-px`

export const prefixClasses = `${adornmentClasses} rounded-l left-0`

export const sufixClasses = `${adornmentClasses} rounded-r right-0`

export const variantClasses = {
  default: 'komea:h-9 h-12',
  small: 'komea:h-8 h-10',
  large: 'komea:h-10 h-14',
  xlarge: 'h-24',
}
