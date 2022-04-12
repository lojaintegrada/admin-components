import React from 'react'

import { LoadingPlaceholder } from '../LoadingPlaceholder'
import { TableListItemProps } from './TableListItem.interface'
import { TableListItemWrapper } from './TableListItemWrapper'

export const TableListItemLoading: React.FunctionComponent<Pick<TableListItemProps, 'forceBorderDesktop'>> = ({
  forceBorderDesktop = false,
}) => {
  return (
    <div
      className={`table-item table-item-loading border-primary-bold border-opacity-10 border-t first:border-t-0 ${
        forceBorderDesktop ? 'lg:first:border-t' : ''
      }`}
    >
      <TableListItemWrapper>
        <div className="table-item-icon flex items-center justify-center flex-none mr-4">
          <div
            className={`table-item-icon-background h-8 w-8 flex items-center justify-center rounded`}
          >
            <LoadingPlaceholder className="w-full" />
          </div>
        </div>
        <div className="table-item-content flex flex-col justify-center flex-auto gap-1.5 min-w-0 w-full">
          <div className="table-item-title text-f6 font-semibold">
            <LoadingPlaceholder className="w-2/3" />
          </div>
          <div className="table-item-description">
            <LoadingPlaceholder className="w-1/3" />
          </div>
        </div>
        <div className="table-item-timestamp flex flex-col justify-center items-end shrink-0 gap-1.5 ml-4 min-w-0 max-w-[50%] text-right">
          <div className="table-item-timestamp-time w-full">
            <LoadingPlaceholder className="w-16" />
          </div>
        </div>
      </TableListItemWrapper>
    </div>
  )
}
