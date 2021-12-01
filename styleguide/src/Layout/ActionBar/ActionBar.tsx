import React, { useEffect } from 'react'
import { Button } from '../../Components/Button'
import { Icon } from '../../Icons'

import { CONTAINER_MAX_SIZE } from '../constants'

const ActionBarComponent = ({ onlyMobile, children }: ActionBarProps) => {
  const [containerExpanded, setContainerExpanded] = React.useState(true)
  useEffect(() => {
    const botbar = window.parent.document.querySelector<HTMLElement>('.botbar')
    const container = window.document.querySelector<HTMLElement>(
      '.page-container'
    )

    if (botbar) botbar.style.display = 'none'
    if (container) {
      container.classList.remove('lg:mb-10', 'lg:pb-0')
      setContainerExpanded(!!container.dataset.expanded)
    }

    return () => {
      if (botbar) botbar.style.display = ''
      if (container) container.classList.add('lg:mb-10', 'lg:pb-0')
    }
  }, [])

  return (
    <div
      className={
        'action-bar fixed inset-x-0 bottom-0 h-12 lg:h-auto pb-0-safe bg-inverted-1 lg:bg-base-1 z-50 shadow' +
        (onlyMobile ? ' lg:hidden' : '')
      }
    >
      <div
        className={`${
          containerExpanded
            ? CONTAINER_MAX_SIZE.expanded
            : CONTAINER_MAX_SIZE.default
        } flex items-center justify-center lg:justify-end w-full h-full mx-auto px-8 lg:px-0`}
      >
        {!onlyMobile && (
          <div className="hidden lg:grid grid-flow-col gap-x-5 my-2.5 mr-8">
            {React.Children.map(children, ({ props }) => {
              const { ...childrenProps } = props

              delete childrenProps?.icon

              return <Button {...childrenProps} />
            })}
          </div>
        )}
        <div className="lg:hidden">
          {React.Children.map(children, ({ props }) => {
            if (!props.children) return
            return (
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
            )
          })}
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
