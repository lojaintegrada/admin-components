import React from 'react'
import { InputHelpText, InputHelpTextProps } from '../InputHelpText'

const CheckboxComponent = (
  {
    className = '',
    label,
    id,
    name,
    onChange,
    checked,
    disabled,
    indeterminate = false,
    boxAlign = 'center',
    helpText,
    hasError = false,
    errorMessage,
    ...props
  }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const inputId = id || name
  const [isChecked, setIsChecked] = React.useState(!!checked || false)
  const [isIndeterminate, setIsIndeterminate] = React.useState(
    !!indeterminate || false
  )
  const isCenterBoxAlign = boxAlign === 'center'
  const hasErrorState = hasError || !!errorMessage

  React.useEffect(() => {
    setIsChecked(!!checked)
    if (checked) setIsIndeterminate(false)
  }, [checked])

  React.useEffect(() => {
    setIsIndeterminate(!!indeterminate)
    if (indeterminate) setIsChecked(false)
    if (inputRef.current) inputRef.current.indeterminate = !!indeterminate
  }, [indeterminate])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    setIsChecked(event.target.checked)
    setIsIndeterminate(false)
    onChange && onChange(event)
  }
  const checkboxIconClasses = `transition duration-200 ease-in-out ${
    isChecked || isIndeterminate ? 'scale-100' : 'scale-0'
  }`

  const checkboxIconContainerClasses = `border border-card-stroke transition duration-200 ease-in-out
    ${
      disabled
        ? 'bg-base-4'
        : isChecked || isIndeterminate
        ? 'bg-primary border-primary'
        : 'bg-base-1'
    }
    ${isCenterBoxAlign ? 'items-center' : ''}
    rounded w-4 h-4 flex justify-center m-px
  `

  const checkboxLabelClasses = `ml-1 input-label text-f6 tracking-4 leading-6 ${
    hasErrorState ? 'text-danger' : disabled ? 'text-inverted-2' : ''
  }`

  const alignOptions = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  }

  const HelpTextComponent = (
    <InputHelpText
      helpText={errorMessage || helpText}
      hasError={hasErrorState}
      className="mt-2"
    />
  )

  return (
    <div className={`inline-block ${className}`}>
      <label
        htmlFor={inputId}
        className={`inline-flex ${alignOptions[boxAlign]} cursor-pointer`}
      >
        <span className="relative rounded z-50 flex items-center justify-center focus-within:ring-2 ring-focus">
          <input
            ref={ref || inputRef}
            type="checkbox"
            id={inputId}
            name={name}
            className="opacity-0 absolute h-4 w-4 z-50 cursor-pointer"
            checked={isChecked}
            onChange={handleChange}
            disabled={!!disabled}
            {...props}
          />
          <div className={checkboxIconContainerClasses}>
            <svg
              width="12"
              height="12"
              viewBox={`0 0 10 ${isChecked ? '10' : '2'}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={checkboxIconClasses}
            >
              {isChecked || (isChecked && disabled) ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33353 8.86651C3.10353 8.86651 2.88353 8.77518 2.72087 8.61318L0.0541992 5.94651L1.27953 4.72051L3.31753 6.75851L9.03887 0.736511L10.2949 1.93051L3.96153 8.59718C3.80087 8.76651 3.5782 8.86384 3.34487 8.86651H3.33353Z"
                  fill="white"
                />
              ) : (
                isIndeterminate && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.99998H10V0.333313H0V1.99998Z"
                    fill="white"
                  />
                )
              )}
            </svg>
          </div>
        </span>
        <span className={checkboxLabelClasses}>{label}</span>
      </label>
      {HelpTextComponent}
    </div>
  )
}

const CheckboxWithFowardRef = React.forwardRef(CheckboxComponent)
export const Checkbox = React.memo(CheckboxWithFowardRef)

export interface CheckboxProps
  extends InputHelpTextProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Text label of the checkbox
   * */
  label?: string | React.ReactNode
  /**
   * Checkbox box isn't selected nwither unselected
   * @default false
   * */
  indeterminate?: boolean
  /**
   * Item align
   * @default 'center'
   * */
  boxAlign?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /**
   * Error message to display
   * */
  errorMessage?: string
}
