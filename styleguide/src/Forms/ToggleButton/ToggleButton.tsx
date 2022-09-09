import React from 'react'

const ToggleButtonComponent = (
  {
    value,
    className,
    id,
    children,
    disabled,
    defaultCheckedIndex = 0,
    onChange,
    ...props
  }: ToggleButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const toggleClasses = disabled
    ? `pointer-events-none bg-base-3 border-card-stroke text-on-base-2`
    : `peer-checked:bg-primary peer-checked:border-primary peer-checked:text-base-1 text-primary`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        <label className="relative inline-flex justify-center items-center h-12">
          <input
            ref={ref}
            className="peer absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0 z-20"
            type="radio"
            id={id}
            name="toggleButton"
            value={value}
            onChange={handleChange}
            {...props}
            defaultChecked={defaultCheckedIndex === index ? true : false}
            disabled={disabled}
          />
          <div
            className={`${className} checkmark ${toggleClasses} inline-flex justify-center items-center ${borderRadius} py-4 px-6 border-y border-l h-12`}
          >
            {item}
          </div>
        </label>
      </li>
    )
  })

  return (
    <div
      className={`${className} inline-flex justify-center items-center h-12 ${toggleClasses}} rounded text-f6 tracking-4 font-semibold`}
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
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Custom id
   * */
  id?: string
  /**
   * Custom value
   * */
  value?: string | number
  /**
   * Set icon or an text element to be a children
   * */
  children: React.ReactNode[]
  /**
   * Set element should be a checked
   * */
  defaultCheckedIndex: number
}
