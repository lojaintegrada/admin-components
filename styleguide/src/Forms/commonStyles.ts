export const inputPlaceholderClasses = 'placeholder-on-base-2'

export const inputContainerDisabledClasses =
  'bg-base-3 pointer-events-none text-on-base-2'

export const inputContainerReadonlyClasses = 'bg-base-2'

export const errorBorderClasses = 'border-danger focus:border-danger'

export const defaultBorderClasses = 'border-card-stroke'

export const focusClass = 'focus:border-inverted-1'

export const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border px-4 rounded text-on-base text-sm tracking-4 min-w-0 w-full transition-border duration-75 ${focusClass} ${inputPlaceholderClasses}`

export const inputContainerClasses = `flex w-full focus-within:border-inverted-1 bg-base-1 border rounded text-on-base text-sm tracking-4 min-w-0 w-full transition-border duration-75 ${inputPlaceholderClasses}`

const adornmentClasses = `flex justify-center items-center relative w-16 text-f6 text-inverted-2 tracking-4`

export const startAdornmentClasses = `${adornmentClasses} rounded-l left-0`

export const endAdornmentClasses = `${adornmentClasses} rounded-r right-0`

export const variantClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}
