import React from 'react'
import Tippy, { TippyProps } from '@tippyjs/react'
import './style.scss'

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

  if (typeof window === 'undefined') {
    return <>{props.children}</>
  }

  return (
    <Tippy
      {...computedProps}
      appendTo={props?.appendTo || 'parent'}
      hideOnClick={props?.hideOnClick || false}
      trigger={props?.trigger || 'mouseenter'}
      touch={props?.touch || ['hold', 400]}
      duration={props?.duration || 150}
      placement={window?.innerWidth < 1024 ? 'top' : props?.placement || 'top'}
      interactive={props?.interactive || false}
    />
  )
}

export const Tooltip = React.memo(TooltipComponent)

export interface TooltipProps extends TippyProps {
  /** Tooltip append
   * @default 'parent'
   * */
  appendTo?: TippyProps['appendTo']
  /** Tooltip hide on click
   * @default false
   * */
  hideOnClick?: TippyProps['hideOnClick']
  /** Tooltip trigger
   * @default 'mouseenter'
   * */
  trigger?: TippyProps['trigger']
  /** Tooltip action on touch
   * @default ['hold', 400]
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
  /** Tooltip can be hovered over and clicked inside
   * @default false
   * */
  interactive?: TippyProps['interactive']
  /** Tooltip theme
   * @deprecated Not implemented
   * @default dark
   * */
  theme?: 'light' | 'dark'
}
