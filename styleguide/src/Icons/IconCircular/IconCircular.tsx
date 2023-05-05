import React, { FunctionComponent } from 'react'
import { Icon, IconProps } from '../Icon/Icon'

type variantType = 'success' | 'warning' | 'danger'
const variantsStyles: {
  [key in variantType]: {
    bgClass: string
    icon: IconProps['icon']
  }
} = {
  'success': {
    bgClass: 'bg-primary',
    icon: 'check',
  },
  'warning': {
    bgClass: 'bg-warning',
    icon: 'exclamation',
  },
  'danger': {
    bgClass: 'bg-danger',
    icon: 'times',
  },
}

export const IconCircular: FunctionComponent<IconCircularProps> = React.memo(
  ({ variant = 'success', icon: customIcon, bgClass: customBgClass }: IconCircularProps) => {
    const icon = customIcon ? customIcon : (variantsStyles[variant].icon || 'check')
    const bgClass = customBgClass ? customBgClass : (variantsStyles[variant].bgClass || 'bg-primary')

    return (
      <>
        <div className={`icon-circular flex w-20 h-20 mx-auto rounded-full items-center justify-center bg-opacity-20 ${bgClass}`}>
          <div className={`flex w-14 h-14 rounded-full items-center justify-center ${bgClass}`}>
            <Icon icon={icon} className="text-base-1" size={7} block />
          </div>
        </div>
      </>
    )
  }
)

export interface IconCircularProps {
  /** Icon circular variant
   * @default success
   * */
  variant?: variantType
  /**
   * Icon variation
   */
  icon?: IconProps['icon']
  /**
   * Custom class for background
   */
  bgClass?: string
}
