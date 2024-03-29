import React, { useRef } from 'react'

import { Icon } from '../../Icons/Icon'

const PaginationNavComponent = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationNavProps) => {
  const inputEl = useRef<HTMLSpanElement>(null)
  const maxTotalPages = Math.max(currentPage, totalPages)
  const hasNext = currentPage < totalPages
  const hasPrev = currentPage > 1

  const handleChange = (page: number) => {
    page = page < 1 ? 1 : page > maxTotalPages ? maxTotalPages : page
    onPageChange && onPageChange(page)
  }

  const onPreventDefault = (e: any) => {
    e.preventDefault()
    return false
  }

  const handleKeyDown = (e: any) => {
    if (e.which >= 35 && e.which <= 39) {
      return
    }
    if (e.which === 46 || e.which === 8) {
      return
    }
    if (e.which === 13) {
      const currentValue = inputEl?.current?.innerText
      if (currentValue) {
        const page = parseInt(currentValue)
        handleChange(page)
      }
      e.preventDefault()
      return
    }
    if (isNaN(parseInt(String.fromCharCode(e.which)))) {
      e.preventDefault()
    }
    return
  }

  return (
    <div className="pagination-nav flex items-center justify-between w-full sm:w-auto">
      <div className="text-inverted-2 text-f6 tracking-4">
        <span
          id="btnPaginationActualPage"
          className="pagination-nav-current inline-block w-9 bg-base-1 border border-card-stroke/50 rounded font-semibold leading-8 text-center text-primary"
          ref={inputEl}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onKeyDown={handleKeyDown}
          onCopy={onPreventDefault}
          onCut={onPreventDefault}
          onPaste={onPreventDefault}
        >
          {currentPage}
        </span>{' '}
        /{' '}
        <button
          type="button"
          id="btnPaginationLastPage"
          className="pagination-nav-total focus:outline-none"
          onClick={() => {
            if (currentPage !== maxTotalPages) handleChange(maxTotalPages)
          }}
        >
          {maxTotalPages}
        </button>
      </div>
      <div className="text-inverted-2 ml-5 flex items-center">
        <button
          type="button"
          id="btnPaginationPrev"
          className={`pagination-nav-previous mr-3 duration-200 outline-none ${
            hasPrev ? 'hover:text-inverted-1' : ''
          }`}
          aria-label="Ir para página anterior"
          onClick={() => {
            if (hasPrev) handleChange(currentPage - 1)
          }}
        >
          <Icon icon="arrowLeft" block size={4} />
        </button>
        <button
          type="button"
          id="btnPaginationNext"
          className={`pagination-nav-next duration-200 outline-none ${
            hasNext ? 'hover:text-inverted-1' : ''
          }`}
          aria-label="Ir para próxima página"
          onClick={() => {
            if (hasNext) handleChange(currentPage + 1)
          }}
        >
          <Icon icon="arrowRight" block size={4} />
        </button>
      </div>
    </div>
  )
}

export const PaginationNav = PaginationNavComponent

export interface PaginationNavProps {
  /** Define selected page.
   * @default 1
   * */
  currentPage?: number
  /** Define total count of pages.
   * @default 1
   * */
  totalPages?: number
  /**
   * Function to run when page is changed.
   * */
  onPageChange?: (arg0: number) => any
}
