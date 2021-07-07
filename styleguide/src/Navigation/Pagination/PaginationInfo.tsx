import React from 'react'

import { Select } from '../../Forms/Select'

const PaginationInfoComponent = ({
  currentItemsLength,
  totalItemsLength = 0,
  itemsLengthOptions,
  onItemsLengthChange,
}: PaginationInfoProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.currentTarget.value
    onItemsLengthChange && onItemsLengthChange(selectedOption)
  }

  if (!currentItemsLength && currentItemsLength !== 0) return null

  const maxItemsLength = Math.max(currentItemsLength, totalItemsLength)

  return (
    <div className="pagination-info hidden sm:flex">
      <div className="flex items-center mr-5 text-inverted-2 tracking-4 text-f6">
        {itemsLengthOptions ? (
          <Select
            options={itemsLengthOptions}
            withoutStyle
            aria-label="Itens por página"
            onChange={handleChange}
          />
        ) : (
          <span>
            Mostrando{' '}
            <span className="pagination-info-current">
              ${currentItemsLength}
            </span>
          </span>
        )}{' '}
        de <span className="pagination-info-total">{maxItemsLength}</span> no
        total
      </div>
    </div>
  )
}

export const PaginationInfo = PaginationInfoComponent

export interface PaginationInfoProps {
  /**
   * Current length of items at page
   * */
  currentItemsLength?: number
  /**
   * Total length of items available
   * */
  totalItemsLength?: number
  /**
   * Options of length available
   * @deprecated Refactor required (Change to array of numbers and selectedLength)
   * */
  itemsLengthOptions?: {
    label: string | number
    value?: string | number | boolean
  }[]
  /**
   * Function to run when items length is changed
   * */
  onItemsLengthChange?: (arg0: string | number) => any
}
