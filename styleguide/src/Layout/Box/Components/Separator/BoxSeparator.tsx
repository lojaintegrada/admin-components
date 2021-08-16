import React, { useContext } from 'react'

import { SharedContext } from '../utils'

const listOfMarginVariants = {
  default: `my-5 -mx-6 lg:my-8 lg:-mx-10`,
  small: `my-5 -mx-6`,
}

export const BoxSeparator = () => {
  const sharedProps = useContext(SharedContext)
  const { variant } = sharedProps

  return (
    <hr
      className={`box-content-separator border-card-stroke ${listOfMarginVariants[variant]}`}
    />
  )
}
