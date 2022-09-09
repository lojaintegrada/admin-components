import React from 'react'

const RadioButtonComponent = (
  {
    label,
    id,
    name,
    value,
    className = '',
    onChange,
    disabled = false,
    ...props
  }: RadioButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const inputId = id || name
  const toggleClasses = disabled
    ? `pointer-events-none border-card-stroke text-on-base-2 font-semibold peer-checked:bg-base-3`
    : `peer-checked:bg-primary cursor-pointer`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event)
  }

  return (
    <div
      className={`radioContainer relative inline-flex justify-center items-center text-f6 text-inverted-1 font-semibold mx-2`}
    >
      <label
        className={`${className} relative inline-flex justify-center items-center border border-base-4 rounded-full w-4 h-4 mr-1 m-auto focus-within:border-focus focus-within:border-2
        }`}
      >
        <input
          ref={ref}
          className={`absolute peer opacity-0 ${toggleClasses}`}
          type="radio"
          name={name}
          value={value}
          id={inputId}
          onChange={handleChange}
          {...props}
          disabled={disabled}
        />
        <span
          className={`checkmark rounded-full w-2 h-2 ${toggleClasses} peer-checked:inline-block`}
        ></span>
      </label>
      <label htmlFor={inputId} className={`radioLabel ${toggleClasses}`}>
        {label}
      </label>
    </div>
  )
}

const RadioButtonWithForwardRef = React.forwardRef(RadioButtonComponent)
export const RadioButton = React.memo(RadioButtonWithForwardRef)

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Custom id
   * */
  id?: string
  /**
   * Custom name
   * */
  name?: string
  /**
   * Custom value
   * */
  value?: string | number
  /**
   * Text label of the radio button
   * */
  label?: string | React.ReactNode
}
