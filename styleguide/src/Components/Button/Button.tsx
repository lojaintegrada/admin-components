import React from 'react'
import './../../tailwind.css'

import { Icon } from '../../Icons/Icon'

const listOfStylesHover = {
  primary: `hover:bg-primary-dark`,
  secondary: `hover:bg-primary-light`,
  tertiary: `hover:bg-tertiary-dark`,
  info: `hover:bg-secondary-bold`,
  warning: `hover:bg-warning-dark`,
  danger: `hover:bg-danger-dark`,
}
const listOfStylesActive = {
  primary: `active:bg-primary-bold`,
  secondary: `active:bg-primary-light`,
  tertiary: `active:bg-tertiary-bold`,
  warning: `active:bg-warning-bold`,
  danger: `hover:bg-danger-bold`,
}
const listOfStylesFocus = {
  primary: `focus:ring-1 focus:ring-primary-dark focus:ring-opacity-50`,
  danger: `focus:ring-1 focus:ring-danger-dark`,
}
const listOfStyles = {
  primary: `bg-primary text-base-1 ${listOfStylesHover['primary']} ${listOfStylesActive['primary']} ${listOfStylesFocus['primary']}`,
  secondary: `bg-transparent text-primary ring-1 ring-primary ring-inset ${listOfStylesHover['secondary']} ${listOfStylesActive['secondary']}`,
  tertiary: `bg-inverted-2 text-on-primary ${listOfStylesHover['tertiary']} ${listOfStylesActive['tertiary']}`,
  info: `bg-secondary-dark text-base-1 ${listOfStylesHover['info']}`,
  warning: `bg-warning text-on-base ${listOfStylesHover['warning']} ${listOfStylesActive['warning']}`,
  danger: `bg-danger text-base-1 ${listOfStylesHover['danger']} ${listOfStylesActive['danger']} ${listOfStylesFocus['danger']}`,
}

const listOfSizes = {
  small: `text-f7 h-8`,
  default: `text-f6 h-12`,
  large: `text-f5 h-14`,
}

export const Button = React.memo(
  ({
    children,
    loading,
    variant = 'primary',
    type,
    fullWidth,
    disabled,
    id,
    className,
    onClick,
    size = 'default',
  }: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      (!disabled || !loading) && onClick && onClick(event)
    }

    let classes = `flex font-semibold tracking-tight items-center justify-center px-5 text-center no-underline transition rounded after:align-middle focus:outline-none `

    if (loading) {
      classes +=
        'bg-base-3 cursor-default text-on-base-2 pointer-events-none shadow-none ring-0 border-0 hover:bg-base-3 hover:text-on-base-2 focus:ring-0 '
    } else if (disabled) {
      classes +=
        'bg-base-3 cursor-default text-on-base-2 shadow-none ring-0 border-0 hover:bg-base-3 hover:text-on-base-2 '
    } else {
      classes += `${listOfStyles[variant]} `
    }
    classes += `${listOfSizes[size]} `

    if (fullWidth) classes += 'w-full '
    if (className) classes += className

    return (
      <button
        id={id}
        type={type}
        className={classes}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
        {loading && <Icon icon="loading" size={4} className="ml-3 inline-block" />}
      </button>
    )
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of the button
   * @default default
   * */
  size?: 'default' | 'large' | 'small'
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'danger'
  /**
   * Button is loading
   * */
  loading?: boolean
  /** Make button full width
   * @default false
   */
  fullWidth?: boolean
  /**
   * Icon of the button
   */
  // icon?: ReactNode
  /**
   * Position of the icon
   * @default start
   */
  // iconPosition?: 'start' | 'end'
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: ButtonProps) => React.ReactNode)
}
