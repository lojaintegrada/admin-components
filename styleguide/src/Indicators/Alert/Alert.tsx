import React, { useState, useEffect } from 'react'
import { Icon, IconProps } from '../../Icons'

type alertTypesOptions = 'success' | 'warning' | 'danger' | 'info' | 'primary'

const alertTypes: Record<
  alertTypesOptions,
  {
    class: string
    icon: IconProps['icon']
    iconClass: string
  }
> = {
  success: {
    class: 'bg-success-light border-success',
    icon: 'checkCircle',
    iconClass: 'text-success',
  },
  warning: {
    class: 'bg-warning-light border-warning',
    icon: 'exclamationTriangle',
    iconClass: 'text-warning',
  },
  danger: {
    class: 'bg-danger-light border-danger',
    icon: 'ban',
    iconClass: 'text-danger',
  },
  info: {
    class: 'bg-base-1 border-inverted-2',
    icon: 'infoCircle',
    iconClass: 'text-inverted-2',
  },
  primary: {
    class: 'bg-primary-light border-primary',
    icon: 'infoCircle',
    iconClass: 'text-primary',
  },
}

const AlertComponent = ({
  type = 'info',
  isOpen = true,
  title,
  subtitle,
  actions,
  showClose = false,
  onClose,
  hideIcon = false,
}: AlertProps) => {
  const [alertIsOpen, setAlertIsOpen] = useState(isOpen)
  useEffect(() => {
    setAlertIsOpen(isOpen)
  }, [isOpen])

  const handleOnClose = () => {
    setAlertIsOpen(false)
    onClose?.()
  }

  if (!alertIsOpen) return null
  return (
    <div
      className={`alert border border-l-4 py-4 px-5 rounded w-full relative flex items-start sm:items-center ${alertTypes[type].class}`}
    >
      {!hideIcon && (
        <div
          className={`alert-icon hidden sm:block flex-shrink-0 mr-3 ${alertTypes[type].iconClass}`}
        >
          <Icon icon={alertTypes[type].icon} size={6} />
        </div>
      )}
      <div className="flex-grow flex flex-col sm:flex-row items-start sm:items-center justify-between min-w-0">
        <div className="flex flex-col justify-center min-w-0 break-words text-f6 tracking-4 leading-5 text-on-base">
          <span className="alert-title font-semibold">{title}</span>
          {subtitle && <span className="alert-subtitle mt-1">{subtitle}</span>}
        </div>
        {actions && (
          <div className="alert-actions flex items-center flex-row sm:flex-row-reverse sm:space-x-reverse space-x-3 mt-3 sm:mt-0 sm:ml-5">
            {actions}
          </div>
        )}
      </div>
      {(showClose || onClose) && (
        <div className={`alert-close flex-shrink-0 flex ml-5`}>
          <button
            className="p-2 -m-2 text-inverted-2 hover:text-inverted-1"
            onClick={handleOnClose}
          >
            <Icon icon="close" size={4} block className="mt-px sm:mt-0" />
          </button>
        </div>
      )}
    </div>
  )
}

export const Alert = React.memo(AlertComponent)

export interface AlertProps {
  /** Alert color
   * @default info
   * */
  type?: keyof typeof alertTypes
  /** Alert is visible
   * @default true
   */
  isOpen?: boolean
  /**
   * Alert main text
   */
  title: string
  /**
   * Alert text below title
   */
  subtitle?: string
  /**
   * Function to close alert (also activate `showClose`)
   */
  onClose?: () => void
  /** Show button close
   * @default false
   */
  showClose?: boolean
  /** Hide alert icon
   * @default false
   */
  hideIcon?: boolean
  /**
   * Action for the alert, like button and hiperlinks
   * */
  actions?: React.ReactNode
}
