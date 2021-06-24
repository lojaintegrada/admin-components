import React, { useRef } from 'react'

import { Icon } from '../../Icons/Icon'

const PaginationNavComponent = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationNavProps) => {
  const inputEl = useRef<HTMLSpanElement>(null)

  const handleChange = (page: number) => {
    page = page < 1 ? 1 : page > totalPages ? totalPages : page
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
    <div className="flex items-center justify-between w-full sm:w-auto">
      <div className="text-inverted-2 text-f6 tracking-4">
        <span
          className="text-primary font-semibold"
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
          className="focus:outline-none"
          onClick={() => {
            if (currentPage !== totalPages) handleChange(totalPages)
          }}
        >
          {totalPages}
        </button>
      </div>
      <div className="text-inverted-2 ml-5 flex items-center">
        <button
          className="mr-3 duration-200 hover:text-inverted-1 focus:outline-none"
          aria-label="Ir para página anterior"
          onClick={() => {
            if (currentPage > 1) handleChange(currentPage - 1)
          }}
        >
          <Icon icon="arrowLeft" block size={4} />
        </button>
        <button
          className="duration-200 hover:text-inverted-1 focus:outline-none"
          aria-label="Ir para próxima página"
          onClick={() => {
            if (currentPage < totalPages) handleChange(currentPage + 1)
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
