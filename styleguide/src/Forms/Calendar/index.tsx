import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  subDays,
  subMonths,
  format,
  parse,
  isValid,
  isWithinInterval,
  isBefore,
  isEqual
} from 'date-fns'
import DatePicker, {registerLocale} from 'react-datepicker'
import ptBR from "date-fns/locale/pt-BR"
import { InputMask } from '../InputMask'
import { Icon } from '../../Icons'
import { icons } from '../../Icons/icons-path'
import './variables-custom.scss'
import { getDayClassName } from './helper'

registerLocale('pt-BR', ptBR);

const defaultPeriods = [
  {
    id: 'ontem',
    label: 'Ontem',
    value: 1
  },
  {
    id: '7-dias',
    label: '7 dias',
    value: 7
  },
  {
    id: '30-dias',
    label: '30 dias',
    value: 30
  },
  {
    id: 'selecionar-periodo',
    label: 'Selecionar período',
    icon: 'calendarAlt'
  }
]

export const Calendar: React.FC<CalendarProps> = React.memo(
  ({ className='', periods=defaultPeriods, onDatesChange}) => {
    const todayDate = new Date(),
      yesterdayDate = subDays(todayDate, 1),
      minDate = subMonths(todayDate, 3),
      maxDate = yesterdayDate

    const [selectedPeriod, setSelectedPeriod] = useState<string>('ontem')
    const [customPeriodIsOpen, setCustomPeriodIsOpen] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date>(yesterdayDate)
    const [endDate, setEndDate] = useState<Date>(yesterdayDate)

    const customPeriodRef = useRef<HTMLDivElement>(null)

    const viewPortIsDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if(!viewPortIsDesktop) return
  
        if(!customPeriodRef.current?.contains(event.target as Node)) {
          setCustomPeriodIsOpen(false)
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside)
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [viewPortIsDesktop])

    useEffect(() => {
      onDatesChange(startDate, endDate)
    }, [startDate, endDate])

    const changePeriod = (id: string, value?: number) => {
      setSelectedPeriod(id)
  
      if(!value) {
        setCustomPeriodIsOpen(true)
  
        return
      }
  
      const date = subDays(todayDate, value)
  
      setStartDate(date)
      setEndDate(maxDate)
    }
  
    const changeStartDate = (value: string) => {
    const date = parse(value, 'dd/MM/yyyy', todayDate)

    if(!isValid(date)) return

    if(!isWithinInterval(date, { start: minDate, end: maxDate })) return

    if(!isBefore(date, endDate) && !isEqual(date, endDate)) return

    setStartDate(date)
  }

  const changeEndDate = (value: string) => {
    const date = parse(value, 'dd/MM/yyyy', todayDate)

    if(!isValid(date)) return

    if(!isWithinInterval(date, { start: minDate, end: maxDate })) return

    if(!isBefore(startDate, date) && !isEqual(startDate, date)) return

    setEndDate(date)
  }
  
    const changeDateRange = (dates: [Date | null, Date | null]) => {
      const [start, end] = dates
  
      if(start) setStartDate(start)
      if(end) setEndDate(end)
  
      setCustomPeriodIsOpen(false)
    }
    
    return (
      <div className={`relative ${className}`}>
        <div className="flex flex-wrap gap-2">
          {periods.map(period => (
            <button
              key={period.id}
              className={`flex items-center gap-x-1 h-10 px-2 rounded-md font-semibold ${ selectedPeriod === period.id ? 'bg-primary-light text-primary-dark' : 'text-inverted-2' }`}
              onClick={() => changePeriod(period.id, period.value)}
            >
              {period.icon && (
                <Icon icon={period.icon as any} />
              )}
              <span>{period.label}</span>
            </button>
          ))}
        </div>
        {customPeriodIsOpen && (
          <>
          {viewPortIsDesktop ? (
            <div ref={customPeriodRef} className="absolute top-full right-0 flex flex-col gap-y-6 px-5 py-6 border border-card-stroke rounded shadow bg-base-1 z-10">
              <div className="flex gap-x-6">
                <InputMask
                  className="w-full"
                  formatValue="date"
                  prefix={<Icon icon="calendarAlt" />}
                  prefixBorder={false}
                  value={format(startDate, 'dd/MM/yyyy')}
                  onChange={event => changeStartDate(event.target.value)}
                />
                <InputMask
                  className="w-full"
                  formatValue="date"
                  prefix={<Icon icon="calendarAlt" />}
                  prefixBorder={false}
                  value={format(endDate, 'dd/MM/yyyy')}
                  onChange={event => changeEndDate(event.target.value)}
                />
              </div>
              <div className="flex gap-x-6">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  locale="pt-BR"
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  inline
                  disabledKeyboardNavigation
                  dayClassName={(day) => {
                    return getDayClassName(day, startDate, endDate, 'start')
                  }}
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  locale="pt-BR"
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  maxDate={maxDate}
                  inline
                  disabledKeyboardNavigation
                  dayClassName={(day) => {
                    return getDayClassName(day, startDate, endDate, 'end')
                  }}
                />
              </div>
            </div>
          ) : (
            <DatePicker
              locale="pt-BR"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              minDate={minDate}
              maxDate={maxDate}
              onChange={dates => changeDateRange(dates)}
              onClickOutside={() => setCustomPeriodIsOpen(false)}
              startOpen
              withPortal
            />
          )}
          </>
        )}
      </div>
    )
  }
)

type PeriodsType = {
  id: string,
  label: string,
  value?: number,
  icon?: keyof typeof icons,
}

export interface CalendarProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Array of periods (yesterday, 7days, 30days and custom as default)
   * */
  periods?: PeriodsType[]
  /**
   * Function triggered on each date change. 
   * */
  onDatesChange: (startDate: Date, endDate: Date) => void
}

// TODO: bloquear data final menor que inicial