import React from 'react'

import { LoadingPlaceholder } from '../LoadingPlaceholder'
import { TimelineItem } from './TimelineItem'
import { TimelineItemInterface } from './TimelineItem.interface'

const TimelineComponent = ({
  className = '',
  items,
  isLoading = false,
  emptyTitle = 'Nenhum registro encontrado',
}: TimelineProps) => {
  if (!isLoading && (!items || !Array.isArray(items))) return null

  return (
    <div
      className={`w-full bg-base-1 border border-card-stroke rounded p-6 ${className}`}
    >
      <ul className="timeline relative list-none py-10 -mt-6 -mb-6 ml-2">
        <li
          className="timeline-line absolute -left-px top-0 bottom-0 bg-card-stroke ml-1"
          style={{ width: '2px' }}
        />
        {isLoading ? (
          <TimelineItem
            item={{
              title: <LoadingPlaceholder className="mt-px pt-px w-1/2" />,
              icon: 'loading',
            }}
          />
        ) : items?.length === 0 ? (
          <TimelineItem
            item={{
              title: emptyTitle,
              icon: 'ban',
            }}
          />
        ) : (
          items?.map((item, index) => (
            <TimelineItem
              key={`timeline-item-${index}`}
              item={item}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export const Timeline = React.memo(TimelineComponent)

export interface TimelineProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Timeline items
   */
  items?: TimelineItemInterface[]
  /** Timeline is loading
   * @default false
   */
  isLoading?: boolean
  /** Text to show when items is empty
   * @default 'Nenhum registro encontrado'
   */
  emptyTitle?: string
}
