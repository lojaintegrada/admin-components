import React from 'react'
import { Icon } from '../../Icons'

const defaultClass = 'w-full flex flex-row justify-start items-center gap-x-2 text-inverted-2'

export const HelpLink: React.FC<HelpLinkProps> = React.memo(
  ({ className = '', text = '', href = '', as = 'hyperLink', onClick }) => {
    const Text = () => (
      <>
        <Icon icon="questionCircle" size={4} />
        <span className="text-sm font-semibold">{text}</span>
      </>
    )

    const HyperLink = () => (
      <a
        className={`${defaultClass} ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
        id="helpLinkContainer"
      >
        <Text/>
      </a>
    )

    const Button = () => (
      <button
        className={`${defaultClass} ${className}`}
        id="helpLinkContainer"
        onClick={onClick}
      >
        <Text/>
      </button>
    )

    return (
      as == 'hyperLink' ? <HyperLink/> : <Button/>
    )
  }
)

export interface HelpLinkProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Text to be displayed
   * */
  text: string
  /**
   * Component behaviour as hyper link or button
   * */
  as: 'hyperLink' | 'button'
  /**
   * Href to the link where component redirects
   * */
  href?: string
  /**
   * Button action when clicked
   * */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
