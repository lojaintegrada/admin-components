import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
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
import { getDayClassName, getMonthName } from './helper'
import { defaultPeriods, months } from './constants'

registerLocale('pt-BR', ptBR);

export const Calendar: React.FC<CalendarProps> = React.memo(
  ({ className='', periods=defaultPeriods, prevMonths=3, onDatesChange}) => {
    const todayDate = new Date(),
      yesterdayDate = subDays(todayDate, 1),
      minDate = subMonths(todayDate, prevMonths),
      maxDate = yesterdayDate

    const [selectedPeriod, setSelectedPeriod] = useState<string>('ontem')
    const [customPeriodIsOpen, setCustomPeriodIsOpen] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date>(yesterdayDate)
    const [endDate, setEndDate] = useState<Date>(yesterdayDate)
    const [startMonthsIsOpen, setStartOpenMonths] = useState<boolean>(false)
    const [endMonthsIsOpen, setEndOpenMonths] = useState<boolean>(false)

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

    // trunca a data inicial como minDate quando a data selecionada é anterior a ela
    if(isBefore(date, minDate)) {
      setStartDate(minDate)
      return
    }

    if(!isValid(date)) return

    if(!isWithinInterval(date, { start: minDate, end: maxDate })) return

    if(!isBefore(date, endDate) && !isEqual(date, endDate)) return

    setStartDate(date)
  }

  const changeStartDateOnCalendar = (date: Date) => {
    // trunca a data inicial como minDate quando a data selecionada é anterior a ela
    if(isBefore(date, minDate)) {
      setStartDate(minDate)
      return
    }
    // trunca data inicial e final como a data selecionada quando data inicial selecionada é posterior a final
    if(isBefore(endDate, date)) {
      setStartDate(date)
      setEndDate(date)
      return
    }
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

  const dayIsEnabled = (day: Date, period: 'start' | 'end') => {
    if(period == 'start') {
      if(!isValid(day)) return false

      if(!isWithinInterval(day, { start: minDate, end: maxDate })) return false

      if(!isBefore(day, endDate) && !isEqual(day, endDate)) return false
    } else {
      if(!isValid(day)) return false

      if(!isWithinInterval(day, { start: minDate, end: maxDate })) return false

      if(!isBefore(startDate, day) && !isEqual(startDate, day)) return false
    }
    return true
  }

  const CustomHeader = (decreaseMonth: MouseEventHandler<HTMLDivElement>, increaseMonth: MouseEventHandler<HTMLDivElement>, date: Date, calendar: 'start' | 'end'): JSX.Element => (
    <div className='flex justify-between'>
      <div className='cursor-pointer' onClick={decreaseMonth}>
        <Icon icon='angleLeft' size={4}/>
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <span className='font-bold text-inverted-2'>
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <div className='cursor-pointer' onClick={() => calendar == 'start' ? setStartOpenMonths(!startMonthsIsOpen) : setEndOpenMonths(!endMonthsIsOpen)}>
          <Icon icon='angleDown' size={4} className={`transition duration-300 ${(calendar == 'start' ? startMonthsIsOpen : endMonthsIsOpen) && 'rotate-180'}`}/>
        </div>
      </div>
      <div className='cursor-pointer' onClick={increaseMonth}>
        <Icon icon='angleRight' size={4}/>
      </div>
    </div>
  )
    
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
                  onChange={(date: Date) => changeStartDateOnCalendar(date)}
                  locale="pt-BR"
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  renderMonthContent={(month) => getMonthName(month)}
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                  }) => (CustomHeader(decreaseMonth, increaseMonth, date, 'start'))}
                  showMonthYearPicker={startMonthsIsOpen}
                  showFourColumnMonthYearPicker
                  inline
                  disabledKeyboardNavigation
                  dayClassName={(day) => {
                    return getDayClassName(day, dayIsEnabled(day, 'start'), startDate, endDate, 'start')
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
                  renderMonthContent={(month) => getMonthName(month)}
                  renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                  }) => (CustomHeader(decreaseMonth, increaseMonth, date, 'end'))}
                  showMonthYearPicker={endMonthsIsOpen}
                  showFourColumnMonthYearPicker
                  inline
                  disabledKeyboardNavigation
                  dayClassName={(day) => {
                    return getDayClassName(day, dayIsEnabled(day, 'end'), startDate, endDate, 'end')
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
   * Number of months previous to today's date to be analyzed
   * */
  prevMonths?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
  /**
   * Function triggered on each date change. 
   * */
  onDatesChange: (startDate: Date, endDate: Date) => void
}

// TODO: bloquear data final menor que inicial