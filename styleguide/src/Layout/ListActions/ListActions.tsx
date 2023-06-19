import React, { ButtonHTMLAttributes, useEffect } from 'react'
import { Icon, IconProps } from '../../Icons'
import { Badge } from '../../Indicators'

export interface ListActionsTagProps {
  type: ListActionButtonProps['tagType']
  text?: string
}

const Tag = ({ type, text }: ListActionsTagProps) => {
  const commonClasses = 'hidden lg:block absolute'
  if (type === 'sign') {
    return (
      <span
        className={`-mb-1 -mr-3 bottom-0 right-0 text-primary-dark ${commonClasses}`}
      >
        <Icon icon="rocket" size={3} />
      </span>
    )
  }

  return (
    <span
      className={`top-3 left-3 px-0.5 py-px rounded-sm text-f8 font-semibold leading-3 text-base-1 ${commonClasses}`}
    >
      <Badge
        size="xsmall"
        type="primary"
        rounded="small"
        text={text ? text : 'NOVO'}
      />
    </span>
  )
}

const ListActionButton = ({
  className,
  tagType,
  tagText,
  icon,
  text,
  variant = 'default',
  type = 'button',
  ...props
}: ListActionButtonProps) => {
  const variantClasses = {
    default: 'lg:text-inverted-2',
    danger: 'lg:text-danger-dark',
  }

  return (
    <button
      {...props}
      type={type}
      className={`list-actions__button rounded relative flex items-center justify-center flex-col gap-y-px lg:gap-y-1 px-3 lg:p-2 lg:border border-transparent text-base-1 transition-colors duration-200 lg:hover:bg-base-3 lg:hover:border-card-stroke ${
        variant ? variantClasses[variant] : ''
      } ${className ? className : ''}`}
    >
      <span className="relative">
        <Icon icon={icon} size={5} className="p-px" />
        {tagType || tagText ? <Tag type={tagType} text={tagText} /> : null}
      </span>
      <p className="lg:w-24 text-f8 lg:text-f7 font-semibold tracking-4 text-center select-none leading-tight">
        {text}
      </p>
    </button>
  )
}

const ListActionsComponent = ({
  actions,
  isVisible = true,
}: ListActionsProps) => {
  useEffect(() => {
    const botbar =
      window?.parent?.document?.querySelector<HTMLElement>('.botbar')
    if (botbar) botbar.style.display = 'none'

    return () => {
      if (botbar) botbar.style.display = ''
    }
  }, [])

  return (
    <div
      className={`list-actions w-full z-50 h-12 lg:h-auto pb-0-safe fixed right-0 bottom-0 flex justify-center items-center lg:gap-x-8 shadow bg-inverted-1 lg:bg-base-2 transition-all px-4 lg:py-2 ${
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-2'
      }`}
    >
      {actions.map((columns) =>
        Object.values(columns).map(
          (buttons: ListActionButtonProps[], index) => (
            <div
              key={index}
              className="relative flex lg:after:absolute after:-right-4 after:w-px after:h-full after:bg-base-4 last:after:hidden"
            >
              {buttons.map((button) => (
                <ListActionButton key={button.icon} {...button} />
              ))}
            </div>
          )
        )
      )}
    </div>
  )
}

export const ListActions = React.memo(ListActionsComponent)

export interface ListActionsButtons {
  buttons: ListActionButtonProps[]
}

export interface ListActionsProps {
  /**
   * Actions of list
   */
  actions: ListActionsButtons[]
  /**
   * Visibility of component
   */
  isVisible?: boolean
}

export interface ListActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button tag
   */
  tagType?: 'new' | 'sign'
  /**
   * Button tag text
   */
  tagText?: string
  /**
   * Button icon
   */
  icon: IconProps['icon']
  /**
   * Button text
   */
  text: string | React.ReactNode
  /**
   * Button type
   */
  variant?: 'default' | 'danger'
}
