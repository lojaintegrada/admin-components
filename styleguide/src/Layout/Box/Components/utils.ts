import React from 'react'

export interface SharedContextProps {
  /** Variant type
   * @default 'default'
   * */
  variant: 'default' | 'small'
  /** Define is box content has visible by default
   * @default true
   * */
  isOpen: boolean
  /** Show toggle icon
   * @default false
   * */
  isToggle: boolean
  /**
   * Expand/collapse box content
   * */
  toggleContent(value?: boolean): void
}

export const SharedContext = React.createContext<SharedContextProps>({
  variant: 'default',
  isOpen: true,
  isToggle: false,
  toggleContent: (value?: boolean) => value,
})

export const defaultPaddingVariantsHeader = {
  default: `px-6 py-4 lg:px-10 lg:py-5`,
  small: `px-6 py-4`,
}

export const defaultPaddingVariantsContent = {
  default: `p-6 lg:p-10`,
  small: `p-6`,
}

export const Observer = ({
  value,
  didUpdate,
}: {
  value: any
  didUpdate: Function
}) => {
  React.useEffect(() => {
    didUpdate(value)
  }, [value])
  return null
}
