import React from 'react'
import { SidebarItemProps } from './Item'
// import { Icon } from '../../Icons/Icon'

const sidebarMenuClasses = `flex-col bottom-0 top-0 max-w-full bg-base-3 transition-all z-1 w-0 lg:w-64`
const sidebarContentClasses = `max-h-screen h-full py-2.5 overflow-y-auto shadow-card z-1 scroll lg:shadow-none lg:overflow-y-hidden hover:overflow-y-auto`

export const Sidebar = React.memo(
  ({ children, className = '', fixed }: SidebarProps) => {
    return (
      <div
        id="sidebar-menu"
        className={`${fixed ? 'fixed' : ''} ${sidebarMenuClasses} ${className}`}
      >
        {/* <a
        className="sidebar-mode-toggle hidden lg:flex items-center justify-center h-6 w-6 bg-base-3 absolute top-3 -right-3 z-10 border-4 border-base-2 rounded-md transition-all hover:bg-base-4"
        href=""
      >
        <Icon icon="angleLeft" size={3} className="transform transition-all" />
      </a>
      <a
        className="sidebar-mobile-close hidden items-center justify-center h-6 w-6 bg-base-3 absolute top-3 -right-3 z-10 border-4 border-base-2 rounded-md transition-all hover:bg-base-4"
        href=""
      >
        <Icon icon="angleLeft" size={3} className="transform transition-all" />
      </a> */}
        <nav className={`sidebar-content ${sidebarContentClasses}`}>
          {children}
        </nav>
        <div className="animate__animated animate__fadeIn backdrop"></div>
      </div>
    )
  }
)

export interface SidebarProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Sidebar should be fixed
   * */
  fixed?: boolean
  /**
   * Menu Items
   * */
  children?:
    | React.ReactElement<SidebarItemProps>
    | Array<React.ReactElement<SidebarItemProps>>
}
