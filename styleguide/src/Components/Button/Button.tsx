import React from 'react'

import { Icon, IconProps } from '../../Icons/Icon'

const listOfStylesHover = {
  primary: `hover:bg-primary-dark`,
  secondary: `hover:bg-secondary-dark`,
  outlineSecondary: `hover:bg-primary-light`,
  tertiary: `hover:bg-tertiary-dark`,
  info: `hover:bg-secondary-bold`,
  warning: `hover:bg-warning-dark`,
  danger: `hover:bg-danger-dark`,
  outline: `hover:bg-primary-light`,
  onlyText: `hover:bg-base-2`,
}
const listOfStylesActive = {
  primary: `active:bg-primary-bold`,
  secondary: `active:shadow-inner`,
  outlineSecondary: `active:shadow-inner active:bg-base-1`,
  tertiary: `active:bg-tertiary-bold`,
  warning: `active:bg-warning-bold`,
  danger: `hover:bg-danger-bold`,
  outline: `active:shadow-inner active:bg-base-1`,
  onlyText: `active:bg-base-1`,
}
const listOfStylesFocus = {
  primary: `focus:ring-1 focus:ring-primary-dark focus:ring-opacity-50`,
  secondary: `focus:ring focus:ring-focus`,
  outlineSecondary: `focus:ring-2 focus:ring-focus focus:ring-offset-1`,
  danger: `focus:ring-1 focus:ring-danger-dark`,
  outline: `focus:ring-2 focus:ring-focus focus:ring-offset-1`,
  onlyText: `focus:bg-base-1`,
}
const listOfStyles = {
  primary: `bg-primary text-base-1 ${listOfStylesHover['primary']} ${listOfStylesActive['primary']} ${listOfStylesFocus['primary']}`,
  secondary: `bg-secondary text-primary  ${listOfStylesHover['secondary']} ${listOfStylesActive['secondary']}`,
  outlineSecondary: `bg-transparent text-primary border border-primary ${listOfStylesHover['outlineSecondary']} ${listOfStylesActive['outlineSecondary']} ${listOfStylesFocus['outlineSecondary']}`,
  tertiary: `bg-inverted-2 text-on-primary ${listOfStylesHover['tertiary']} ${listOfStylesActive['tertiary']}`,
  info: `bg-secondary-dark text-base-1 ${listOfStylesHover['info']}`,
  warning: `bg-warning text-on-base ${listOfStylesHover['warning']} ${listOfStylesActive['warning']}`,
  danger: `bg-danger text-base-1 ${listOfStylesHover['danger']} ${listOfStylesActive['danger']} ${listOfStylesFocus['danger']}`,
  outline: `bg-transparent text-inverted-2 border border-inverted-2 ${listOfStylesHover['outline']} ${listOfStylesActive['outline']} ${listOfStylesFocus['outline']}`,
  onlyText: `bg-transparent border-transparent text-inverted-2 px-0 ${listOfStylesHover['onlyText']} ${listOfStylesActive['onlyText']} ${listOfStylesFocus['onlyText']}`,
}

const defaultDisabledStyle = `bg-base-3 cursor-default text-on-base-2 shadow-none ring-0 border-0 hover:bg-base-3 hover:text-on-base-2 `
const listOfStylesDisabled = {
  primary: defaultDisabledStyle,
  secondary: `bg-base-2 cursor-default text-card-stroke shadow-none ring-0 border-0 `,
  outlineSecondary: `bg-base-2 cursor-default text-card-stroke shadow-none ring-0 border-0 `,
  tertiary: defaultDisabledStyle,
  info: defaultDisabledStyle,
  warning: defaultDisabledStyle,
  danger: defaultDisabledStyle,
  outline: defaultDisabledStyle,
  onlyText: `bg-transparent text-on-base-3 shadow-none ring-0 border-0`,
}

const listOfSizes = {
  small: `text-f7 h-8`,
  default: `text-f6 h-12`,
  large: `text-f5 h-14`,
}

const ButtonType = React.forwardRef(
  (
    { as, children, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonAnchorElement>
  ) => {
    if (as === 'a' || props.href)
      return (
        <a {...props} ref={ref}>
          {children}
        </a>
      )
    if (!props.type) {
      // Default to button when missing type
      props.type = 'button'
    }
    return (
      <button {...props} ref={ref}>
        {children}
      </button>
    )
  }
)

const ButtonComponent = (
  {
    children,
    loading,
    variant = 'primary',
    fullWidth,
    icon,
    disabled,
    className,
    onClick,
    size = 'default',
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonAnchorElement>
) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonAnchorElement>) => {
    ;(!disabled || !loading) && onClick && onClick(event)
  }

  let classes = `inline-flex leading-none font-semibold tracking-tight items-center justify-center px-5 text-center no-underline cursor-pointer transition rounded after:align-middle focus:outline-none `

  if (loading) {
    classes +=
      'bg-base-3 cursor-default text-on-base-2 pointer-events-none shadow-none ring-0 border-0 hover:bg-base-3 hover:text-on-base-2 focus:ring-0 '
  } else if (disabled) {
    classes += listOfStylesDisabled[variant]
  } else {
    classes += `${listOfStyles[variant]} `
  }
  classes += `${listOfSizes[size]} `

  if (fullWidth) classes += 'w-full '
  if (className) classes += className

  const currentIcon = (loading && 'loading') || icon

  return (
    <ButtonType
      ref={ref}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {currentIcon && (
        <Icon icon={currentIcon} size={4} className="ml-3 inline-block" />
      )}
    </ButtonType>
  )
}
const ButtonWithFowardRef = React.forwardRef(ButtonComponent)
export const Button = React.memo(ButtonWithFowardRef)

type ButtonAnchorProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

type HTMLButtonAnchorElement = HTMLButtonElement & HTMLAnchorElement

export interface ButtonProps extends ButtonAnchorProps {
  /** Type of component to use
   * @default button
   * */
  as?: 'a' | 'button'
  /** Size of the button
   * @default default
   * */
  size?: 'default' | 'large' | 'small'
  /** Button variant
   * @default primary
   * */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outlineSecondary'
    | 'tertiary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'outline'
    | 'onlyText'
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
  icon?: IconProps['icon']
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: ButtonProps) => React.ReactNode)
}
