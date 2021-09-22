import React from 'react'

const alertTypes = {
  success: 'bg-success-light border-success',
  warning: 'bg-warning-light border-warning',
  danger: 'bg-danger-light border-danger',
  info: 'bg-base-1 border-inverted-2',
  primary: 'bg-primary-light border-primary',
}

const AlertComponent = ({ type = 'info', content }: AlertProps) => {
  return (
    <div
      className={`alert border border-l-4 py-3 pl-5 pr-4 rounded text-f6 tracking-4 leading-5 font-semibold w-full relative flex items-center text-on-base ${alertTypes[type]}`}
    >
      {content}
    </div>
  )
}

export const Alert = React.memo(AlertComponent)

export interface AlertProps {
  /** Alert color
   * @default info
   * */
  type?: keyof typeof alertTypes
  /**
   * Alert content
   * */
  content?: string | React.ReactNode
  /**
   * Need to implement
   * */
  // onClose
  // icon
}
