import React from 'react'

const badgeTypes = {
  neutral: 'bg-inverted-2 text-base-1',
  neutralLight: 'bg-inverted-3 text-tertiary',
  primary: 'bg-primary-dark text-base-1',
  primaryLight: 'bg-primary-light text-primary-bold',
  danger: 'bg-danger-dark text-base-1',
  success: 'bg-success-dark text-base-1',
  warning: 'bg-warning-dark text-base-1',
  focus: 'bg-focus text-base-1',
}

const badgeRounded = {
  full: 'rounded-full',
  small: 'rounded',
  none: 'rounded-none',
}

const badgeSizes = {
  default: 'text-xs',
  small: 'text-[0.70rem]',
  xsmall: 'text-f8',
}

const badgeClasses = {
  default: 'px-2 py-0.5',
  small: 'px-1.5',
  xsmall: 'px-0.5 py-px',
}

const BadgeComponent = ({
  type = 'neutral',
  text,
  size = 'default',
  expanded = false,
  rounded = 'full',
}: BadgeProps) => {
  return (
    <div
      className={`badge items-center justify-center ${badgeRounded[rounded]} ${
        badgeClasses[size]
      } ${badgeTypes[type]} ${badgeSizes[size]} ${
        expanded ? 'flex w-full' : 'inline-flex'
      }`}
    >
      <span className="badgeText tracking-4 font-semibold">{text}</span>
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
  /**
   * Style of rounded corners
   * */
  rounded?: keyof typeof badgeRounded
}
