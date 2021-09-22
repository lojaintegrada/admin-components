import React from 'react'

const statusTypes = {
  default: 'bg-inverted-2',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  dangerLight: 'bg-danger-light',
}

const DescriptionComponent = ({
  description,
  inverted,
}: Pick<StatusProps, 'description' | 'inverted'>) =>
  (description && (
    <span
      className={`text-sm whitespace-normal break-words ${
        inverted ? 'mr-2' : 'ml-2'
      }`}
    >
      {description}
    </span>
  )) ||
  null

const StatusComponent = ({
  type = 'default',
  description,
  inverted = false,
}: StatusProps) => {
  return (
    <div className="indicator-status inline-block whitespace-nowrap min-w-0">
      {inverted && (
        <DescriptionComponent description={description} inverted={inverted} />
      )}
      <span
        className={`inline-block rounded-full ${statusTypes[type]}`}
        style={{
          padding: '0.313rem', // 5px
        }}
      />
      {!inverted && (
        <DescriptionComponent description={description} inverted={inverted} />
      )}
    </div>
  )
}

export const Status = React.memo(StatusComponent)

export interface StatusProps {
  /** Status color
   * @default default
   * */
  type: keyof typeof statusTypes
  /**
   * Status additional text
   * */
  description?: string
  /** Invert icon and text position
   * @default false
   * */
  inverted?: boolean
}
