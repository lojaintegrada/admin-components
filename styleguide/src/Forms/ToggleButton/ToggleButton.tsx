import React from 'react'

const ToggleButtonComponent = (
  {
    children,
    disabled,
    onChange,
    defaultCheckedIndex = 'toggle-btn-0',
    ...props
  }: ToggleButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const [checked, setChecked] = React.useState(defaultCheckedIndex)

  const toggleClasses = disabled
    ? `pointer-events-none bg-base-3 border-card-stroke text-on-base-2`
    : `peer-checked:bg-primary peer-checked:border-primary peer-checked:text-base-1 text-primary`

  const isChecked = (value: string): boolean => checked === value

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.currentTarget.value)
    onChange && onChange(e)
  }

  const toggleItems = children.map((item, index) => {
    const borderRadius =
      index === 0
        ? 'rounded-l'
        : children.length - 1 === index
        ? 'border-r rounded-r'
        : ''
    return (
      <li
        key={`toggle-btn-[${index}]`}
        className="inline-flex justify-center items-center h-12"
      >
        <label
          htmlFor={`toggle-btn-${index}`}
          className="relative inline-flex justify-center items-center h-12"
        >
          <input
            ref={ref}
            className="peer absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0 z-20"
            type="radio"
            value={`toggle-btn-${index}`}
            checked={isChecked(`toggle-btn-${index}`)}
            onChange={handleChange}
            {...props}
          />
          <div
            className={`checkmark ${toggleClasses} inline-flex justify-center items-center ${borderRadius} py-4 px-6 border-y border-l h-12`}
          >
            {item}
          </div>
        </label>
      </li>
    )
  })

  return (
    <div
      className={`inline-flex justify-center items-center h-12 ${toggleClasses}} rounded text-f6 tracking-4 font-semibold`}
    >
      <ul className="list-none inline-flex justify-center items-center h-12">
        {toggleItems}
      </ul>
    </div>
  )
}

const ToggleButtonWithForwardRef = React.forwardRef(ToggleButtonComponent)
export const ToggleButton = React.memo(ToggleButtonWithForwardRef)

export interface ToggleButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children:
    | React.ReactNode[]
    | ((props: ToggleButtonProps) => React.ReactNode)[]

  defaultCheckedIndex: string
}
