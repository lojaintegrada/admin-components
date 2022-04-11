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
    title: 'Nenhum registro encontrado'
  },
  withHover = false,
}: TableListProps) => {
  const itemsMemoized = React.useMemo(() => {
    const groups = items.reduce(
      (
        groups: {
          [key: string]: TableListItemProps[]
        },
        item
      ) => {
        const groupTitle = item.timestampDate || item.timestampTime || 'no_title'
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
    <div className={`table-list ${className}`}>
      {isLoading ? (
        <div>
          <TableListItemLoading />
          <TableListItemLoading />
          <TableListItemLoading />
          <TableListItemLoading />
        </div>
      ) : !itemsMemoized || !itemsMemoized.length ? (
        <div className="table-list-empty flex flex-col items-center justify-center min-h-[80vh] lg:min-h-[60vh] max-w-sm mx-auto px-4">
          {empty.illustration && (
            <div className="text-center">
              {empty.illustration}
            </div>
          )}
          <div className="text-center text-f4 font-semibold text-primary-bold tracking-tight leading-7 mt-5 mb-4">
            {empty.title}
          </div>
          {empty.subTitle && (
            <div className="text-center text-f6 text-on-base-2 tracking-tight leading-6">
              {empty.subTitle}
            </div>
          )}
        </div>
      ) : (
        itemsMemoized.map((group, indexGroup) => {
          return (
            <div key={`group-items-${indexGroup}`}>
              {group.title && group.title !== 'no_title' && (
                <div
                  className={`relative lg:hidden border-primary-bold border-opacity-10 ${
                    indexGroup !== 0 ? `border-t ${groupTitleMobileClass}` : ''
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
                      isFirstItem={indexItem === 0 && indexGroup !== 0}
                      title={item.title}
                      description={item.description}
                      timestampTime={item.timestampTime}
                      timestampDate={item.timestampDate}
                      itemWrapper={itemWrapper}
                      itemWrapperProps={item.itemWrapperProps}
                      withIcon={item.withIcon}
                      withHover={withHover}
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

export interface TableListProps extends Pick<TableListItemProps, 'withHover' | 'itemWrapper'> {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Items of the TableList
   */
  items?: Omit<TableListItemProps, 'isFirstItem' | 'itemWrapper' | 'withHover'>[]
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
     * Illustration or icon to when is empty
     */
    illustration?: React.ReactNode
  }
}
