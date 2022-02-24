import React from 'react'

import { Row, useTable } from 'react-table'
import { Checkbox } from '../../Forms'
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

const TdClasses = `p-0 break-words border-t border-card-stroke first:rounded-bl last:rounded-br`
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
  selectable = false,
  isLoading = false,
  emptyText = 'Nenhum registro encontrado',
  onChange,
  selectedData,
  disabledRows = [],
  id,
}: TableProps) => {
  const rowsPropsMemoized = React.useMemo(() => rowsProps, [rowsProps])
  const [selectedRows, setSelectedRows] = React.useState<number[]>([])

  const columns = React.useMemo(
    () =>
      columnsProps.map((column) => {
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: rowsPropsMemoized })

  const handleSelect = React.useCallback(
    (newSelectedRows: number[]) => {
      setSelectedRows(newSelectedRows)
      const mapped = rows.filter(
        (element, index) => newSelectedRows.includes(index) && element
      )
      onChange?.(mapped)
      return
    },
    [rows, onChange]
  )

  const handleSelectRow = React.useCallback(
    (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked
      const newSelectedRows = [...selectedRows]
      if (isChecked && !disabledRows.includes(index)) {
        newSelectedRows.push(index)
      } else {
        const existentRow = newSelectedRows.indexOf(index)
        if (existentRow !== -1) newSelectedRows.splice(existentRow, 1)
      }
      handleSelect(newSelectedRows)
    },
    [selectedRows, disabledRows, handleSelect]
  )

  const handleSelectAllRows = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked
      const newSelectedRows: number[] = []
      if (isChecked) {
        rows.forEach((_, index) => {
          if (!disabledRows.includes(index)) newSelectedRows.push(index)
        })
      }
      handleSelect(newSelectedRows)
      return
    },
    [rows, disabledRows, handleSelect]
  )

  React.useEffect(() => {
    if (selectedData) {
      let isDataEqual = true
      if (selectedRows.length > selectedData.length) {
        isDataEqual = selectedRows.every((v, i) => v === selectedData[i])
      } else {
        isDataEqual = selectedData.every((v, i) => v === selectedRows[i])
      }
      if (!isDataEqual) setSelectedRows(selectedData)
    }
  }, [selectedData, selectedRows])

  const isHeaderSelectChecked = React.useMemo(() => {
    return selectedRows.length === rows.length - disabledRows.length
  }, [selectedRows, disabledRows, rows])

  const isHeaderSelectDisabled = React.useMemo(() => {
    return disabledRows.length === rows.length
  }, [disabledRows, rows])

  const isHeaderSelectedIndeterminate = React.useMemo(() => {
    return (
      selectedRows.length < rows.length - disabledRows.length &&
      selectedRows.length > 0
    )
  }, [selectedRows, disabledRows, rows])

  const columnsLength = React.useMemo(() => {
    return selectable ? columns.length + 1 : columns.length
  }, [columns, selectable])

  const tableId = React.useMemo(() => {
    return id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
  }, [id])

  return (
    <div className="max-w-full overflow-x-auto">
      <table
        {...getTableProps()}
        id={id}
        className={`w-full bg-base-1 rounded border-separate border border-card-stroke`}
        cellSpacing="0"
      >
        <thead className={`text-left`}>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps()
            return (
              <tr key={key} {...restHeaderGroupProps} className="bg-base-2">
                {selectable && (
                  <th
                    colSpan={1}
                    className={`py-2 px-4 first:rounded-tl last:rounded-tr`}
                  >
                    <Checkbox
                      onChange={(e) => handleSelectAllRows(e)}
                      checked={isHeaderSelectChecked}
                      indeterminate={isHeaderSelectedIndeterminate}
                      disabled={isHeaderSelectDisabled}
                      id={`checkboxSelectAllRows${tableId}`}
                    />
                  </th>
                )}
                {headerGroup.headers.map((column) => {
                  const { key, ...restHeaderProps } = column.getHeaderProps()
                  const columnAsAny = column as { [key: string]: any }
                  const textAlign: TextAlignProp =
                    columnAsAny.textAlign || 'left'
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
              {Array(columnsLength)
                .fill(0)
                .map((_, key) => (
                  <td key={key} className={`${TdClasses}`}>
                    <TdWrapper>
                      <LoadingPlaceholder />
                    </TdWrapper>
                  </td>
                ))}
            </tr>
          ) : !rows || !rows.length ? (
            <tr>
              <td colSpan={columnsLength || 1} className={`${TdClasses}`}>
                <TdWrapper>
                  <div className="text-center py-16 text-xl font-semibold text-on-base-2">
                    {emptyText}
                  </div>
                </TdWrapper>
              </td>
            </tr>
          ) : (
            rows.map((row, index) => {
              prepareRow(row)
              const { key, ...restRowProps } = row.getRowProps()
              const isRowDisabled = disabledRows.includes(index)
              const isRowChecked = selectedRows.includes(index)
              return (
                <tr
                  key={key}
                  {...restRowProps}
                  className={`hover:bg-base-2 ${
                    isRowChecked ? 'bg-primary-light' : ''
                  }`}
                >
                  {selectable && (
                    <td className={`${TdClasses} py-2 px-4`}>
                      <Checkbox
                        onChange={(e) => handleSelectRow(index, e)}
                        checked={isRowChecked}
                        disabled={isRowDisabled}
                        id={`checkboxRow${index}${tableId}`}
                      />
                    </td>
                  )}
                  {row.cells.map((cell) => {
                    const { key, ...restCellProps } = cell.getCellProps()
                    const column = cell.column as { [key: string]: any }
                    const textAlign: TextAlignProp = column.textAlign || 'left'
                    return (
                      <td
                        key={key}
                        {...restCellProps}
                        className={`${TdClasses} ${textAligns[textAlign]}`}
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
type TableRowProp = {
  /**
   * Cell content. `Key` must be equal to `columns.id` value
   */
  [key: string]: unknown
  /**
   * Props to `columns.cellWrapper` component. Usually an `href` or related
   */
  cellWrapperProps?: { [key: string]: unknown }
}
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
  rows: TableRowProp[]
  /** Table is loading
   * @default false
   */
  isLoading?: boolean
  /** Content to show when table is empty
   * @default 'Nenhum registro encontrado'
   */
  emptyText?: string | React.ReactNode
  /**
   * Makes rows selectable.
   * @default false
   */
  selectable?: boolean
  /**
   * Fired when the row is selectable and the Checkbox of the header/row is clicked
   */
  onChange?: (selectedRows: Row<TableRowProp>[]) => void
  /**
   * Array containing the index of selected rows.
   * @default undefined
   */
  selectedData?: number[]
  /**
   * Array containing the index of disabled rows.
   * @default []
   */
  disabledRows?: number[]
  /**
   * Id of the table.
   * @default undefined
   */
  id?: string
}
