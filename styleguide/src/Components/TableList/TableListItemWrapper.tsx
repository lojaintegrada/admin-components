import React from 'react'

import { TableListItemWrapperProp } from './TableListItem.interface'

const ItemWrapperClasses = `flex relative py-6 text-f7 leading-4 break-words no-underline`
const ItemWrapperClassesHover = `hover:bg-base-2 before:hover:block before:hover:absolute before:hover:h-full before:hover:w-8 before:hover:top-0 before:hover:-left-8 before:hover:bg-base-2 after:hover:block after:hover:absolute after:hover:h-full after:hover:w-8 after:hover:top-0 after:hover:-right-8 after:hover:bg-base-2`

export const TableListItemWrapper = ({
  Wrapper,
  props = {},
  children,
  withHover = false,
}: TableListItemWrapperProps) =>
  Wrapper ? (
    <Wrapper
      className={`${ItemWrapperClasses} ${
        withHover ? ItemWrapperClassesHover : ''
      }`}
      {...props}
    >
      {children}
    </Wrapper>
  ) : (
    <div className={ItemWrapperClasses} {...props}>
      {children}
    </div>
  )

export interface TableListItemWrapperProps {
  Wrapper?: TableListItemWrapperProp
  children: React.ReactNode
  props?: { [key: string]: unknown }
  withHover?: boolean
}
