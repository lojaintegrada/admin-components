export const inputPlaceholderClasses = 'placeholder-on-base-2'

export const inputDisabledClasses =
  'bg-base-3 pointer-events-none text-on-base-2'

export const inputReadonlyClasses = 'bg-base-2'

export const inputErrorClasses = 'border-danger focus:border-danger'

export const inputDefaultClasses = 'border-card-stroke'

export const inputFocusClasses = 'focus:border-inverted-1'

export const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border px-4 rounded text-on-base text-sm tracking-4 min-w-0 w-full transition-border duration-75 ${inputFocusClasses} ${inputPlaceholderClasses}`

export const inputStartAdornmentClass = `border-l-0 rounded-l-none`

export const inputEndAdornmentClass = `border-r-0 rounded-r-none`

export const adornmentDefaultBorderClasses = 'border-card-stroke'

export const adornmentFocusBorderClasses = 'border-inverted-1'

export const adornmentErrorBorderClasses = 'border-danger'

const adornmentClass = `flex justify-center items-center relative w-16 border text-f6 text-inverted-2 tracking-4`

export const startAdornmentClasses = `${adornmentClass} rounded-l left-0`

export const endAdornmentClasses = `${adornmentClass} rounded-r right-0`

export const variantClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}
