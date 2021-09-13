import React from 'react'

import Tippy, { TippyProps } from '@tippyjs/react'
import './Tooltip.css'

const TooltipComponent = (props: TooltipProps) => {
  const [mounted, setMounted] = React.useState(false)

  const lazyPlugin = {
    fn: () => ({
      onMount: () => setMounted(true),
      onHidden: () => setMounted(false),
    }),
  }

  const computedProps = { ...props }

  computedProps.plugins = [lazyPlugin, ...(props.plugins || [])]

  if (props.render) {
    const render = props.render
    computedProps.render = (...args) => (mounted ? render(...args) : '')
  } else {
    computedProps.content = mounted ? props.content : ''
  }

  return (
    <Tippy
      {...computedProps}
      hideOnClick={props?.hideOnClick || false}
      trigger={props?.trigger || 'mouseenter'}
      touch={props?.touch || `hold`}
      duration={props?.duration || 150}
      placement={window.innerWidth < 1024 ? 'top' : (props?.placement || 'top')}
    />
  )
}

export const Tooltip = React.memo(TooltipComponent)

export interface TooltipProps extends TippyProps {
  /** Tooltip hide on click
   * @default false
   * */
  hideOnClick?: boolean
  /** Tooltip trigger
   * @default 'mouseenter'
   * */
  trigger?: TippyProps['trigger']
  /** Tooltip action on touch
   * @default 'hold'
   * */
  touch?: TippyProps['touch']
  /** Tooltip duration
   * @default 150
   * */
  duration?: TippyProps['duration']
  /** Tooltip position
   * @default 'top'
   * */
  placement?: TippyProps['placement']
}
