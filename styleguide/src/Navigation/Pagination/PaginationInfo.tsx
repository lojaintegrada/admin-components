import React from 'react'

import { Select } from '../../Forms/Select'

const PaginationInfoComponent = ({
  currentItemsLength,
  totalItemsLength,
  itemsLengthOptions,
  onItemsLengthChange,
}: PaginationInfoProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.currentTarget.value
    onItemsLengthChange && onItemsLengthChange(selectedOption)
  }

  if (!currentItemsLength) return null

  return (
    <div className="hidden sm:flex">
      <div className="flex items-center mr-5 text-inverted-2 tracking-4 text-f6">
        {itemsLengthOptions ? (
          <Select
            options={itemsLengthOptions}
            withoutStyle
            aria-label="Itens por página"
            onChange={handleChange}
          />
        ) : (
          `Mostrando ${currentItemsLength}`
        )}{' '}
        de {totalItemsLength || currentItemsLength} no total
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
