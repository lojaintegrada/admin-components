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
  prefixClasses,
  sufixClasses,
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
    prefix,
    sufix,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const hasErrorState = hasError || !!errorMessage

  const prefixClass = `${prefixClasses} ${variantClasses[variant]} ${
    hasErrorState ? errorBorderClasses : ''
  }`

  const sufixClass = `${sufixClasses} ${variantClasses[variant]} ${
    hasErrorState ? errorBorderClasses : ''
  }`

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
  } ${prefix ? 'border-l' : ''} ${sufix ? 'border-r' : ''} ${
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
        {prefix && <span className={prefixClass}>{prefix}</span>}
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
        {sufix && <span className={sufixClass}>{sufix}</span>}
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
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
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
  prefix?: React.ReactNode | string | null
  /**
   * Custom element to append at the end of input
   * */
  sufix?: React.ReactNode | string | null
}
