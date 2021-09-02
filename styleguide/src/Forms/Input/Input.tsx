import React from 'react'

import { InputLabel, InputLabelProps } from '../InputLabel'
import { InputHelpText, InputHelpTextProps } from '../InputHelpText'
import {
  inputContainerDisabledClasses,
  inputContainerReadonlyClasses,
  errorBorderClasses,
  defaultBorderClasses,
  inputContainerClasses,
  variantClasses,
  startAdornmentClasses,
  endAdornmentClasses,
  focusClass,
} from '../commonStyles'

const InputComponent = (
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
    startAdornment,
    endAdornment,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const hasErrorState = hasError || !!errorMessage

  const startAdornmentClass = `${startAdornmentClasses} ${
    variantClasses[variant]
  } ${hasErrorState ? errorBorderClasses : ''}`

  const endAdornmentClass = `${endAdornmentClasses} ${
    variantClasses[variant]
  } ${hasErrorState ? errorBorderClasses : ''}`

  let inputContainerClass = `${inputContainerClasses} ${variantClasses[variant]}`
  if (disabled) {
    inputContainerClass += ` ${defaultBorderClasses} ${inputContainerDisabledClasses}`
  } else if (readOnly) {
    inputContainerClass += ` ${defaultBorderClasses} ${inputContainerReadonlyClasses}`
  } else if (hasErrorState) {
    inputContainerClass += ` ${errorBorderClasses}`
  } else {
    inputContainerClass += ` ${defaultBorderClasses}`
  }

  const inputClass = `w-full px-4 appearance-none shadow-none outline-none  bg-transparent -mt-px box-border ${focusClass} ${
    hasErrorState ? errorBorderClasses : defaultBorderClasses
  } ${startAdornment ? 'border-l' : ''} ${endAdornment ? 'border-r' : ''} ${
    variantClasses[variant]
  }`

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
      <div className={inputContainerClass}>
        {startAdornment && (
          <span className={startAdornmentClass}>{startAdornment}</span>
        )}
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
        {endAdornment && (
          <span className={endAdornmentClass}>{endAdornment}</span>
        )}
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
  /**
   * Custom element to append at the start of input
   * */
  startAdornment?: React.ReactNode | string
  /**
   * Custom element to append at the end of input
   * */
  endAdornment?: React.ReactNode | string
}
