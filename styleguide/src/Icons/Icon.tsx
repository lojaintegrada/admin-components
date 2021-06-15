import React, { FunctionComponent } from 'react'
import { icons } from './icons-path'

const iconSizes = {
  1: 'h-1 w-1',
  2: 'h-2 w-2',
  3: 'h-3 w-3',
  4: 'h-4 w-4',
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  7: 'h-7 w-7',
  8: 'h-8 w-8',
  9: 'h-9 w-9',
  10: 'h-10 w-10',
}

export const Icon: FunctionComponent<IconProps> = React.memo(
  ({ icon, block = false, size = 5, className }: IconProps) => {
    let classes = `fill-current transform-gpu `
    if (block) classes += `block `
    if (size) classes += `${iconSizes[size]} `
    if (className) classes += className

    const Path = icons[icon] || icons['ban']

    return (
      <svg
        className={classes}
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path />
      </svg>
    )
  }
)

export interface IconProps {
  /**
   * Icon variation
   */
  icon: keyof typeof icons
  /** Make icon block
   * @default false
   */
  block?: boolean
  /**
   * Adittional classes for icon
   */
  className?: string
  /** Icon size, number beetween 1 and 10
   * @default 5
   */
  size?: keyof typeof iconSizes
}
