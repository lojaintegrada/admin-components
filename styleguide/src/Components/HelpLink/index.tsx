import React from 'react'
import { Icon } from '../../Icons'

const defaultClass =
  'flex p-1 pr-0 text-on-base-2 hover:text-on-base duration-200 transition-colors items-center'

export const HelpLink: React.FC<HelpLinkProps> = React.memo(
  ({
    className = '',
    text = '',
    mobileText,
    href = '',
    as = 'hyperLink',
    onClick,
  }) => {
    const Text = () => (
      <>
        <Icon icon="questionCircle" size={4} className="shrink-0" block />
        <span
          className={`text-f6 font-semibold tracking-4 leading-6 ml-2
            ${!mobileText ? 'hidden md:inline' : ''}
          `}
        >
          {text}
        </span>
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
        <Text />
      </a>
    )

    const Button = () => (
      <button
        className={`${defaultClass} ${className}`}
        id="helpLinkContainer"
        onClick={onClick}
      >
        <Text />
      </button>
    )

    return as == 'hyperLink' ? <HyperLink /> : <Button />
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
  text?: string
  /**
   * Text will appear on mobile or not
   * */
  mobileText?: boolean
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
