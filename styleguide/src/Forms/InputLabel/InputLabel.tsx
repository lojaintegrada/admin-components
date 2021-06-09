import React from 'react'

export const InputLabel = React.memo(
  ({
    className = '',
    label,
    hasError = false,
    required = false,
    htmlFor,
  }: InputLabelProps) => {
    if (!label) return null
    return (
      <label
        className={`text-f6 tracking-4 leading-6 font-semibold inline-flex mb-0.5 ${
          hasError ? 'text-danger' : 'text-on-base'
        } ${className}`}
        htmlFor={htmlFor}
      >
        {`${label}${required ? '*' : ''}`}
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
  /** Should render error state
   * @default false
   * */
  hasError?: boolean
  /** Input ir required
   * @default false
   * */
  required?: boolean
  /**
   * Input this label is for
   * */
  htmlFor?: string
}
