import { IconProps } from '../../Icons'

export type TableListItemWrapperProp =
  | React.ComponentClass<any>
  | React.FunctionComponent<any>

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
   * Addittional content at item
   */
  append?: string | React.ReactNode
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
  /** Force border top at desktop even if is first item
   * @default false
   */
  forceBorderDesktop?: boolean
  /** Show hover effect
   * @default false
   */
  withHover?: boolean
  /** Adds hover effect and mobile border with negative margin to fulfill container padding
   * @default false
   */
  isInsideContainer?: boolean
  /**
   * Props of the `item.itemWrapper`
   */
  itemWrapperProps?: { [key: string]: unknown }
  /**
   * Component to wrap item. Usually an <a> or related. Props of each item are placed at `items.itemWrapperProps`
   */
  itemWrapper?: TableListItemWrapperProp
}
