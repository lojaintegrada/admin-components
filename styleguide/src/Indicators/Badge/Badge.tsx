import React from 'react'

const badgeTypes = {
  neutral: 'bg-inverted-2',
  primary: 'bg-primary-dark',
  danger: 'bg-danger-dark',
  success: 'bg-success-dark',
  warning: 'bg-warning-dark',
}

const badgeSizes = {
  default: 'px-2 py-0.5',
  small: 'px-1',
}

const BadgeComponent = ({
  type = 'neutral',
  text,
  size = 'default',
}: BadgeProps) => {
  return (
    <div
      className={`badge inline-flex items-center justify-center rounded-full ${badgeTypes[type]} ${badgeSizes[size]}`}
    >
      <span className={`text-xs tracking-4 font-semibold text-base-1`}>
        {text}
      </span>
    </div>
  )
}

export const Badge = React.memo(BadgeComponent)

export interface BadgeProps {
  /** Badge color
   * @default neutral
   * */
  type: keyof typeof badgeTypes
  /**
   * Badge text
   * */
  text?: string
  /** Size of the badge
   * @default default
   * */
  size?: 'default' | 'small'
}
