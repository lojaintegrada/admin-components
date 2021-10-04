import React from 'react'

export const InputLabel = React.memo(
  ({
    className = '',
    label,
    labelComplement,
    hasError = false,
    required = false,
    htmlFor,
  }: InputLabelProps) => {
    if (!label) return null
    return (
      <label
        className={`input-label text-f6 tracking-4 leading-6 font-semibold inline-flex items-center mb-0.5 ${
          hasError ? 'text-danger' : 'text-on-base'
        } ${className}`}
        htmlFor={htmlFor}
      >
        {`${label}${required ? '*' : ''}`}
        {labelComplement && <span className="ml-2">{labelComplement}</span>}
      </label>
    )
  }
)

export interface InputLabelProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Label title
   * */
  label?: string
  /**
   * Complement to label title
   * */
  labelComplement?: string | React.ReactNode
  /** Should render error state
   * @default false
   * */
  hasError?: boolean
  /** Input is required
   * @default false
   * */
  required?: boolean
  /**
   * Input this label is for
   * */
  htmlFor?: string
}
