import React from 'react'

const CheckboxComponent = (
  { label, id, name, onChange, checked, disabled, ...props }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputId = id || name
  const [isChecked, setIsChecked] = React.useState(!!checked || false)

  React.useEffect(() => {
    setIsChecked(!!checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.checked)
    if (disabled) return
    setIsChecked(event.target.checked)
    onChange && onChange(event)
  }
  const checkboxIconClasses = `transition duration-200 ease-in-out ${
    isChecked ? 'scale-100' : 'scale-0'
  }`

  const checkboxIconContainerClasses = `border border-card-stroke transition duration-200 ease-in-out ${
    isChecked ? 'bg-primary border-primary' : 'bg-base-1'
  }  rounded w-4 h-4 flex justify-center items-center`

  const checkboxLabelClasses = `${
    isChecked ? 'font-semibold' : 'font-normal'
  } ml-2 duration-200 transition ease-out`

  return (
    <label htmlFor={inputId} className="flex items-center">
      <input
        ref={ref}
        type="checkbox"
        id={inputId}
        className="opacity-0 absolute h-4 w-4 z-50"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <div className={checkboxIconContainerClasses}>
        <svg
          width="11"
          height="9"
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={checkboxIconClasses}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33353 8.86651C3.10353 8.86651 2.88353 8.77518 2.72087 8.61318L0.0541992 5.94651L1.27953 4.72051L3.31753 6.75851L9.03887 0.736511L10.2949 1.93051L3.96153 8.59718C3.80087 8.76651 3.5782 8.86384 3.34487 8.86651H3.33353Z"
            fill="white"
          />
        </svg>
      </div>
      <span className={checkboxLabelClasses}>{label}</span>
    </label>
  )
}

const CheckboxWithFowardRef = React.forwardRef(CheckboxComponent)
export const Checkbox = React.memo(CheckboxWithFowardRef)

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
