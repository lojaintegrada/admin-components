import React from 'react'

import { InputLabel, InputLabelProps } from '../InputLabel'
import { InputHelpText, InputHelpTextProps } from '../InputHelpText'
import {
  inputDisabledClasses,
  inputReadonlyClasses,
  inputErrorClasses,
  inputDefaultClasses,
  inputClasses,
  variantClasses,
} from '../commonStyles'

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
          id={inputId}
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
