import React from 'react'
import { Icon, IconProps } from '../../Icons/Icon'
import { safeCSSId } from '../../utils'
import { SidebarSubItemProps } from './ItemSub'

const sidebarItemBtnClasses = `flex items-center relative px-6 py-2 text-sm tracking-4 font-semibold duration-200 group-hover:text-on-base`
const sidebarItemBtnActiveClasses = (active: boolean | undefined) =>
  active ? `text-on-base` : `text-on-base-2`
const sidebarItemBtnIconClasses = `w-4 h-6 flex-shrink-0`
const sidebarItemFullClasses = `flex items-center place-content-between w-full ml-4 truncate leading-6`
const sidebarItemArrowClasses = `w-4 h-4 transform -rotate-90 transition-all group-hover:opacity-100`
const sidebarItemArrowActiveClasses = (active: boolean | undefined) =>
  active ? `opacity-100` : `lg:opacity-0`
const sidebarItemDropdownClasses = `mb-1 hidden`

const SidebarItemComponent = (
  {
    className = '',
    title,
    icon,
    active,
    href,
    onClick,
    children,
  }: SidebarItemProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  return (
    <div
      className={`sidebar-item group ${active ? 'active' : ''} ${className}`}
    >
      <a
        className={`sidebar-item-btn ${sidebarItemBtnClasses} ${sidebarItemBtnActiveClasses(
          active
        )}`}
        href={href}
        onClick={onClick}
        id={`cat-group-${safeCSSId(title)}`}
        ref={ref}
      >
        <Icon
          icon={icon}
          className={`sidebar-item-btn-icon ${sidebarItemBtnIconClasses}`}
        />
        <span className={`sidebar-item-full ${sidebarItemFullClasses}`}>
          {title}
        </span>
        {children && (
          <Icon
            icon="angleLeft"
            className={`sidebar-item-arrow ${sidebarItemArrowClasses} ${sidebarItemArrowActiveClasses(
              active
            )}`}
          />
        )}
        {active && (
          <div className="absolute bg-primary left-0 top-0 w-1 h-9 mt-2 lg:mt-1" />
        )}
      </a>
      {children && (
        <div
          className={`sidebar-item-dropdown ${sidebarItemDropdownClasses}`}
          id={`sidebar-item-dropdown-${safeCSSId(title)}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const SidebarItemWithFowardRef = React.forwardRef(SidebarItemComponent)
export const SidebarItem = React.memo(SidebarItemWithFowardRef)

export interface SidebarItemProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Item title
   * */
  title: string
  /**
   * Item icon
   */
  icon: IconProps['icon']
  /**
   * Set item as active
   * */
  active?: boolean
  /**
   * Item link page
   * */
  href?: string
  /**
   * Item onClick function
   * */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  /**
   * Sub Items - NOT IMPLEMENTED
   * */
  children?:
    | React.ReactElement<SidebarSubItemProps>
    | Array<React.ReactElement<SidebarSubItemProps>>
}
