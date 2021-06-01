import React from 'react'
import { Icon } from '../../Icons/Icon'

export const Sidebar = React.memo(({ children, className }: SidebarProps) => {
  return (
    <div
      id="sidebar-menu"
      className={`flex-col bottom-0 fixed top-0 max-w-full bg-base-3 transition-all z-1 w-0 lg:w-64 ${className}`}
    >
      <a
        className="sidebar-mode-toggle hidden lg:flex items-center justify-center h-6 w-6 bg-base-3 absolute top-3 -right-3 z-10 border-4 border-base-2 rounded-md transition-all hover:bg-base-4"
        href=""
      >
        <Icon icon="angleLeft" className="w-3 h-3 transform transition-all" />
      </a>
      <a
        className="sidebar-mobile-close hidden items-center justify-center h-6 w-6 bg-base-3 absolute top-3 -right-3 z-10 border-4 border-base-2 rounded-md transition-all hover:bg-base-4"
        href=""
      >
        <Icon icon="angleLeft" className="w-3 h-3 transform transition-all" />
      </a>
      <nav className="sidebar-content z-1 scroll">{children}</nav>
      <div className="animate__animated animate__fadeIn backdrop"></div>
    </div>
  )
})

export interface SidebarProps {
  className?: string
  children?: React.ReactNode | ((props: SidebarProps) => React.ReactNode)
}
