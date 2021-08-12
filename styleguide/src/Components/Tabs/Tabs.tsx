import React, { useEffect, useState } from 'react'

import { TabsItem } from './TabsItem'
import { TabsItemInterface } from './TabsItem.interface'

const TabsComponent = ({
  className = '',
  items,
  activeItem,
  onChange,
}: TabsProps) => {
  const [currentActiveItem, setCurrentActiveItem] = useState(activeItem)

  useEffect(() => {
    setCurrentActiveItem(activeItem)
  }, [activeItem])

  const handleChange = (id: string) => {
    if (id === currentActiveItem) return
    setCurrentActiveItem(id)
    onChange?.(id)
  }

  if (!items || !Array.isArray(items)) return null

  return (
    <div
      className={`tabs w-full flex flex-nowrap overflow-x-auto bg-base-1 border-b border-card-stroke ${className}`}
    >
      {items?.map((item, index) => {
        if (!item.id) {
          item.id = encodeURI(item.title)
        }
        return (
          <TabsItem
            key={`tab-item-${index}`}
            {...item}
            onChange={handleChange}
            active={currentActiveItem === item.id}
          />
        )
      })}
    </div>
  )
}

export const Tabs = React.memo(TabsComponent)

export interface TabsProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * ID of the active item
   */
  activeItem?: string
  /**
   * Tab item
   */
  items?: TabsItemInterface[]
  /**
   * Callback handle when selected item change
   * */
  onChange?: (arg0: string) => void
}
