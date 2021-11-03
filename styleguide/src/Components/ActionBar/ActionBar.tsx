import React, { useEffect } from 'react'
import { Button } from '../Button'
import { Icon } from '../../Icons'

const ActionBarComponent = ({ onlyMobile, children }: ActionBarProps) => {
  useEffect(() => {
    const element = window.parent.document.querySelector<HTMLElement>('.botbar')

    if (element) element.style.display = 'none'

    return () => {
      if (element) element.style.display = ''
    }
  }, [])

  return (
    <div
      className={
        'fixed inset-x-0 bottom-0 h-12 lg:h-16 bg-inverted-1 lg:bg-base-1 z-40' +
        (onlyMobile ? ' lg:hidden' : '')
      }
    >
      <div className="flex items-center justify-center lg:justify-end max-w-screen-lg w-full h-full mx-auto px-8 lg:px-0">
        {!onlyMobile && (
          <div className="hidden lg:grid grid-flow-col gap-x-5">
            {React.Children.map(children, ({ props }) => {
              const { ...childrenProps } = props

              delete childrenProps?.icon

              return <Button {...childrenProps} />
            })}
          </div>
        )}
        <div className="grid lg:hidden grid-flow-col gap-x-5">
          {React.Children.map(children, ({ props }) => (
            <button className="text-base-1" onClick={props?.onClick}>
              {props?.icon && <Icon icon={props?.icon} className="p-px" />}
              <span className="block text-f8">{props.children}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export const ActionBar = React.memo(ActionBarComponent)

export interface ActionBarProps {
  /** Show component only on Mobile
   * @default false
   */
  onlyMobile?: boolean
  /**
   * React children
   */
  children: React.ReactElement | React.ReactElement[]
}
