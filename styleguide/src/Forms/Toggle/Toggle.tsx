import React from 'react'

const ToggleComponent = (
  { label, id, name, onChange, checked, disabled, ...props }: ToggleProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const [isChecked, setIsChecked] = React.useState(checked || false)

  React.useEffect(() => {
    setIsChecked(!!checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    setIsChecked(event.target.checked)
    onChange && onChange(event)
  }

  const toggleContainerDisabledClasses = `${
    disabled ? 'pointer-events-none' : ''
  } relative`

  const toggleBackgroundClasses = `block border border-card-stroke w-[53px] h-8 rounded-full
  ${disabled ? ' bg-base-3' : ' bg-base-1'} `

  const toggleCircleClasses = `transform  ${
    !isChecked
      ? 'translate-x-0 bg-inverted-2'
      : 'translate-x-full ml-px ' + (disabled ? 'bg-base-1' : 'bg-primary')
  } absolute left-[6px] top-[6px] w-5 h-5 rounded-full transition`

  const toggleLabelClasses = `ml-2 text-inverted-1 text-f6 tracking-4 label`

  return (
    <label htmlFor={inputId} className={`flex items-center cursor-pointer`}>
      <div className={`${toggleContainerDisabledClasses}`}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        <div className={toggleBackgroundClasses}></div>
        <div className={toggleCircleClasses}></div>
      </div>
      <div className={toggleLabelClasses}>{label}</div>
    </label>
  )
}

const ToggleWithFowardRef = React.forwardRef(ToggleComponent)
export const Toggle = React.memo(ToggleWithFowardRef)

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
