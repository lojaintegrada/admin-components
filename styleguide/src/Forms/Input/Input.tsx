import React from 'react'

import { InputLabel, InputLabelProps } from './../InputLabel'

const inputPlaceholderClasses = 'placeholder-on-base-2'
const inputDisabledClasses = 'bg-base-3 pointer-events-none text-on-base-2'
const inputReadonlyClasses = 'bg-base-2'
const inputErrorClasses = 'relative outline-none border-danger'
const inputFocusClasses = 'focus:border-primary'
const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border border-card-stroke px-4 rounded text-on-base text-sm tracking-4 min-w-0 w-full transition-border duration-75 ${inputFocusClasses} ${inputPlaceholderClasses}`
const variantClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}

export const Input = React.memo(({ className = '', title, hasError = false, required= false, id, name, variant = 'default', ...props }: InputProps) => {
  const inputId = id || name
  const sizeVariantClass = React.useMemo(() => variantClasses[variant], [variant])
  
  const LabelComponent = (
    <InputLabel
      title={title}
      required={required}
      hasError={hasError}
      htmlFor={inputId}
    />
  )

  return (
    <div className={`form-group flex flex-col mb-5 ${className}`}>
      {LabelComponent}
      <div className="flex w-full">
        <input {...props} className={`${inputClasses} ${sizeVariantClass}`} placeholder="lalalal ldfdfds" />
      </div>
    </div>
  )
})

export interface InputProps extends InputLabelProps, React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Custom class name
   * */
  className?: string
  /** Input size
   * @default default
   * */
  variant?: 'default' | 'small' | 'large' | 'xlarge'
}
