import React from 'react'

export const InputHelpText = React.memo(
  ({ className = '', helpText, hasError = false }: InputHelpTextProps) => {
    if (!helpText) return null
    return (
      <div
        className={`input-help-text text-xs tracking-4 leading-4 ${
          hasError ? 'text-danger' : 'text-on-base-2'
        } ${className}`}
      >
        {helpText}
      </div>
    )
  }
)

export interface InputHelpTextProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Help text
   * */
  helpText?: string
  /** Should render error state
   * @default false
   * */
  hasError?: boolean
}
