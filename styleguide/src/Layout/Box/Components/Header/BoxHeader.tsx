import React, { useContext } from 'react'

import { TabsProps } from '../../../../Components/Tabs'
import { SharedContext, defaultPaddingVariantsHeader } from '../utils'
import { Icon } from '../../../../Icons'

export const BoxHeader = React.memo(
  ({ children, title, subtitle, showToggle, headerAsToggle, Tabs }: BoxHeaderProps) => {
    const sharedProps = useContext(SharedContext)
    const { variant, showContent, setShowContent } = sharedProps

    const hasTitle = !!(title || subtitle || children)
    const hasTabs = !!Tabs

    function toggleBoxContent() {
      setShowContent(!showContent)
    }

    return (
      <div
        className={`box-header ${headerAsToggle && 'cursor-pointer group'} ${
          defaultPaddingVariantsHeader[variant]
        } ${hasTabs ? '!pb-0' : ''} ${!hasTitle ? '!pt-0' : ''} ${showContent && 'border-b border-card-stroke'}`}
        onClick={headerAsToggle ? toggleBoxContent : undefined}
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
              {showToggle && (
                <button type="button" className="ml-2" onClick={toggleBoxContent}>
                  <Icon icon="angleLeft" className={`text-on-base-2 hover:text-on-base group-hover:text-on-base transition-all origin-center ${showContent ? 'rotate-90' : '-rotate-90'}`} />
                </button>
              )}
            </div>
          </div>
        )}
        {hasTabs && (
          <div className={`-mb-px ${hasTitle ? 'mt-3' : ''}`}>{Tabs}</div>
        )}
      </div>
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
  /** Box toggle
   * @default false
   */
  showToggle?: boolean
  /** Header click expand/collapse content
   * @default false
   */
  headerAsToggle?: boolean
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
