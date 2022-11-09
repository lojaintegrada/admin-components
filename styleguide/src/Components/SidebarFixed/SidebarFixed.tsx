import React, { useState, useEffect } from 'react'
import { Icon } from '../../Icons'

const backgroundShadowEffect = [
  '[background:linear-gradient(#FFFFFF_33%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#FFFFFF_66%)_0_100%,radial-gradient(farthest-side_at_50%_0,rgba(156,156,156,0.5),rgba(0,0,0,0)),radial-gradient(farthest-side_at_50%_100%,_rgba(156,156,156,0.5),rgba(0,0,0,0))_0_100%]',
  '[background-size:100%_15px,100%_15px,100%_5px,100%_5px]',
  '[background-attachment:local,local,scroll,scroll]',
  '[background-repeat:no-repeat]',
  '[background-color:#FFFFFF]',
  '[&_.form-group_.bg-base-1]:bg-transparent',
]

export const SidebarFixedComponent: React.FC<SidebarFixedProps> = ({
  children,
  footerActions,
  isOpen = false,
  onClose,
  title,
  helpLink,
}) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  useEffect(() => {
    setSidebarIsOpen(isOpen)
  }, [isOpen])

  const handleRequestCloseFunc = () => {
    setSidebarIsOpen(false)
    onClose?.()
  }

  return (
    <div
      className={`sidebar-fixed fixed z-40 lg:z-20 right-0 bottom-0 w-full h-full transition-all overflow-x-hidden ${
        sidebarIsOpen
          ? 'pointer-events-auto opacity-100'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="sidebar-fixed-backdrop fixed inset-0 h-full w-full bg-black-alpha -z-1"
        onClick={handleRequestCloseFunc}
      />
      <div
        className={`sidebar-fixed-inner mt-10 sm:mt-0 top-0 bottom-0 right-0 absolute flex flex-col justify-between bg-base-1 transform transition-transform shadow h-auto w-full sm:max-w-[410px] sm:ml-16 rounded-t-lg sm:rounded-none ${
          sidebarIsOpen ? 'translate-x-0' : 'translate-x-10'
        }`}
      >
        <div className="sidebar-fixed-header flex justify-between items-center p-3 lg:px-5 text-inverted-2">
          {title && (
            <div className="sidebar-fixed-title px-2 py-2 sm:py-5 text-f5 sm:text-f4 font-semibold text-inverted-1">
              {title}
            </div>
          )}
          <div className={`flex justify-between${title ? '' : ' flex-1'}`}>
            <button
              className="sidebar-fixed-close p-2 hover:text-primary transition-colors"
              onClick={handleRequestCloseFunc}
            >
              <Icon icon="close" block size={4} />
            </button>
            {helpLink && (
              <a
                className="sidebar-fixed-help p-2 hover:text-primary transition-colors"
                href={helpLink}
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="questionCircle" block size={4} />
              </a>
            )}
          </div>
        </div>
        <div
          className={`sidebar-fixed-content flex-1 flex-grow w-full overflow-auto overscroll-none px-5 lg:px-7 break-words ${backgroundShadowEffect.join(
            ' '
          )}`}
        >
          {children}
        </div>
        {footerActions && (
          <div className="sidebar-fixed-footer flex justify-between items-center p-5 lg:p-7 lg:pt-6">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  )
}

export const SidebarFixed = React.memo(SidebarFixedComponent)

export interface SidebarFixedProps {
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: SidebarFixedProps) => React.ReactNode)
  /**
   * Bottom actions
   */
  footerActions?: React.ReactNode
  /** Sidebar is open
   * @default false
   */
  isOpen?: boolean
  /**
   * Call when sidebar is closed
   * */
  onClose?: Function
  /**
   * Title displayed in header
   */
  title?: string
  /**
   * Help external link
   */
  helpLink?: string
}
