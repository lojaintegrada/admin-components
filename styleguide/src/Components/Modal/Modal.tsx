import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'

import { Icon } from '../../Icons'

const sizeClasses = {
  small: 'max-w-xl',
  default: 'max-w-4xl',
  large: 'max-w-6xl',
}

const ModalComponent = ({
  className = '',
  isOpen = false,
  size = 'default',
  headerTitle,
  headerClose = 'Fechar',
  footerActions,
  onClose,
  parentSelector,
  children,
}: ModalProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  useEffect(() => {
    setModalIsOpen(isOpen)
  }, [isOpen])

  const handleRequestCloseFunc = () => {
    setModalIsOpen(false)
  }
  const handleAfterCloseFunc = () => {
    onClose && onClose()
  }

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onAfterClose={handleAfterCloseFunc}
      onRequestClose={handleRequestCloseFunc}
      ariaHideApp={false}
      overlayClassName={
        'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-black-alpha px-3 focus:outline-none'
      }
      className={`relative max-h-screen p-10 pt-9 rounded-lg shadow-lg flex flex-col w-full bg-base-1 outline-none focus:outline-none border border-card-stroke break-words ${sizeClasses[size]} ${className}`}
      bodyOpenClassName={'ReactModal__Body--open overflow-hidden'}
      testId={'modal-component'}
      parentSelector={() => (parentSelector ? parentSelector : document.body)}
      contentElement={(props, children) => (
        <div {...props}>
          <div className="ReactModal__header w-full flex justify-between items-start">
            <span
              className={`min-w-0 text-inverted-2 text-xs font-semibold uppercase break-words ${
                headerTitle ? 'pb-3' : ''
              }`}
            >
              {headerTitle}
            </span>
            <button
              className="flex items-center p-2 pb-1 -mr-2 -mt-3 text-sm font-semibold text-inverted-2 hover:text-inverted-1"
              onClick={handleRequestCloseFunc}
            >
              {headerClose !== false && (
                <span className="pr-2">{headerClose}</span>
              )}
              <Icon icon="close" size={4} />
            </button>
          </div>
          <div className="ReactModal__innerContent flex-auto overflow-x-auto min-w-0 break-words">
            {children}
          </div>
          {footerActions && (
            <div className="ReactModal__footer pt-5">{footerActions}</div>
          )}
        </div>
      )}
    >
      {children}
    </ReactModal>
  )
}

export const Modal = React.memo(ModalComponent)

export interface ModalProps {
  /**
   * Custom class name
   * */
  className?: string
  /** Modal is open
   * @default false
   */
  isOpen?: boolean
  /** Modal width
   * @default 'default'
   * */
  size?: 'default' | 'large' | 'small'
  /**
   * Modal title
   * */
  headerTitle?: string | React.ReactNode
  /** Close text at header
   * @default 'Fechar'
   * */
  headerClose?: string | false
  /**
   * Call when modal is closed
   * */
  onClose?: Function
  /**
   * React children
   */
  children?: React.ReactNode
  /**
   * React children
   */
  footerActions?: React.ReactNode
  /** The parent element that the modal will be attached to
   * @default document.body
   */
  parentSelector?: HTMLElement | null
}
