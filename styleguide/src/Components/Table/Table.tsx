import React from 'react'

import { useTable } from 'react-table'

const textAligns = {
  right: 'tr',
  left: 'tl',
  center: 'tc'
}
const placeholderSizes = {
  default: "pv4",
  large: "pv8"
}

interface TdWrapperProps {
  Wrapper?: React.ElementType
  children: React.ReactNode
  props?: { [key:string]: unknown }
}

const TdWrapper = ({ Wrapper, props = {}, children }: TdWrapperProps) =>
  Wrapper ? (
    <Wrapper className="pv3 ph4 db no-underline c-on-base" {...props}>
      {children}
    </Wrapper>
  ) : (
    <>
      {children}
    </>
  )
 
const TableComponent = (
  {
    columns: columnsProps,
    rows: rowsProps,
    selectable,
    placeholderLength,
    placeholderSize,
    isLoading = false
  }: TableProps
) => {

  const rowsPropsMemoized = React.useMemo(() => rowsProps, [rowsProps])

  const columns = React.useMemo(()=> columnsProps.map(column => {
    return {
      Header: column.label as any,
      accessor: column.id as string,
    }
  }), [columnsProps])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: rowsPropsMemoized })

  console.log('AAAAA', rows)

  return (
    <table {...getTableProps()} className={`w-full table-fixed bg-base-1 rounded border-separate border border-card-stroke`} cellSpacing="0">
      <thead className={`text-left`}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-base-2">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className={`p-0 first:rounded-tl last:rounded-tr`}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="">
        {isLoading ? (
          <>Loading</>
        ) : (
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={`hover:bg-base-2`}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-0 border-t border-card-stroke first:rounded-bl last:rounded-br"
                    >
                      <TdWrapper {...{}}>
                        {cell.render('Cell')}
                      </TdWrapper>
                    </td>
                  )
                })}
              </tr>
            )
          })
        )}
      </tbody>
    </table>
  )
}

export const Table = React.memo(TableComponent)

export interface TableProps {
  /** Columns that will have on table. */
  columns: {
    /** ID of the column. */
    id: string
    /** Label of the column. */
    label: string | React.ReactNode
    /** Size of the column in percentage. */
    size?: number
    /** Component to wrap a cell. */
    cellWrapper?: React.ReactNode | React.ElementType | React.ReactElement | Function
    /** Make the column text align. One of: left, right, center */
    textAlign?: 'left' | 'right' | 'center'
  }[]
  /** Rows that will be show on table. */
  rows: Array<{ [key:string]: unknown }>
  /** Mapped rows data returned on select change. */
  data?: Array<{ [key:string]: unknown }>
  /** Makes rows selectable. */
  selectable?: boolean
  /** List of elements index to start selected. */
  startSelected?: Array<string | number>
  /** Is table in Loading State */
  isLoading?: boolean
  /** Placeholder options */
  placeholderLength?: number
  placeholderSize?: 'default' | 'large'
  onChange?: Function,
  // actions?: PropTypes.node
}
