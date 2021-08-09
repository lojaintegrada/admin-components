import React, { useContext } from 'react'

import { SharedContext, defaultPaddingVariants } from './utils'

export const BoxHeader = React.memo(
  ({ children, title, subtitle }: BoxHeaderProps) => {
    const sharedProps = useContext(SharedContext)
    const { variant = 'default' } = sharedProps

    return (
      <div
        className={`box-header border-b border-card-stroke flex justify-between items-center ${defaultPaddingVariants[variant]}`}
      >
        <div className="flex-1 min-w-0 px-">
          {title && (
            <h3
              className={`tracking-3 text-xl font-semibold break-words ${
                subtitle && '-mt-px'
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <h4 className="tracking-4 text-base text-on-base-2 leading-6 break-words mt-1 lg:mt-2">
              {subtitle}
            </h4>
          )}
        </div>
        {children}
      </div>
    )
  }
)

export interface BoxHeaderProps {
  /**
   * Title of the Box
   */
  title: string | React.ReactNode
  /**
   * Subtitle of the Box
   */
  subtitle?: string | React.ReactNode
  /**
   * React children, use to render actions in Header
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxHeaderProps) => React.ReactNode)
}
