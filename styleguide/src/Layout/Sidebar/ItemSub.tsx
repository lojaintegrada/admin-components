import React from 'react'
import { safeCSSId } from '../../utils'

const sidebarItemDropdownItemClasses = `flex items-center pl-14 pr-0 py-1 lg:py-1 text-on-base-2 text-f6 tracking-4 leading-6 duration-200 hover:text-on-base`
const sidebarItemDropdownItemActiveClasses = (active: boolean | undefined) =>
  active ? `text-on-base font-semibold active` : `text-on-base-2`

const SidebarSubItemComponent = (
  { title, active, href }: SidebarSubItemProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  return (
    <a
      className={`${sidebarItemDropdownItemClasses} ${sidebarItemDropdownItemActiveClasses(
        active
      )}`}
      href={href}
      id={`cat-item-${safeCSSId(title)}`}
      ref={ref}
    >
      {title}
    </a>
  )
}

const SidebarSubItemWithFowardRef = React.forwardRef(SidebarSubItemComponent)
export const SidebarSubItem = React.memo(SidebarSubItemWithFowardRef)

export interface SidebarSubItemProps {
  /**
   * SubItem title
   * */
  title: string
  /**
   * Set SubItem as active
   * */
  active?: boolean
  /**
   * SubItem link page
   * */
  href: string
}
