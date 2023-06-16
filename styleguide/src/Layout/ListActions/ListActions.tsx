import React, { useEffect } from 'react'
import { Icon, IconProps } from '../../Icons'


const ListActionButton = ({
  className,
  tag,
  icon,
  text,
  type,
}: ListActionButtonProps) => {
  const typeClasses = {
    danger: 'text-danger-dark',
  }

  return (
    <button type="button" className={`list-actions__button rounded relative flex items-center justify-center flex-col gap-y-2 p-2 border border-transparent text-inverted-2 transition-colors duration-200 hover:bg-base-3 hover:border-card-stroke ${type ? typeClasses[type] : ''} ${className ? className : ''}`}>
      {tag ? (
        <span className="list-actions__tag">{tag}</span>
      ) : null}
      <span className="relative">
        <Icon icon={icon} size={5} className="p-px" />
      </span>
      <p className="w-24 text-f7 font-semibold tracking-4 text-center select-none leading-tight">{text}</p>
    </button>

  )

}

const ListActionsComponent = ({ onlyMobile, actions, isVisible = true }: ListActionsProps) => {
  useEffect(() => {
    const botbar = window.parent.document.querySelector<HTMLElement>('.botbar')
    if (botbar) botbar.style.display = 'none'

    return () => {
      if (botbar) botbar.style.display = ''
    }
  }, [])

  return (
    <div
      className={
        `list-actions w-full z-50 fixed right-0 bottom-0 flex justify-center items-center gap-x-8 shadow bg-inverted-1 lg:bg-base-2 transition-all px-4 py-2 ${isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-2'} ${onlyMobile ? ' lg:hidden' : ''}`
      }
    >
      {actions.map((columns) => (
        Object.values(columns).map((buttons: ListActionButtonProps[]) => (
          buttons.map((button) => (
            <ListActionButton key={button.icon} {...button} />
          ))
        ))
      ))}
      {/* {!onlyMobile && (
        <div className="hidden lg:grid grid-flow-col gap-x-5 my-2.5 mr-8">
          {React.Children.map(children, ({ props }) => {
            const { ...childrenProps } = props

            delete childrenProps?.icon

            return <Button {...childrenProps} />
          })}
        </div>
      )} */}
      {/* <div className="lg:hidden">
        {React.Children.map(children, ({ props }) => {
          if (!props.children) return
          return (
            <button
              className={
                'px-4 py-1 text-base-1' +
                (props?.loading ? ' pointer-events-none' : '')
              }
              onClick={props?.onClick}
              type={props?.type || 'button'}
            >
              {props?.loading ? (
                <Icon icon="loading" className="p-px" />
              ) : (
                props?.icon && <Icon icon={props?.icon} className="p-px" />
              )}
              <span className="block text-f8">{props.children}</span>
            </button>
          )
        })}
      </div> */}
    </div>
  )
}

export const ListActions = React.memo(ListActionsComponent)

export interface IActionsButtons {
  buttons: ListActionButtonProps[]
}

export interface ListActionsProps {
  /** Show component only on Mobile
   * @default false
   */
  onlyMobile?: boolean
  /**
   * Actions of list
   */
  actions: IActionsButtons[]
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
  tag?: 'new' | 'sign'
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