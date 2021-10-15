import React from 'react'

import { BoxHeader, BoxHeaderProps } from './Components/Header/BoxHeader'
import { BoxContent, BoxContentProps } from './Components/Content/BoxContent'
import { BoxSeparator } from './Components/Separator/BoxSeparator'
import { SharedContext, SharedContextProps } from './Components/utils'

export class Box extends React.PureComponent<
  BoxProps,
  { showContent: boolean }
> {
  static Header = (props: BoxHeaderProps) => {
    return <BoxHeader {...props} />
  }
  static Content = (props: BoxContentProps) => {
    return <BoxContent {...props} />
  }
  static Separator = () => {
    return <BoxSeparator />
  }

  constructor(props: BoxProps) {
    super(props)
    this.state = {
      showContent: props.showContent ?? true,
    }
  }

  render() {
    const { children, className = '', variant = 'default' } = this.props
    const toggleContent = (value?: boolean) =>
      this.setState({ showContent: value ?? !this.state.showContent })
    const showContent = this.state.showContent
    const sharedProps = {
      variant,
      showContent,
      toggleContent,
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
