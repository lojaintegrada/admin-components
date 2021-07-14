import React from 'react'

import { PaginationInfo, PaginationInfoProps } from './PaginationInfo'
import { PaginationNav, PaginationNavProps } from './PaginationNav'

const PaginationComponent = ({
  className = '',
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  currentItemsLength,
  totalItemsLength,
  itemsLengthOptions,
  onItemsLengthChange,
}: PaginationProps) => {
  return (
    <div
      className={`pagination flex flex-wrap justify-end items-center leading-4 sm:justify-between ${className}`}
    >
      <PaginationInfo
        currentItemsLength={currentItemsLength}
        totalItemsLength={totalItemsLength}
        itemsLengthOptions={itemsLengthOptions}
        onItemsLengthChange={onItemsLengthChange}
      />
      <PaginationNav
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export const Pagination = React.memo(PaginationComponent)

export interface PaginationProps
  extends PaginationInfoProps,
    PaginationNavProps {
  /**
   * Custom class name
   * */
  className?: string
}
