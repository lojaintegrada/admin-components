import React from 'react'

const badgeTypes = {
  neutral: 'bg-inverted-2',
  neutralLight: 'bg-inverted-3',
  primary: 'bg-primary-dark',
  danger: 'bg-danger-dark',
  success: 'bg-success-dark',
  warning: 'bg-warning-dark',
  focus: 'bg-focus',
}

const badgeSizes = {
  default: 'px-2 py-0.5 text-xs',
  small: 'px-1.5 text-[0.70rem]',
}

const BadgeComponent = ({
  type = 'neutral',
  text,
  size = 'default',
  expanded = false,
}: BadgeProps) => {
  return (
    <div
      className={`badge items-center justify-center rounded-full ${
        badgeTypes[type]
      } ${badgeSizes[size]} ${expanded ? 'flex w-full' : 'inline-flex'}`}
    >
      <span
        className={`badgeText tracking-4 font-semibold ${
          type == 'neutralLight' ? 'text-tertiary' : 'text-base-1'
        }`}
      >
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
  type?: keyof typeof badgeTypes
  /**
   * Badge text
   * */
  text?: string
  /** Size of the badge
   * @default default
   * */
  size?: keyof typeof badgeSizes
  /**
   * Enlarge width of the badge
   * */
  expanded?: boolean
}
