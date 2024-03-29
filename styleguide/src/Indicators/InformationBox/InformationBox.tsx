import React from 'react'
import { Icon, IconProps } from '../../Icons'

type InformationBoxTypesOptions = 'tip' | 'warning' | 'danger' | 'info'

const InformationBoxTypes: Record<
  InformationBoxTypesOptions,
  {
    title: string
    class: string
    icon: IconProps['icon']
    iconClass: string
  }
> = {
  tip: {
    title: 'Dica!',
    class: 'bg-success-light border-success',
    icon: 'lightbulb',
    iconClass: 'text-success',
  },
  warning: {
    title: 'Atenção!',
    class: 'bg-warning-light border-warning',
    icon: 'exclamationTriangle',
    iconClass: 'text-warning',
  },
  danger: {
    title: 'Cuidado!',
    class: 'bg-danger-light border-danger',
    icon: 'ban',
    iconClass: 'text-danger',
  },
  info: {
    title: 'Informação!',
    class: 'bg-focus-light border-focus-dark',
    icon: 'infoCircle',
    iconClass: 'text-focus-dark',
  },
}

const InformationBoxComponent = ({
  type = 'tip',
  subtitle,
  title,
}: InformationBoxProps) => {
  return (
    <div
      className={`InformationBox pl-4 pr-6 pt-5 pb-6 rounded w-full relative flex items-start mb-3 ${InformationBoxTypes[type].class}`}
    >
      <div
        className={`w-10 h-10 flex justify-center items-center flex-shrink-0 rounded-full mr-3 bg-base-1`}
      >
        <Icon
          icon={InformationBoxTypes[type].icon}
          className={`InformationBox-icon ${InformationBoxTypes[type].iconClass}`}
          size={4}
        />
      </div>

      <div className="flex-grow flex flex-col sm:flex-row items-start justify-between min-w-0">
        <div className="flex flex-col justify-center min-w-0 break-words tracking-4 leading-6 text-on-base">
          <span
            className={`InformationBox-title text-f5 font-bold ${InformationBoxTypes[type].iconClass}`}
          >
            {title || InformationBoxTypes[type].title}
          </span>
          {subtitle && (
            <span className="InformationBox-subtitle text-f6 font-regular mt-1">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export const InformationBox = React.memo(InformationBoxComponent)

export interface InformationBoxProps {
  /** InformationBox color
   * @default info
   * */
  type?: keyof typeof InformationBoxTypes
  /** Title default is related with `type`
   * @default ''
   */
  title?: string | React.ReactNode
  /**
   * InformationBox text below title
   */
  subtitle?: string | React.ReactNode
}
