import React, { useRef } from 'react'

import { Icon } from '../../Icons/Icon'
import { Select } from '../../Forms/Select'

const selectOptions = [
  { label: 'Visualizar 15', value: 15 },
  { label: 'Visualizar 50', value: 50, disabled: true },
  { label: 'Visualizar 100', value: 100 },
]

const PaginationComponent = ({
  className = '',
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationProps) => {
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
    <div
      className={`flex flex-wrap justify-end items-center leading-4 sm:justify-between ${className}`}
    >
      <div className="hidden sm:flex">
        <div className="flex items-center mr-5 text-inverted-2 tracking-4 text-f6">
          {/* <select
            aria-label="Itens por página"
            className="appearance-none mr-1 pr-4 cursor-pointer hover:text-inverted-1"
            style={{
              background:
                'url(\'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23607081"><path d="M11.1111 6H4.8889C4.61957 6 4.37601 6.16267 4.2729 6.41156C4.16979 6.66044 4.22668 6.94756 4.41779 7.13778L7.5289 10.2489C7.65868 10.3796 7.82935 10.4444 8.00001 10.4444C8.17068 10.4444 8.34135 10.3796 8.47112 10.2489L11.5822 7.13778C11.7733 6.94756 11.8302 6.66044 11.7271 6.41156C11.624 6.16267 11.3813 6 11.1111 6Z" /></svg>\') 100% 50% no-repeat transparent',
            }}
          >
            <option>Mostrando 50</option>
          </select> */}
          <Select
            options={selectOptions}
            withoutStyle
            aria-label="Itens por página"
          />
          de 2090 no total
        </div>
      </div>
      <div className="table-paginacao flex items-center justify-between w-full sm:w-auto">
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
          / <button>{totalPages}</button>
        </div>
        <div className="text-inverted-2 ml-5 flex items-center">
          <button
            className="mr-3 duration-200 hover:text-inverted-1"
            aria-label="Ir para página anterior"
            onClick={() => {
              if (currentPage > 1) handleChange(currentPage - 1)
            }}
          >
            <Icon icon="arrowLeft" block size={4} />
          </button>
          <button
            className="duration-200 hover:text-inverted-1"
            aria-label="Ir para próxima página"
            onClick={() => {
              if (currentPage < totalPages) handleChange(currentPage + 1)
            }}
          >
            <Icon icon="arrowRight" block size={4} />
          </button>
        </div>
      </div>
    </div>
  )
}

export const Pagination = React.memo(PaginationComponent)

export interface PaginationProps {
  /**
   * Custom class name
   * */
  className?: string
  /** Define selected page.
   * @default 1
   * */
  currentPage: number
  /** Define total count of pages.
   * @default 1
   * */
  totalPages: number
  /**
   * Function to run when page is changed.
   * */
  onPageChange: Function
}
