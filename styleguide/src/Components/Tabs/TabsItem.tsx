import React from 'react'

import { TabsItemInterface } from './TabsItem.interface'

const activeStyles = (active: boolean) =>
  active ? `border-primary font-semibold` : `border-transparent`
// When using bold at hover, prevent text shift
const boldFixStyle = `before:content-[attr(data-title)] before:block before:font-semibold before:h-0 before:overflow-hidden before:visibility-hidden`
const disabledStyle = 'text-inverted-2 cursor-not-allowed'
interface TabsItemProps extends TabsItemInterface {
  /**
   * Item is active
   */
  active?: boolean
  /**
   * Call on tab change
   */
  onChange: (arg0: string) => void
}

export const TabsItem = ({
  id,
  title,
  active = false,
  disabled = false,
  onChange,
}: TabsItemProps) => {
  return (
    <button
      type="button"
      id={`btnTab${id}`}
      className={`tabs-item ${
        active ? 'tabs-item-active' : ''
      } group min-w-0 flex-shrink-0 overflow-x-hidden px-2 last:-mr-2 first:-ml-2 ${
        disabled ? disabledStyle : ''
      }`}
      onClick={() => onChange(id)}
      disabled={disabled}
    >
      <span
        className={`block tracking-4 text-f6 text-sm py-4 border-b-4 break-words ${
          disabled ? '' : 'group-hover:font-semibold'
        } ${activeStyles(active)} ${boldFixStyle}`}
        data-title={title}
      >
        {title}
      </span>
    </button>
  )
}
