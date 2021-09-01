import React, { useState } from 'react'

import { InputLabel, InputLabelProps } from '../InputLabel'
import { InputHelpText, InputHelpTextProps } from '../InputHelpText'
import {
  inputDisabledClasses,
  inputReadonlyClasses,
  inputErrorClasses,
  inputDefaultClasses,
  inputStartAdornmentClass,
  inputEndAdornmentClass,
  inputClasses,
  variantClasses,
  startAdornmentClasses,
  endAdornmentClasses,
  adornmentFocusBorderClasses,
  adornmentErrorBorderClasses,
  adornmentDefaultBorderClasses,
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
    startAdornment = undefined,
    endAdornment = undefined,
    onFocus = undefined,
    onBlur = undefined,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const hasErrorState = hasError || !!errorMessage

  const defaultStartAdornmentClass = `${startAdornmentClasses} ${
    variantClasses[variant]
  } ${
    hasErrorState ? adornmentErrorBorderClasses : adornmentDefaultBorderClasses
  }`
  const [startAdornmentClass, setStartAdornmentClass] = useState(
    defaultStartAdornmentClass
  )

  const defaultEndAdornmentClass = `${endAdornmentClasses} ${
    variantClasses[variant]
  } ${
    hasErrorState ? adornmentErrorBorderClasses : adornmentDefaultBorderClasses
  }`
  const [endAdornmentClass, setEndAdornmentClass] = useState(
    defaultEndAdornmentClass
  )

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

  if (startAdornment) {
    if (hasErrorState) {
      inputClass += ` ${inputStartAdornmentClass}`
    } else {
      inputClass += ` ${inputStartAdornmentClass} ${inputDefaultClasses}`
    }
  } else if (endAdornment) {
    if (hasErrorState) {
      inputClass += ` ${inputEndAdornmentClass}`
    } else {
      inputClass += ` ${inputEndAdornmentClass} ${inputDefaultClasses}`
    }
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (startAdornment) {
      setStartAdornmentClass(
        `${defaultStartAdornmentClass} ${adornmentFocusBorderClasses}`
      )
    } else if (endAdornment) {
      setEndAdornmentClass(
        `${defaultEndAdornmentClass} ${adornmentFocusBorderClasses}`
      )
    }
    onFocus && onFocus(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (startAdornment) {
      setStartAdornmentClass(`${defaultStartAdornmentClass}`)
    } else if (endAdornment) {
      setEndAdornmentClass(`${defaultEndAdornmentClass}`)
    }
    onBlur && onBlur(e)
  }

  return (
    <div className={`form-group flex flex-col ${className}`}>
      {LabelComponent}
      <div className="flex w-full">
        {startAdornment && (
          <div className={startAdornmentClass}>{startAdornment}</div>
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {endAdornment && (
          <div className={endAdornmentClass}>{endAdornment}</div>
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
