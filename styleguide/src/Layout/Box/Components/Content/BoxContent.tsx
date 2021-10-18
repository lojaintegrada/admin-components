import React, { useContext } from 'react'

import { SharedContext, defaultPaddingVariantsContent } from '../utils'

export const BoxContent = React.memo(({ children }: BoxContentProps) => {
  const sharedProps = useContext(SharedContext)
  const { variant, isOpen } = sharedProps

  return (
    <div
      className={`box-content ${defaultPaddingVariantsContent[variant]} ${
        !isOpen && 'hidden'
      }`}
    >
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
