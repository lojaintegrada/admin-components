import React, { useState, useEffect } from 'react'
import { Icon, IconProps } from '../../Icons'

type alertTypesOptions = 'success' | 'warning' | 'danger' | 'info' | 'infoOutline' | 'infoDark' | 'primary'

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
    class: 'bg-warning-light border-warning-dark',
    icon: 'exclamationTriangle',
    iconClass: 'text-warning-dark',
  },
  danger: {
    class: 'bg-danger-light border-danger',
    icon: 'ban',
    iconClass: 'text-danger',
  },
  info: {
    class: 'bg-focus-light border-focus-dark',
    icon: 'infoCircle',
    iconClass: 'text-focus-dark',
  },
  infoOutline: {
    class: 'bg-base-1 border-focus-dark',
    icon: 'infoCircle',
    iconClass: 'text-focus-dark',
  },
  infoDark: {
    class: 'bg-base-1 border-[#607081]',
    icon: 'infoCircle',
    iconClass: 'text-[#607081]',
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
  hideBorder = false,
  customIcon,
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
      className={`alert border-l-4 py-4 pl-6 pr-5 rounded w-full relative flex items-start sm:items-center ${alertTypes[type].class}${hideBorder ? '' : ' border'}`}
    >
      {!hideIcon && (
        <div
          className={`alert-icon hidden sm:block flex-shrink-0 mr-3 ${alertTypes[type].iconClass}`}
        >
          <Icon
            icon={customIcon ? customIcon : alertTypes[type].icon}
            size={6}
          />
        </div>
      )}
      <div className="flex-grow flex flex-col sm:flex-row items-start sm:items-center justify-between min-w-0">
        <div className="flex flex-col justify-center min-w-0 break-words text-f6 tracking-4 leading-6 text-on-base">
          <span className="alert-title font-semibold">{title}</span>
          {subtitle && <span className="alert-subtitle mt-1">{subtitle}</span>}
        </div>
        {actions && (
          <div className="alert-actions flex flex-shrink-0 items-center flex-row sm:flex-row-reverse sm:space-x-reverse space-x-3 mt-3 sm:mt-0 sm:ml-5">
            {actions}
          </div>
        )}
      </div>
      {(showClose || onClose) && (
        <div className={`alert-close flex-shrink-0 flex self-start ml-5`}>
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
  title: string | React.ReactNode
  /**
   * Alert text below title
   */
  subtitle?: string | React.ReactNode
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
  /** Hide alert border
   * @default false
   */
  hideBorder?: boolean
  /**
   * Custom icon
   */
  customIcon?: IconProps['icon']
  /**
   * Action for the alert, like button and hiperlinks
   * */
  actions?: React.ReactNode
}
