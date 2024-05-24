import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  subDays,
  addDays,
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
import './variables-custom.scss'
import { formatDate, getDayClassName, getMonthName } from './helper'
import { CUSTOM_PERIOD, PREVIOUS_SEVEN_DAYS, PREVIOUS_THIRTY_DAYS, YESTERDAY, defaultPeriods, months } from './constants'
import { icons } from '../../Icons/icons-path'

registerLocale('pt-BR', ptBR);

export const Calendar: React.FC<CalendarProps> = React.memo(
  ({ className='', periods=defaultPeriods, prevMonths=3, onDatesChange}) => {
    const todayDate = new Date(),
      yesterdayDate = subDays(todayDate, 1),
      lastThirtyDays = subDays(yesterdayDate, 30),
      minDate = subMonths(todayDate, prevMonths),
      maxDate = yesterdayDate

    const [selectedPeriod, setSelectedPeriod] = useState<string>(YESTERDAY.id)
    const [customPeriodIsOpen, setCustomPeriodIsOpen] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date>(yesterdayDate)
    const [endDate, setEndDate] = useState<Date>(yesterdayDate)
    const [startMonthsIsOpen, setStartOpenMonths] = useState<boolean>(false)
    const [endMonthsIsOpen, setEndOpenMonths] = useState<boolean>(false)
    const [hasChangedDate, setHasChangedDate] = useState<boolean>(false)

    const customPeriodRef = useRef<HTMLDivElement>(null)

    const viewPortIsDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    const getIntervalName = (start: Date, end: Date, yesterday: Date, today: Date, lastThirtyDays: Date) => {
      const _startDate = start.setHours(0, 0, 0 ,0)
      const _endDate = end.setHours(0, 0, 0 ,0)
      const _yesterdayDate = yesterday.setHours(0, 0, 0 ,0)
      const _oneWeekAgo = subDays(today, 7).setHours(0, 0, 0, 0)
      const _lastThirtyDays = addDays(lastThirtyDays, 1).setHours(0, 0, 0 ,0)
      if(hasChangedDate) {
        if(_startDate === _endDate && _startDate === _yesterdayDate) {
          setHasChangedDate(false)
          return YESTERDAY.id
        }
        if(_startDate === _oneWeekAgo && _endDate === _yesterdayDate) {
          setHasChangedDate(false)
          return PREVIOUS_SEVEN_DAYS.id
        }
        if(_startDate === _lastThirtyDays && _endDate === _yesterdayDate) {
          setHasChangedDate(false)
          return PREVIOUS_THIRTY_DAYS.id
        }
      }
      return CUSTOM_PERIOD.id
    }

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
      if(periods === defaultPeriods) 
        if(hasChangedDate) 
          changePeriod(getIntervalName(startDate, endDate, yesterdayDate, todayDate, lastThirtyDays))
        
      onDatesChange(startDate, endDate)
    }, [startDate, endDate, hasChangedDate])

    const changePeriod = (id: string, value?: number) => {
      setSelectedPeriod(id)
  
      if(!value) {
        setCustomPeriodIsOpen(true)
  
        return
      }
  
      const date = subDays(todayDate, value)
  
      setStartDate(date)
      setEndDate(maxDate)
      setHasChangedDate(false)
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
      setHasChangedDate(true)
      return
    }
    // trunca data inicial e final como a data selecionada quando data inicial selecionada é posterior a final
    if(isBefore(endDate, date)) {
      setStartDate(date)
      setEndDate(date)
      setHasChangedDate(true)
      return
    }
    setStartDate(date)
    setHasChangedDate(true)
  }

  const changeEndDate = (value: string) => {
    const date = parse(value, 'dd/MM/yyyy', todayDate)

    if(!isValid(date)) return

    if(!isWithinInterval(date, { start: minDate, end: maxDate })) return

    if(!isBefore(startDate, date) && !isEqual(startDate, date)) return

    setEndDate(date)
  }

  const changeEndDateOnCalendar = (date: Date) => {
    setHasChangedDate(true)
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

  const CustomHeader = (date: Date, monthDate: Date, calendar: 'start' | 'end', decreaseMonth: MouseEventHandler<HTMLDivElement>, increaseMonth: MouseEventHandler<HTMLDivElement>): JSX.Element => (
      <div className='flex justify-between'>
        <div className='cursor-pointer' onClick={decreaseMonth}>
          <Icon icon='angleLeft' size={4}/>
        </div>
        <div className='flex justify-center items-center gap-x-2'>
          <span className='font-bold text-inverted-2'>
            {months[monthDate.getMonth()]} {date.getFullYear()}
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
          {periods.length && periods.map(period => (
            <button
              key={period.id}
              className={`flex items-center gap-x-1 py-2 px-2 text-f6 rounded-md font-semibold hover:text-primary-dark hover:bg-primary-light ${ selectedPeriod === period.id ? 'bg-primary-light text-primary-dark' : 'text-inverted-1' }`}
              onClick={() => changePeriod(period.id, period.value)}
            >
              {period.icon && (
                <Icon icon={period.icon as any} />
              )}
              <span>
                {(period.id == CUSTOM_PERIOD.id && hasChangedDate) ? (`${formatDate(startDate, endDate)}`) : period.label}
              </span>
            </button>
          ))}
        </div>
        {customPeriodIsOpen && (
          <>
          {viewPortIsDesktop ? (
            <div ref={customPeriodRef} className="absolute top-full left-0 flex flex-col gap-y-6 px-5 py-6 border border-card-stroke rounded shadow bg-base-1 z-10">
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
                    monthDate,
                    date,
                    decreaseMonth,
                    increaseMonth,
                  }) => (CustomHeader(date, monthDate, 'start', decreaseMonth, increaseMonth))}
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
                  onChange={(date: Date) => changeEndDateOnCalendar(date)}
                  locale="pt-BR"
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  maxDate={maxDate}
                  renderMonthContent={(month) => getMonthName(month)}
                  renderCustomHeader={({
                    monthDate,
                    date,
                    decreaseMonth,
                    increaseMonth,
                  }) => (CustomHeader(date, monthDate, 'end', decreaseMonth, increaseMonth))}
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

export type PeriodsType = {
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