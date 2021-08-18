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

export const defaultPaddingVariantsHeader = {
  default: `px-6 py-4 lg:px-10 lg:py-5`,
  small: `px-6 py-4`,
}

export const defaultPaddingVariantsContent = {
  default: `p-6 lg:p-10`,
  small: `p-6`,
}
