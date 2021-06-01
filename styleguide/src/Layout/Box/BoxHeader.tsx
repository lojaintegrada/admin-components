import React from 'react'

export const BoxHeader = React.memo(
  ({ children, title, subtitle }: BoxHeaderProps) => {
    return (
      <div className="box-header border-b border-card-stroke -mt-5 -mx-5 px-5 py-4 mb-5 flex justify-between items-center lg:-mt-10 lg:-mx-10 lg:px-10 lg:py-6 lg:mb-8">
        <div className="flex-1 min-w-0">
          {title && (
            <h3
              className={`tracking-3 text-xl font-semibold break-words ${subtitle &&
                '-mt-px'}`}
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
   * React children
   */
  title: string | React.ReactNode
  /**
   * React children
   */
  subtitle?: string | React.ReactNode
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxHeaderProps) => React.ReactNode)
}
