export interface TabsItemInterface {
  /**
   * Item identification
   */
  id: string
  /**
   * Item visible title
   */
  title: string
  /**
   * Complement to title
   * */
  titleComplement?: string | React.ReactNode
  /**
   * Disabled a specific tab
   */
  disabled?: boolean
  /**
   * Item content
   * @deprecated Not implemented
   */
  content?: null
}
