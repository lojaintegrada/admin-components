import React, { useEffect } from 'react'
import { Icon, IconProps } from '../../Icons'
import { Badge } from '../../Indicators'

export interface TagProps {
  type: ListActionButtonProps['tagType']
  text?: string
}

const Tag = ({ type, text }: TagProps) => {
  if (type === 'sign') {
    return (
      <span className="-mb-1 -mr-3 absolute bottom-0 right-0 text-primary-dark">
        <Icon icon="rocket" size={3} />
      </span>
    )
  }

  return (
    <span className="absolute top-4 px-0.5 py-px rounded-sm text-f8 font-semibold leading-3 text-base-1">
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
  type,
}: ListActionButtonProps) => {
  const typeClasses = {
    danger: 'text-danger-dark',
  }

  return (
    <button
      type="button"
      className={`list-actions__button rounded relative flex items-center justify-center flex-col gap-y-2 p-2 border border-transparent text-inverted-2 transition-colors duration-200 hover:bg-base-3 hover:border-card-stroke ${
        type ? typeClasses[type] : ''
      } ${className ? className : ''}`}
    >
      <span className="relative">
        <Icon icon={icon} size={5} className="p-px" />
        {tagType || tagText ? <Tag type={tagType} text={tagText} /> : null}
      </span>
      <p className="w-24 text-f7 font-semibold tracking-4 text-center select-none leading-tight">
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
    const botbar = window.parent.document.querySelector<HTMLElement>('.botbar')
    if (botbar) botbar.style.display = 'none'

    return () => {
      if (botbar) botbar.style.display = ''
    }
  }, [])

  return (
    <div
      className={`list-actions w-full z-50 fixed right-0 bottom-0 flex justify-center items-center gap-x-8 shadow bg-inverted-1 lg:bg-base-2 transition-all px-4 py-2 ${
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
              className="relative flex after:absolute after:-right-4 after:w-px after:h-full after:bg-base-4 last:after:hidden"
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

export interface ActionsButtons {
  buttons: ListActionButtonProps[]
}

export interface ListActionsProps {
  /**
   * Actions of list
   */
  actions: ActionsButtons[]
  /**
   * Visibility of component
   */
  isVisible?: boolean
}

export interface ListActionButtonProps {
  /**
   * Custom class name
   */
  className?: string
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
  type?: 'danger'
}
