import React from 'react'

import { Icon } from '../../Icons'
import { Tooltip } from '../../Indicators'
import { TableListItemProps } from './TableListItem.interface'
import { TableListItemWrapper } from './TableListItemWrapper'

export const TableListItem: React.FunctionComponent<TableListItemProps> = ({
  forceBorderDesktop = false,
  title,
  description,
  timestampTime,
  timestampDate,
  itemWrapper,
  itemWrapperProps,
  withHover = false,
  isInsideContainer = false,
  withIcon,
  append,
}) => {
  return (
    <div
      className={`table-item border-primary-bold border-opacity-10 border-t first:border-t-0 ${
        forceBorderDesktop ? 'lg:first:border-t' : ''
      }`}
    >
      <TableListItemWrapper
        Wrapper={itemWrapper}
        props={itemWrapperProps}
        withHover={withHover}
        isInsideContainer={isInsideContainer}
      >
        {withIcon && (
          <div className="table-item-icon flex items-center justify-center flex-none mr-4">
            <div
              className={`table-item-icon-background h-8 w-8 flex items-center justify-center rounded ${
                withIcon.class || ''
              }`}
            >
              {withIcon.tooltip ? (
                <Tooltip
                  content={withIcon.tooltip.message}
                  placement={withIcon.tooltip.placement}
                >
                  <span>
                    <Icon icon={withIcon.icon || 'minus'} block size={5} />
                  </span>
                </Tooltip>
              ) : (
                <Icon icon={withIcon.icon || 'minus'} block size={5} />
              )}
            </div>
          </div>
        )}
        <div className="table-item-content flex flex-col justify-center flex-auto gap-1.5 min-w-0 w-full">
          <div className="table-item-title text-f6 font-semibold">{title}</div>
          {description && (
            <div className="table-item-description">{description}</div>
          )}
        </div>
        {(timestampTime || timestampDate || append) && (
          <div className="table-item-timestamp-append flex flex-col justify-center items-end shrink-0 gap-1.5 ml-4 min-w-0 max-w-[50%] text-right">
            {timestampTime && (
              <div className="table-item-timestamp-time w-full">
                {timestampTime}
              </div>
            )}
            {timestampDate && (
              <div className="table-item-timestamp-date w-full hidden lg:block">
                {timestampDate}
              </div>
            )}
            {append && <div className="table-item-append w-full">{append}</div>}
          </div>
        )}
      </TableListItemWrapper>
    </div>
  )
}
