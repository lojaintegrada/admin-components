import React from 'react'

export interface SharedContextProps {
  /** Variant type
   * @default 'default'
   * */
  variant: 'default' | 'small'
}

export const SharedContext = React.createContext<SharedContextProps>({
  variant: 'default',
})

export const defaultPaddingVariants = {
  default: `px-6 py-4 lg:px-10 lg:py-5`,
  small: `px-6 py-4`,
}
