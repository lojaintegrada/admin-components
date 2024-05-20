import React from 'react'

const ToggleComponent = (
  { label, id, name, onChange, checked, disabled, ...props }: ToggleProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const [isChecked, setIsChecked] = React.useState(checked || false)

  const toggleStatusText = disabled ? 'disabled' : 'enabled'
  const toggleCheckText = isChecked ? 'checked' : 'unchecked'

  React.useEffect(() => {
    setIsChecked(!!checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    setIsChecked(event.target.checked)
    onChange && onChange(event)
  }

  const toggleClasses = {
    background: {
      checked: {
        enabled: 'bg-primary border-primary',
        disabled: 'bg-base-3 border-card-stroke',
      },
      unchecked: {
        enabled: 'bg-base-1 border-card-stroke',
        disabled: 'bg-base-3 border-card-stroke',
      },
    },
    circle: {
      checked: {
        enabled: 'translate-x-full ml-px bg-base-1',
        disabled: 'translate-x-full ml-px bg-base-1',
      },
      unchecked: {
        enabled: 'translate-x-0 bg-inverted-2',
        disabled: 'translate-x-0 bg-base-1',
      },
    },
  }

  const toggleContainerDisabledClasses = `${
    disabled ? 'pointer-events-none' : ''
  } relative`

  const toggleBackgroundClasses = `block border w-[53px] h-8 rounded-full ${toggleClasses.background[toggleCheckText][toggleStatusText]} transition`

  const toggleCircleClasses = `transform  ${toggleClasses.circle[toggleCheckText][toggleStatusText]} absolute left-[6px] top-[6px] w-5 h-5 rounded-full transition`

  const toggleLabelClasses = `ml-2 text-inverted-1 text-f6 tracking-4 label`

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center cursor-pointer`}
    >
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

const ToggleWithForwardRef = React.forwardRef(ToggleComponent)
export const Toggle = React.memo(ToggleWithForwardRef)

export interface ToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode | string
}
