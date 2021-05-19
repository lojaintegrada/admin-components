import React, { ReactNode } from 'react'
// import {
//   Provider,
//   Button as ReakitButton,
//   ButtonProps as ReakitButtonProps,
// } from 'reakit'

export const Button = ({ children }: ButtonProps) => {
  return (
    <button>{children}</button>
  )
}

export interface ButtonProps {
  /** Size of the button
   * @default regular
   * */
  size?: 'regular' | 'large' | 'small'
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary'
  /**
   * Icon of the button
   */
  icon?: ReactNode
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end'
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: ButtonProps) => React.ReactNode)
}
