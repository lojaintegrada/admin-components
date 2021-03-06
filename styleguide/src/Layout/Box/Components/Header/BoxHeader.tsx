import React, { useContext } from 'react'

import { TabsProps } from '../../../../Components/Tabs'
import { SharedContext, defaultPaddingVariantsHeader } from '../utils'
import { Icon } from '../../../../Icons'

export const BoxHeader = React.memo(
  ({ children, title, subtitle, Tabs }: BoxHeaderProps) => {
    const sharedProps = useContext(SharedContext)
    const { variant, isOpen, toggleContent, isToggle } = sharedProps

    const hasTitle = !!(title || subtitle || children)
    const hasTabs = !!Tabs

    return (
      <>
        <div
          className={`box-header ${isToggle ? 'cursor-pointer group' : ''} ${
            defaultPaddingVariantsHeader[variant]
          } ${hasTabs && isOpen ? '!pb-0' : ''} ${!hasTitle ? '!pt-0' : ''} ${
            isOpen && !hasTabs ? 'border-b border-card-stroke' : ''
          }`}
          onClick={() => (isToggle ? toggleContent() : undefined)}
        >
          {hasTitle && (
            <div
              className={`box-header-title flex justify-between items-center ${
                !subtitle ? 'py-1' : ''
              }`}
            >
              <div className="flex-1 min-w-0 mr-2">
                {title && (
                  <h3
                    className={`tracking-3 text-base font-semibold break-words`}
                  >
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <h4 className="tracking-4 text-sm text-on-base-2 leading-6 break-words">
                    {subtitle}
                  </h4>
                )}
              </div>
              <div className="flex items-center">
                {children}
                {isToggle && (
                  <button type="button" className="box-toggle ml-2">
                    <Icon
                      icon="angleLeft"
                      className={`text-on-base-2 hover:text-on-base group-hover:text-on-base transition-all origin-center ${
                        isOpen ? 'rotate-90' : '-rotate-90'
                      }`}
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        {hasTabs && (
          <div
            className={`${
              defaultPaddingVariantsHeader[variant]
            } !py-0 border-b border-card-stroke ${!isOpen ? 'hidden' : ''}`}
          >
            <div className={`-mb-px ${hasTitle ? 'mt-3' : ''}`}>{Tabs}</div>
          </div>
        )}
      </>
    )
  }
)

export interface BoxHeaderProps {
  /**
   * Title of the Box
   */
  title?: string | React.ReactNode
  /**
   * Subtitle of the Box
   */
  subtitle?: string | React.ReactNode
  /**
   * React children, use to render actions in Header
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxHeaderProps) => React.ReactNode)
  /**
   * Use only with "&lt;Tabs /&gt;" component
   */
  Tabs?: React.ReactElement<TabsProps>
}
