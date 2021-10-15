import React from 'react'

export interface SharedContextProps {
  /** Variant type
   * @default 'default'
   * */
  variant: 'default' | 'small',
  /** Define is box content has visible
   * @default true
   * */
   showContent: boolean,
   setShowContent: React.Dispatch<React.SetStateAction<boolean>>
}

export const SharedContext = React.createContext<SharedContextProps>({
  variant: 'default',
  showContent: true,
  setShowContent: () => {},
})

export const defaultPaddingVariantsHeader = {
  default: `px-6 py-4 lg:px-10 lg:py-5`,
  small: `px-6 py-4`,
}

export const defaultPaddingVariantsContent = {
  default: `p-6 lg:p-10`,
  small: `p-6`,
}
