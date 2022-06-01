import React from 'react'

import { TableListItemProps } from './TableListItem.interface'
import { TableListItem } from './TableListItem'
import { TableListItemLoading } from './TableListItemLoading'

const groupTitleMobileClass = `before:block before:absolute before:h-0 before:w-5 before:-top-px before:-left-5 before:border-t before:border-primary-bold before:border-opacity-10 after:block after:absolute after:h-0 after:w-5 after:-top-px after:-right-5 after:border-t after:border-primary-bold after:border-opacity-10`

const TableListComponent = ({
  className = '',
  itemWrapper,
  items = [],
  isLoading = false,
  empty = {
    title: 'Nenhum registro encontrado',
  },
  withHover = false,
  isInsideContainer = false,
}: TableListProps) => {
  const itemsMemoized = React.useMemo(() => {
    const groups = items.reduce(
      (
        groups: {
          [key: string]: TableListItemProps[]
        },
        item
      ) => {
        const groupTitle =
          item.timestampDate || item.timestampTime || 'no_title'
        if (!groups[groupTitle]) {
          groups[groupTitle] = []
        }
        groups[groupTitle].push(item)
        return groups
      },
      {}
    )

    return Object.keys(groups).map((groupTitle) => {
      return {
        title: groupTitle,
        items: groups[groupTitle],
      }
    })
  }, [items])

  return (
    <div className={`table-list tracking-tight ${className}`}>
      {isLoading ? (
        <div className="table-list-loading">
          <TableListItemLoading />
          <TableListItemLoading />
          <TableListItemLoading />
          <TableListItemLoading />
        </div>
      ) : !itemsMemoized || !itemsMemoized.length ? (
        <div className="table-list-empty flex flex-col items-center justify-center gap-5 min-h-[40vh] lg:min-h-[60vh] max-w-sm mx-auto px-4">
          {empty.illustration && (
            <div className="table-list-empty-illustration text-center">
              {empty.illustration}
            </div>
          )}
          <div className="table-list-empty-title text-center text-f4 font-semibold text-primary-bold leading-7">
            {empty.title}
          </div>
          {empty.subTitle && (
            <div className="table-list-empty-subtitle text-center text-f6 text-on-base-2 leading-6 -mt-1">
              {empty.subTitle}
            </div>
          )}
          {empty.action && (
            <div className="table-list-empty-action text-center">
              {empty.action}
            </div>
          )}
        </div>
      ) : (
        itemsMemoized.map((group, indexGroup) => {
          return (
            <div key={`group-items-${indexGroup}`} className="table-list-group">
              {group.title && group.title !== 'no_title' && (
                <div
                  className={`table-list-title relative lg:hidden border-primary-bold border-opacity-10 ${
                    indexGroup !== 0
                      ? `border-t ${
                          isInsideContainer ? groupTitleMobileClass : ''
                        }`
                      : ''
                  }`}
                >
                  <span
                    className={`text-f5 text-on-base-2 leading-4 break-words inline-block pt-6 pb-2`}
                  >
                    {group.title}
                  </span>
                </div>
              )}
              <div className="group-items">
                {group.items.map((item, indexItem) => {
                  return (
                    <TableListItem
                      key={`group-item-${indexItem}`}
                      forceBorderDesktop={indexItem === 0 && indexGroup !== 0}
                      title={item.title}
                      description={item.description}
                      timestampTime={item.timestampTime}
                      timestampDate={item.timestampDate}
                      itemWrapper={itemWrapper}
                      itemWrapperProps={item.itemWrapperProps}
                      withIcon={item.withIcon}
                      append={item.append}
                      withHover={withHover}
                      isInsideContainer={isInsideContainer}
                    />
                  )
                })}
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

export const TableList = React.memo(TableListComponent)

export interface TableListProps
  extends Pick<
    TableListItemProps,
    'withHover' | 'isInsideContainer' | 'itemWrapper'
  > {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Items of the TableList
   */
  items?: Omit<
    TableListItemProps,
    'forceBorderDesktop' | 'itemWrapper' | 'withHover'
  >[]
  /** TableList is loading
   * @default false
   */
  isLoading?: boolean
  /**
   * Content to show when TableList is empty
   */
  empty?: {
    /** Title when is empty
     * @default 'Nenhum registro encontrado'
     */
    title?: string | React.ReactNode
    /**
     * Subtitle when is empty
     */
    subTitle?: string | React.ReactNode
    /**
     * Illustration or icon for when is empty
     */
    illustration?: React.ReactNode
    /**
     * Action (button) for when is empty
     */
    action?: React.ReactNode
  }
}
