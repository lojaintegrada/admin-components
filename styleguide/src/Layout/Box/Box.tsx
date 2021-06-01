import React from 'react'
import './../../tailwind.css'

import { BoxHeader, BoxHeaderProps } from './BoxHeader'
import { BoxContent, BoxContentProps } from './BoxContent'

export class Box extends React.PureComponent<BoxProps> {
  static Header = (props: BoxHeaderProps) => {
    return <BoxHeader {...props} />
  }
  static Content = (props: BoxContentProps) => {
    return <BoxContent {...props} />
  }

  render() {
    const { children } = this.props
    return (
      <div className="box flex flex-col bg-base-1 border border-card-stroke rounded p-5 mb-5 lg:p-10 lg:mb-10">
        {children}
      </div>
    )
  }
}

export interface BoxProps {
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode)
}
