import React, { useState } from 'react'

import { Icon } from '../../Icons/Icon'
import { TimelineItemInterface } from './TimelineItem.interface'

export const TimelineItem = ({ item }: TimelineItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const iconBackgroundColor = item.iconBackgroundColor || `bg-inverted-2`
  const icon = item.icon || 'minus'

  return (
    <li className={`timeline-item relative mb-10 last:mb-0`}>
      <div
        className={`timeline-badge absolute top-0 left-0 flex items-center justify-center text-base-1 w-8 h-8 -ml-3 rounded-full ${iconBackgroundColor}`}
      >
        <Icon icon={icon} size={4} />
      </div>
      <div className="ml-7 pt-px">
        <div
          className={`timeline-title group mb-1 py-1 text-sm text-inverted-1 font-semibold break-words ${
            item.description ? 'cursor-pointer' : ''
          }`}
          onClick={() => item.description && setIsOpen((isOpen) => !isOpen)}
        >
          {item.description && (
            <button
              className={`float-right p-1 -mt-px text-inverted-2 group-hover:text-inverted-1 focus:outline-none`}
            >
              <Icon
                icon="angleLeft"
                size={4}
                className={`-mt-px transition-transform ${
                  isOpen ? 'rotate-90' : '-rotate-90'
                }`}
                block
              />
            </button>
          )}
          <span className="inline break-words">{item.title}</span>
        </div>
        {item.timestamp && (
          <div className="timeline-timestamp mb-1 text-xs text-inverted-2 break-words">
            {item.timestamp}
          </div>
        )}
        {item.description && (
          <div
            className={`timeline-description overflow-hidden text-sm text-inverted-1 break-words transition-max-height ${
              isOpen ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {item.description}
          </div>
        )}
      </div>
    </li>
  )
}

export interface TimelineItemProps {
  item: TimelineItemInterface
}
