import React from 'react'

const FloatingLabelInputComponent = (
  {
    prefix,
    sufix,
    id,
    type = 'text',
    placeholder = ' ',
    label,
    showLabel = true,
    ...props
  }: FloatingLabelInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const peerFocusLabelClasses = `peer-focus:text-f7 peer-focus:-translate-y-4 ${
    prefix ? 'peer-focus:pl-0' : ''
  } `
  const peerPlaceholderShowLabelClasses = `${
    prefix ? 'peer-placeholder-shown:pl-8' : ''
  } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-f4 `
  const labelClassName = `cursor-text absolute text-f7 text-inverted-2 duration-300 transform -translate-y-4 top-5 z-10 origin-[0] ${peerFocusLabelClasses} ${peerPlaceholderShowLabelClasses}`

  const inputClassName = `block text-f4 pb-2.5 ${prefix ? 'pl-10' : ''} ${
    sufix ? 'pr-10' : ''
  } pt-5 w-full border-none appearance-none peer focus:outline-none`

  return (
    <div className="relative">
      {prefix && (
        <label
          htmlFor={id}
          className="adornment absolute left-0 top-5 w-8 h-8 flex items-center justify-start"
        >
          {prefix}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        className={inputClassName}
        placeholder={placeholder}
        {...props}
      />
      {showLabel && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      {sufix && (
        <label
          htmlFor={id}
          className="adornment absolute right-0 top-5 w-8 h-8 flex items-center justify-end"
        >
          {sufix}
        </label>
      )}
    </div>
  )
}

const InputWithFowardRef = React.forwardRef(FloatingLabelInputComponent)
export const FloatingLabelInput = React.memo(InputWithFowardRef)

export interface FloatingLabelInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'sufix'
  > {
  prefix?: React.ReactNode
  sufix?: React.ReactNode
  label?: string
  showLabel?: boolean
}
