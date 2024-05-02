import React from 'react'
import { Icon } from '../../Icons'

export const KnowMore: React.FC<KnowMoreProps> = React.memo(
  ({ className = '', text = '', href = '' }) => {
    return (
      <a
        className={`w-full flex flex-row justify-start items-center gap-x-2 text-inverted-2 ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
        id="knowMoreContainer"
      >
        <Icon icon="questionCircle" size={4} />
        <span className="text-sm font-semibold">{text}</span>
      </a>
    )
  }
)

export interface KnowMoreProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Text to be displayed
   * */
  text: string
  /**
   * Href to the link where component redirects
   * */
  href: string
}
