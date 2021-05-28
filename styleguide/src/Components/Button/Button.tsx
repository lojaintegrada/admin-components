import React, { ReactNode } from 'react'
import {
  Provider,
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps
} from 'reakit'
import './../../tailwind.css'

const listOfStyles = {
  primary: `bg-primary text-base-1 `,
  secondary: `bg-transparent text-primary ring-1 ring-primary ring-inset `,
  tertiary: `bg-inverted-2 text-on-primary `,
  danger: `ba b--danger bg-danger white hover-bg-danger-dark hover-b--danger-dark   pointer `
}

export const Button = React.memo(
  ({
    children,
    status,
    variant,
    type,
    fullWidth,
    disabled,
    id,
    className,
    onClick
  }: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      !disabled && onClick && onClick(event)
    }

    if (!variant) variant = 'primary'
    let classes = `flex font-semibold items-center justify-center px-5 text-center no-underline transition `
    classes += disabled
      ? 'bg-base-3 cursor-default text-on-base-2 shadow-none ring-0 border-0 '
      : `${listOfStyles[variant]} `
    if (fullWidth) classes += 'w-100 '
    if (className) classes += className

    return (
      <Provider>
        <ReakitButton
          id={id}
          type={type}
          className={classes}
          disabled={disabled}
          onClick={handleClick}
        >
          {!status && children}
        </ReakitButton>
      </Provider>
    )
  }
)

export interface ButtonProps extends ReakitButtonProps {
  /** Size of the button
   * @default regular
   * */
  size?: 'regular' | 'large' | 'small'
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary' | 'tertiary'
  /** Button status
   * @default null
   * */
  status?: 'loading' | 'success' | 'error'
  /**
   * Make button full width
   */
  fullWidth?: boolean
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
