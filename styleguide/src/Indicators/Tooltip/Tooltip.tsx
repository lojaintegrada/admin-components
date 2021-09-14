import React from 'react'

import Tippy, { TippyProps } from '@tippyjs/react'
// import './Tooltip.css'

import styled from 'styled-components'

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
      appendTo={props?.appendTo || 'parent'}
      hideOnClick={props?.hideOnClick || false}
      trigger={props?.trigger || 'mouseenter'}
      touch={props?.touch || 'hold'}
      duration={props?.duration || 150}
      placement={window?.innerWidth < 1024 ? 'top' : props?.placement || 'top'}
      interactive={props?.interactive || false}
    />
  )
}

const styledTooltipComponent = styled(TooltipComponent)`
  --bg-color: #20221b;
  pointer-events: ${(props) => (props.interactive ? 'auto' : 'none')};
  position: relative;
  background-color: var(--bg-color);
  color: #fff;
  border-radius: 3px;
  font-size: 12px;
  letter-spacing: -0.4px;
  line-height: 1.4;
  outline: 0;
  transition-property: transform, visibility, opacity;

  &[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
  }

  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  &[data-placement^='top'] > .tippy-arrow {
    bottom: 0;
  }

  &[data-placement^='top'] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }

  &[data-placement^='bottom'] > .tippy-arrow {
    top: 0;
  }

  &[data-placement^='bottom'] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }

  &[data-placement^='left'] > .tippy-arrow {
    right: 0;
  }

  &[data-placement^='left'] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }

  &[data-placement^='right'] > .tippy-arrow {
    left: 0;
  }

  &[data-placement^='right'] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }

  &[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }

  .tippy-arrow {
    width: 15px;
    height: 15px;
    color: var(--bg-color);
  }

  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }

  .tippy-content {
    position: relative;
    padding: 12px 8px;
    z-index: 1;
  }
`

export const Tooltip = React.memo(styledTooltipComponent)

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
  /** Tooltip can be hovered over and clicked inside
   * @default false
   * */
  interactive?: TippyProps['interactive']
}
