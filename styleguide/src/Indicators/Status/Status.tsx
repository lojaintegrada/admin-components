import React from 'react'
import './../../tailwind.css'

const statusTypes = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
}

const StatusComponent = ({ type = 'success', description }: StatusProps) => {
  return (
    <div className="inline-block whitespace-nowrap min-w-0">
      <span
        className={`inline-block rounded-full ${statusTypes[type]}`}
        style={{
          padding: '0.313rem', // 5px
        }}
      />
      {description && (
        <span className="text-sm ml-2 whitespace-normal break-words">
          {description}
        </span>
      )}
    </div>
  )
}

export const Status = React.memo(StatusComponent)

export interface StatusProps {
  /** Status color
   * @default success
   * */
  type: keyof typeof statusTypes
  /**
   * Status additional text
   * */
  description?: string
}
