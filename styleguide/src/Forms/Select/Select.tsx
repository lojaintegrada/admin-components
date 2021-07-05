import React from 'react'

import { InputLabel, InputLabelProps } from '../InputLabel'
import { InputHelpText, InputHelpTextProps } from '../InputHelpText'
import {
  inputDisabledClasses,
  inputErrorClasses,
  inputDefaultClasses,
  inputClasses,
  variantClasses,
} from '../commonStyles'
const selectClasses = `bg-no-repeat pr-8 cursor-pointer`
const withoutStyleClasses = `appearance-none bg-no-repeat mr-1 pr-4 cursor-pointer hover:text-inverted-1`

export const SelectComponent = (
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
    placeholder,
    options = [],
    withoutStyle = false,
    style,
    ...props
  }: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  const selectId = id || name
  const hasErrorState = hasError || !!errorMessage

  let inputClass = ``
  let backgroundPositionSize = '15px'
  if (withoutStyle) {
    inputClass += `${withoutStyleClasses}`
    backgroundPositionSize = '5px'
  } else {
    inputClass = `${inputClasses} ${selectClasses} ${variantClasses[variant]}`
    if (disabled) {
      inputClass += ` ${inputDefaultClasses} ${inputDisabledClasses}`
    } else if (hasErrorState) {
      inputClass += ` ${inputErrorClasses}`
    } else {
      inputClass += ` ${inputDefaultClasses}`
    }
  }

  const LabelComponent = (
    <InputLabel
      label={label}
      required={required}
      hasError={hasErrorState}
      htmlFor={selectId}
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
        <select
          ref={ref}
          id={selectId}
          name={name}
          required={required}
          disabled={disabled}
          className={inputClass}
          {...props}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" fill="%23607081"><path d="M7.11 0H.889a.667.667 0 00-.47 1.138l3.11 3.11a.661.661 0 00.943 0l3.11-3.11A.666.666 0 007.112 0z" /></svg>\')',
            backgroundSize: '8px',
            backgroundPosition: `calc(100% - ${backgroundPositionSize}) center`,
            ...style,
          }}
        >
          {placeholder && (
            <option value="" disabled={required}>
              {placeholder}
            </option>
          )}
          {options?.map((option) => {
            return (
              <option
                key={`${selectId}-${option.value}`}
                value={`${option.value}`}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
      {HelpTextComponent}
    </div>
  )
}

const SelectWithFowardRef = React.forwardRef(SelectComponent)
export const Select = React.memo(SelectWithFowardRef)

export interface SelectProps
  extends InputLabelProps,
    InputHelpTextProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Custom class name
   * */
  className?: string
  /** List of options to populate select
   * @default []
   */
  options?: {
    label: string | number
    value?: string | number | boolean
    disabled?: boolean
  }[]
  /** Input size
   * @default default
   * */
  variant?: 'default' | 'small' | 'large' | 'xlarge'
  /**
   * Error message to display
   * */
  errorMessage?: string
  /** Remove all styles, like borders and bgColor
   * @default false
   */
  withoutStyle?: boolean
}
