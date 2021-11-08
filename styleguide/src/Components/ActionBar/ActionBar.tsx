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
        'fixed inset-x-0 bottom-0 h-12 lg:h-16 pb-0-safe bg-inverted-1 lg:bg-base-1 z-50' +
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
        <div className="lg:hidden">
          {React.Children.map(children, ({ props }) => (
            <button
              className={
                'px-4 py-1 text-base-1' +
                (props?.loading ? ' pointer-events-none' : '')
              }
              onClick={props?.onClick}
            >
              {props?.loading ? (
                <Icon icon="loading" className="p-px" />
              ) : (
                props?.icon && <Icon icon={props?.icon} className="p-px" />
              )}
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