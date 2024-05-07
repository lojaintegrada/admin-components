import React from 'react'
import { Icon } from '../../Icons/Icon'
import { HelpLink } from '../../Components/HelpLink'

const actionsDisplayClass = {
  both: 'flex',
  desktop: 'hidden lg:flex',
  mobile: 'flex lg:hidden',
}

export const Breadcrumb: React.FC<BreadcrumbProps> = React.memo(
  ({
    Link,
    currentTitle,
    previousTitle,
    previousHref,
    mobileAlign = 'left',
    help,
    actions,
    actionsDisplay = 'both',
    className = '',
  }) => {
    const renderPrevTitle = (
      <span className="hidden lg:inline truncate">{previousTitle}</span>
    )
    const renderPrevIcon = (
      <Icon
        icon="arrowLeft"
        size={4}
        className="inline-flex mr-3 -mt-1"
        block
      />
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
        aria-label="breadcrumbs"
        className={`header-navigation flex items-center justify-between mb-4 lg:mb-7 ${className}`}
      >
        <div
          className={`header-navigation-breadcrumb max-w-full truncate w-full`}
        >
          <div className="w-full inline-flex self-center items-center font-semibold tracking-5 text-f5 sm:text-f4 lg:text-f3">
            {(previousTitle || previousHref || Link) && (
              <span className="header-navigation-previous inline-flex items-center text-on-base-2 text-xl -mr-px truncate">
                {renderPrevLink()}
                {previousTitle && (
                  <span className="hidden lg:inline px-2 -ml-px"> / </span>
                )}
              </span>
            )}
            <span
              className={`header-navigation-current text-on-base truncate leading-relaxed ${
                mobileAlign === 'center'
                  ? 'w-full lg:w-auto text-center lg:text-left'
                  : ''
              }`}
            >
              {currentTitle}
            </span>
          </div>
        </div>
        <div className="header-navigation-content flex shrink-0 max-w-1/2 items-center flex-grow justify-end gap-5 ml-2 whitespace-nowrap">
          <div className="header-navigation-help help flex items-center">
            {help && (
              <HelpLink text={help.title} mobileText={help.mobileText} as='hyperLink' href={help.href}/>
            )}
          </div>
          {actions && (
            <div
              className={`header-navigation-actions items-center gap-5 ${
                actionsDisplayClass[actionsDisplay] || ''
              }`}
            >
              {actions}
            </div>
          )}
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
  currentTitle: string | React.ReactNode
  /**
   * Previous page title
   * */
  previousTitle?: string | React.ReactNode
  /**
   * Previous page href
   * */
  previousHref?: string
  /**
   * Custom link component (replace <a>)
   * Example: `const Link = (props: any) => { return  <a href="https://www.google.com" target="_blank" className={`underline ` + props.className}>{props.children}</a> }`
   * */
  Link?: React.ElementType
  /** Aligment of `currentTitle` at mobile
   * @default 'left'
   * */
  mobileAlign?: 'left' | 'center'
  /**
   * Help link (external page)
   * */
  help?: {
    title?: string
    href: string
    mobileText?: boolean
  }
  /**
   * Custom actions and buttons
   * */
  actions?: React.ReactNode
  /** Should show actions only at one resolution or always
   * @default 'both'
   * */
  actionsDisplay?: 'desktop' | 'mobile' | 'both'
}
