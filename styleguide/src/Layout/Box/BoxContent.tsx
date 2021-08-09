import React, { useContext } from 'react'

import { SharedContext, defaultPaddingVariants } from './utils'

export const BoxContent = React.memo(({ children }: BoxContentProps) => {
  const sharedProps = useContext(SharedContext)
  const { variant = 'default' } = sharedProps

  return (
    <div className={`box-content ${defaultPaddingVariants[variant]}`}>
      {children}
    </div>
  )
})

export interface BoxContentProps {
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxContentProps) => React.ReactNode)
}
