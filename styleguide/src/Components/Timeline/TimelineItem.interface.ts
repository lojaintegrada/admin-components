import { IconProps } from '../../Icons/Icon'

export interface TimelineItemInterface {
  /**
   * Item main title
   */
  title: string | React.ReactNode
  /**
   * Item timestamp
   */
  timestamp?: string
  /**
   * Item additional description
   */
  description?: string | React.ReactNode
  /**
   * Item icon
   */
  icon?: IconProps['icon']
  /**
   * Background of the current icon (className)
   */
  iconBackgroundColor?: string
}
