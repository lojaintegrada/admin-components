import React from 'react'

export const InputLabel = React.memo(({ className = '', title, hasError = false, required= false, htmlFor }: InputLabelProps) => {
  if (!title) return null
  return (
    <label
      className={`text-f6 tracking-4 leading-6 font-semibold inline-flex mb-0.5 ${hasError ? 'text-danger' : 'text-on-base'} ${className}`}
      htmlFor={htmlFor}
    >
      {`${title}${required ? '*' : ''}`}
    </label>
  )
})

export interface InputLabelProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Label title
   * */
  title?: string
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
