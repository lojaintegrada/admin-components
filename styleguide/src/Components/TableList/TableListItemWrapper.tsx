import React from 'react'

import { TableListItemWrapperProp } from './TableListItem.interface'

const ItemWrapperClasses = `flex relative py-6 text-f7 leading-4 break-words no-underline`
const ItemWrapperClassesContainerHover = `before:hover:block before:hover:absolute before:hover:h-full before:hover:w-8 before:hover:top-0 before:hover:-left-8 before:hover:bg-base-2 after:hover:block after:hover:absolute after:hover:h-full after:hover:w-8 after:hover:top-0 after:hover:-right-8 after:hover:bg-base-2`

const DefaultWrapper = (props: any) => {
  const { children, ...restProps } = props
  return (
    <div {...restProps}>{children}</div>
  )
}

export const TableListItemWrapper = ({
  Wrapper = DefaultWrapper,
  props = {},
  children,
  withHover = false,
  isInsideContainer = false,
}: TableListItemWrapperProps) =>
  (
    <Wrapper
      className={`table-item-wrapper ${ItemWrapperClasses} ${
        withHover ? `hover:bg-base-2 ${
          isInsideContainer ? ItemWrapperClassesContainerHover : ''
        }` : ''
      }`}
      {...props}
    >
      {children}
    </Wrapper>
  )

export interface TableListItemWrapperProps {
  Wrapper?: TableListItemWrapperProp
  children: React.ReactNode
  props?: { [key: string]: unknown }
  withHover?: boolean
  isInsideContainer?: boolean
}
