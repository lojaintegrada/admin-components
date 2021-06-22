import { IconProps } from '../../Icons/Icon'

export interface TimelineItemInterface {
  /**
   * Item main title
   */
  title: string
  /**
   * Item timestamp
   */
  timestamp?: string
  /**
   * Item additional description
   */
  description?: string
  /**
   * Item icon
   */
  icon?: IconProps['icon']
  /**
   * Background of the current icon (className)
   */
  iconBackgroundColor?: string
}
