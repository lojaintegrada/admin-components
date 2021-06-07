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
  static Separator = () => {
    return (
      <hr className="border-card-stroke mb-5 lg:mb-7 mt-5 lg:mt-8 -mx-5 lg:-mx-10" />
    )
  }

  render() {
    const { children, className = '' } = this.props
    return (
      <div
        className={`w-full box flex flex-col bg-base-1 border border-card-stroke rounded p-5 lg:p-10 ${className}`}
      >
        {children}
      </div>
    )
  }
}

export interface BoxProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Box Header and Content
   */
  children?:
    | React.ReactElement<BoxContentProps>
    | Array<React.ReactElement<BoxContentProps>>
    | React.ReactElement<BoxHeaderProps>
    | Array<React.ReactElement<BoxHeaderProps>>
}
