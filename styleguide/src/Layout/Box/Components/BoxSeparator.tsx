import React, { useContext } from 'react'

import { SharedContext } from '../utils'

const listOfMarginVariants = {
  default: `my-4 -mx-6 lg:my-5 lg:-mx-10`,
  small: `my-4 -mx-6`,
}

export const BoxSeparator = () => {
  const sharedProps = useContext(SharedContext)
  const { variant } = sharedProps

  return (
    <hr className={`border-card-stroke ${listOfMarginVariants[variant]}`} />
  )
}
