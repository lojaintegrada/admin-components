import React, { FunctionComponent } from 'react'
import { icons } from './icons-path'

export const Icon: FunctionComponent<IconProps> = ({
  icon,
  block = false,
  size = 5,
  className,
}: IconProps) => {
  let classes = `fill-current transform-gpu `
  if (block) classes += `block `
  if (size) classes += `h-${size} w-${size} `
  if (className) classes += className

  const Path = icons[icon]

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
  /** Icon size, number must exist at TailwindCSS "height" and "width" variations
   * @default 5
   */
  size?: number
}
