import React from 'react'
import { Icon } from '../../Icons/Icon'

export const Breadcrumb: React.FC<BreadcrumbProps> = React.memo(
  ({ Link, currentTitle, previousTitle, previousHref, className = '' }) => {
    const renderPrevTitle = (
      <span className="hidden lg:inline">{previousTitle}</span>
    )
    const renderPrevIcon = (
      <Icon icon="arrowLeft" className="w-4 h-4 inline-flex mr-3 lg:-mt-1" />
    )
    const renderPrevLink = () => {
      if (!previousHref && !Link) {
        // Previous page don't have link
        return <span className="duration-200">{renderPrevTitle}</span>
      }
      if (Link) {
        // Previous page using custom link element
        return (
          <Link className="hover:text-on-base duration-200">
            {renderPrevIcon}
            {renderPrevTitle}
          </Link>
        )
      }
      // Default previous link
      return (
        <a className="hover:text-on-base duration-200" href={previousHref}>
          {renderPrevIcon}
          {renderPrevTitle}
        </a>
      )
    }

    return (
      <div
        className={`header-navigation flex flex-wrap items-center justify-between mb-4 lg:mb-7 ${className}`}
      >
        <div className="header-navigation-breadcrumb max-w-full truncate">
          <div className="inline-flex self-center items-center font-semibold tracking-5 text-f5 sm:text-f4 lg:text-f3">
            {previousTitle && (
              <span className="inline-flex items-center text-on-base-2 text-xl -mr-px">
                {renderPrevLink()}
                <span className="hidden lg:inline px-2 -ml-px"> / </span>
              </span>
            )}
            <span className="text-on-base">{currentTitle}</span>
          </div>
        </div>
        <div className="header-navigation-content flex items-center flex-grow justify-end">
          <div className="header-navigation-help help flex items-center">
            {/* NOT IMPLEMENTED */}
          </div>
          <div className="header-navigation-actions flex items-center">
            {/* NOT IMPLEMENTED */}
          </div>
        </div>
      </div>
    )
  }
)

export interface BreadcrumbProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Current page title
   * */
  currentTitle: string
  /**
   * Previous page title
   * */
  previousTitle?: string
  /**
   * Previous page href
   * */
  previousHref?: string
  /**
   * Custom link component (replace <a>)
   * Example: `const Link = (props: any) => { return  <a href="https://www.google.com" target="_blank" className={`underline ` + props.className}>{props.children}</a> }`
   * */
  Link?: React.ElementType
}
