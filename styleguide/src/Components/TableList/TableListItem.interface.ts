import { IconProps } from '../../Icons'

export type TableListItemWrapperProp = React.ComponentClass<any> | React.FunctionComponent<any>

export interface TableListItemProps {
  /**
   * Title of the item
   */
  title: string | React.ReactNode
  /**
   * Description that appears above the title
   */
  description?: string | React.ReactNode
  /**
   * Timestamp of the item, usually in HH:mm
   */
  timestampTime?: string
  /**
   * Timestamp of the item, usually in dd/mm/yyyy
   */
  timestampDate?: string
  /**
   * Icon to show at item
   */
  withIcon?: {
    /**
     * Classes with text-color and background of icon
     */
    class?: string
    /**
     * Icon to use
     */
    icon?: IconProps['icon']
  }
  /** Force first item (remove border top)
   * @default false
   */
  isFirstItem?: boolean
  /** Show full hover effect (adds hover with negative margin to leave container padding)
   * @default false
   */
  withHover?: boolean
  /**
   * Props of the `item.itemWrapper`
   */
  itemWrapperProps?: { [key: string]: unknown }
  /**
   * Component to wrap item. Usually an <a> or related. Props of each item are placed at `items.itemWrapperProps`
   */
  itemWrapper?: TableListItemWrapperProp
}
