import React from 'react'

import { BoxHeader, BoxHeaderProps } from './Components/Header/BoxHeader'
import { BoxContent, BoxContentProps } from './Components/Content/BoxContent'
import { BoxSeparator } from './Components/Separator/BoxSeparator'
import { SharedContext, SharedContextProps, Observer } from './Components/utils'

export class Box extends React.PureComponent<BoxProps, BoxState> {
  static Header = (props: BoxHeaderProps) => {
    return <BoxHeader {...props} />
  }
  static Content = (props: BoxContentProps) => {
    return <BoxContent {...props} />
  }
  static Separator = () => {
    return <BoxSeparator />
  }

  state: BoxState = {
    isOpen: this.props.isOpen ?? true,
  }

  render() {
    const {
      children,
      className = '',
      variant = 'default',
      isToggle = false,
      id,
    } = this.props
    const toggleContent = (value?: boolean) =>
      this.setState({ isOpen: value ?? !this.state.isOpen })
    const { isOpen } = this.state
    const sharedProps = {
      variant,
      isOpen,
      toggleContent,
      isToggle,
    }

    return (
      <SharedContext.Provider value={sharedProps}>
        <Observer value={this.props.isOpen ?? true} didUpdate={toggleContent} />
        <div
          className={`box w-full flex flex-col bg-base-1 border border-card-stroke rounded ${className}`}
          data-opened={isOpen}
          id={id}
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
   * Box ID
   * */
  id?: string
  /**
   * Box Header and Content
   */
  children?:
    | React.ReactElement<BoxContentProps>
    | Array<React.ReactElement<BoxContentProps>>
    | React.ReactElement<BoxHeaderProps>
    | Array<React.ReactElement<BoxHeaderProps>>
  /**
   * Box show content
   * */
  isOpen?: boolean
}

interface BoxState {
  isOpen: boolean
}
