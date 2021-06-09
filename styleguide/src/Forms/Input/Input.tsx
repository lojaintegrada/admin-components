import React from 'react'

import { InputLabel, InputLabelProps } from './../InputLabel'
import { InputHelpText, InputHelpTextProps } from './../InputHelpText'

const inputPlaceholderClasses = 'placeholder-on-base-2'
const inputDisabledClasses = 'bg-base-3 pointer-events-none text-on-base-2'
const inputReadonlyClasses = 'bg-base-2'
const inputErrorClasses = 'border-danger focus:border-danger'
const inputDefaultClasses = 'border-card-stroke'
const inputFocusClasses = 'focus:border-inverted-1'
const inputClasses = `appearance-none shadow-none outline-none bg-base-1 border px-4 rounded text-on-base text-sm tracking-4 min-w-0 w-full transition-border duration-75 ${inputFocusClasses} ${inputPlaceholderClasses}`
const variantClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}

export const InputComponent = (
  {
    className = '',
    label,
    helpText,
    hasError = false,
    errorMessage,
    required = false,
    id,
    name,
    variant = 'default',
    disabled,
    readOnly,
    type = 'text',
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const hasErrorState = hasError || !!errorMessage

  let inputClass = `${inputClasses} ${variantClasses[variant]}`
  if (disabled) {
    inputClass += ` ${inputDefaultClasses} ${inputDisabledClasses}`
  } else if (readOnly) {
    inputClass += ` ${inputDefaultClasses} ${inputReadonlyClasses}`
  } else if (hasErrorState) {
    inputClass += ` ${inputErrorClasses}`
  } else {
    inputClass += ` ${inputDefaultClasses}`
  }

  const LabelComponent = (
    <InputLabel
      label={label}
      required={required}
      hasError={hasErrorState}
      htmlFor={inputId}
      className="mb-1"
    />
  )

  const HelpTextComponent = (
    <InputHelpText
      helpText={errorMessage || helpText}
      hasError={hasErrorState}
      className="mt-2"
    />
  )

  return (
    <div className={`form-group flex flex-col ${className}`}>
      {LabelComponent}
      <div className="flex w-full">
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          className={inputClass}
          {...props}
        />
      </div>
      {HelpTextComponent}
    </div>
  )
}

const InputWithFowardRef = React.forwardRef(InputComponent)
export const Input = React.memo(InputWithFowardRef)

export interface InputProps
  extends InputLabelProps,
    InputHelpTextProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Custom class name
   * */
  className?: string
  /** Input size
   * @default default
   * */
  variant?: 'default' | 'small' | 'large' | 'xlarge'
  /**
   * Error message to display
   * */
  errorMessage?: string
}
