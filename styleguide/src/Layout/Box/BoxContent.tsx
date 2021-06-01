import React from 'react'

export const BoxContent = React.memo(({ children }: BoxContentProps) => {
  return <div className="box-content">{children}</div>
})

export interface BoxContentProps {
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxContentProps) => React.ReactNode)
}
