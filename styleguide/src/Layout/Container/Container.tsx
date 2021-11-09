import React from 'react'
import { CONTAINER_MAX_SIZE } from '../constants'

const Container = ({
  children,
  expanded,
  className = '',
}: ContainerProps): JSX.Element => (
  <div
    className={`${
      expanded ? CONTAINER_MAX_SIZE.expanded : CONTAINER_MAX_SIZE.default
    } page-container mx-auto px-5 lg:px-8 mt-6 mb-16 lg:mb-10 pb-3 lg:pb-0 ${className}`}
    data-expanded={expanded}
  >
    {children}
  </div>
)

const Header = ({ children, className = '' }: ContainerProps): JSX.Element => {
  return (
    <div className={`w-full flex justify-between items-baseline ${className}`}>
      {children}
    </div>
  )
}

Container.Header = Header
export default Container

export interface ContainerProps {
  /** Container expanded
   * @default false
   */
  expanded?: boolean
  /**
   * Custom class name
   */
  className?: string
  children?: React.ReactNode
}
