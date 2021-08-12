import React from 'react'

import { BoxHeader, BoxHeaderProps } from './Components/BoxHeader'
import { BoxContent, BoxContentProps } from './Components/BoxContent'
import { BoxSeparator } from './Components/BoxSeparator'
import { SharedContext, SharedContextProps } from './utils'

export class Box extends React.PureComponent<BoxProps> {
  static Header = (props: BoxHeaderProps) => {
    return <BoxHeader {...props} />
  }
  static Content = (props: BoxContentProps) => {
    return <BoxContent {...props} />
  }
  static Separator = () => {
    return <BoxSeparator />
  }

  render() {
    const { children, className = '', variant = 'default' } = this.props
    const sharedProps = {
      variant,
    }
    return (
      <SharedContext.Provider value={sharedProps}>
        <div
          className={`box w-full flex flex-col bg-base-1 border border-card-stroke rounded ${className}`}
        >
          {children}
        </div>
      </SharedContext.Provider>
    )
  }
}

export interface BoxProps extends Partial<SharedContextProps> {
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
