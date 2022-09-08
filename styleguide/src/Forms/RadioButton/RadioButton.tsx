import React from 'react'

const RadioButtonComponent = (
  {
    label,
    id,
    name,
    className,
    onChange,
    onFocus,
    onBlur,
    focus = false,
    checked = false,
    disabled,
    ...props
  }: RadioButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const [isChecked, setChecked] = React.useState(checked)
  const [hasFocus, setFocus] = React.useState(focus)

  const toggleClasses = disabled
    ? `pointer-events-none border-card-stroke text-on-base-2 font-semibold peer-checked:bg-base-3`
    : `peer-checked:bg-primary cursor-pointer`

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    setChecked(event.target.checked)
    onChange && onChange(event)
  }
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true)
    onFocus && onFocus(event)
  }
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false)
    onBlur && onBlur(event)
  }

  return (
    <div
      className={`radioContainer relative inline-flex justify-center items-center text-f6 text-inverted-1 font-semibold`}
    >
      <input
        className="absolute opacity-0 w-full h-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={`${className} relative inline-flex justify-center items-center border border-base-4 rounded-full w-4 h-4 mr-1 ${
          hasFocus ? 'border-focus border-2' : ''
        }`}
      >
        <input
          ref={ref}
          className={`absolute peer opacity-0 ${toggleClasses}`}
          type="radio"
          name={name}
          id={id}
          checked={isChecked}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        <span
          className={`checkmark rounded-full w-2 h-2 ${toggleClasses} peer-checked:inline-block`}
        ></span>
      </label>
      <div className={`radioLabel ${toggleClasses}`}>{label}</div>
    </div>
  )
}

const RadioButtonWithForwardRef = React.forwardRef(RadioButtonComponent)
export const RadioButton = React.memo(RadioButtonWithForwardRef)

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  focus: boolean
}
