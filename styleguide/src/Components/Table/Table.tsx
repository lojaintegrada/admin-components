import React from 'react'

import { useTable } from 'react-table'
import { LoadingPlaceholder } from '../LoadingPlaceholder'

const textAligns = {
  right: 'text-right',
  left: 'text-left',
  center: 'text-center',
}
// const placeholderSizes = {
//   default: "pv4",
//   large: "pv8"
// }

interface TdWrapperProps {
  Wrapper?: CellWrapperProp
  children: React.ReactNode
  props?: { [key: string]: unknown }
}

const TdWrapperClasses = `block p-4 no-underline`
const TdWrapper = ({ Wrapper, props = {}, children }: TdWrapperProps) =>
  Wrapper ? (
    <Wrapper className={TdWrapperClasses} {...props}>
      {children}
    </Wrapper>
  ) : (
    <div className={TdWrapperClasses} {...props}>
      {children}
    </div>
  )

const TableComponent = ({
  columns: columnsProps,
  rows: rowsProps = [],
  // selectable,
  // placeholderLength,
  // placeholderSize,
  isLoading = false,
}: TableProps) => {
  const rowsPropsMemoized = React.useMemo(() => rowsProps, [rowsProps])

  const columns = React.useMemo(
    () =>
      columnsProps.map(column => {
        return {
          Header: column.label as any,
          accessor: column.id as string,
          textAlign: column.textAlign,
          ...(column.size && { size: column.size }),
          Cell: ({ value, cellWrapperProps }: any) => (
            <TdWrapper Wrapper={column.cellWrapper} props={cellWrapperProps}>
              {value}
            </TdWrapper>
          ),
        }
      }),
    [columnsProps]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: rowsPropsMemoized })

  // console.log('AAAAA', rows)
  // console.log('BBBBB', columnsProps)

  return (
    <div className="max-w-full overflow-x-auto">
      <table
        {...getTableProps()}
        className={`w-full table-fixed bg-base-1 rounded border-separate border border-card-stroke`}
        cellSpacing="0"
        // #TODO: Don't use fixed number, need refactor
        style={{ minWidth: 700 }}
      >
        <thead className={`text-left`}>
          {headerGroups.map(headerGroup => {
            const {
              key,
              ...restHeaderGroupProps
            } = headerGroup.getHeaderGroupProps()
            return (
              <tr key={key} {...restHeaderGroupProps} className="bg-base-2">
                {headerGroup.headers.map(column => {
                  const { key, ...restHeaderProps } = column.getHeaderProps()
                  const columnAsAny = column as { [key: string]: any }
                  const textAlign: TextAlignProp =
                    columnAsAny.textAlign || 'right'
                  return (
                    <th
                      key={key}
                      {...restHeaderProps}
                      className={`py-2 px-4 text-inverted-2 text-xs font-semibold first:rounded-tl last:rounded-tr ${
                        textAligns[textAlign]
                      } ${columnAsAny.size || ''}`}
                    >
                      {column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()} className="text-sm text-on-base">
          {isLoading ? (
            <tr>
              <td>
                <TdWrapper>
                  <LoadingPlaceholder />
                </TdWrapper>
              </td>
            </tr>
          ) : (
            rows.map(row => {
              prepareRow(row)
              const { key, ...restRowProps } = row.getRowProps()
              return (
                <tr key={key} {...restRowProps} className={`hover:bg-base-2`}>
                  {row.cells.map(cell => {
                    const { key, ...restCellProps } = cell.getCellProps()
                    const column = cell.column as { [key: string]: any }
                    const textAlign: TextAlignProp = column.textAlign || 'left'
                    return (
                      <td
                        key={key}
                        {...restCellProps}
                        className={`p-0 break-words border-t border-card-stroke first:rounded-bl last:rounded-br ${textAligns[textAlign]}`}
                      >
                        {cell.render('Cell', {
                          cellWrapperProps: cell.row.original.cellWrapperProps,
                        })}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export const Table = React.memo(TableComponent)

type CellWrapperProp = React.ComponentClass<any> | React.FunctionComponent<any>
type TextAlignProp = 'left' | 'right' | 'center'
export interface TableProps {
  /**
   * Columns of the Table
   */
  columns: {
    /**
     * ID of the column
     */
    id: string
    /**
     * Label of the column. Can be an String or Component
     */
    label: string | React.ReactNode
    /**
     * Size of the column
     */
    size?: string
    /**
     * Component to wrap a cell. Usually an <a> or related. Props of each cell are placed at `rows.cellWrapperProps`
     */
    cellWrapper?: CellWrapperProp
    /**
     * Text align of the column
     */
    textAlign?: TextAlignProp
  }[]
  /**
   * Rows of the table
   */
  rows: {
    /**
     * Cell content. `Key` must be equal to `columns.id` value
     */
    [key: string]: unknown
    /**
     * Props to `columns.cellWrapper` component. Usually an `href` or related
     */
    cellWrapperProps?: { [key: string]: unknown }
  }[]
  /** Table is loading
   * @default false
   */
  isLoading?: boolean

  // #TODO:
  /** Mapped rows data returned on select change. */
  // data?: Array<{ [key:string]: unknown }>
  /** Makes rows selectable. */
  // selectable?: boolean
  /** List of elements index to start selected. */
  // startSelected?: Array<string | number>
  /** Placeholder options */
  // placeholderLength?: number
  // placeholderSize?: 'default' | 'large'
  // onChange?: Function,
  // actions?: PropTypes.node
}
