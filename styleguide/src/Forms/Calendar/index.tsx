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
  isEqual,
} from 'date-fns'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import { InputMask } from '../InputMask'
import { Icon } from '../../Icons'
import './variables-custom.scss'
import { formatDate, getDayClassName, getMonthName } from './helper'
import {
  CUSTOM_PERIOD,
  POSITION_TRANSITION_DURATION,
  PREVIOUS_SEVEN_DAYS,
  PREVIOUS_THIRTY_DAYS,
  WIDTH_TRANSITION_DURATION,
  YESTERDAY,
  defaultPeriods,
  months,
} from './constants'
import { icons } from '../../Icons/icons-path'

registerLocale('pt-BR', ptBR)

export const Calendar: React.FC<CalendarProps> = React.memo(
  ({
    className = '',
    periods = defaultPeriods,
    prevMonths = 3,
    position = 'left',
    onDatesChange,
  }) => {
    const todayDate = new Date(),
      yesterdayDate = React.useMemo(() => subDays(todayDate, 1), [todayDate]),
      lastThirtyDays = React.useMemo(
        () => subDays(yesterdayDate, 30),
        [yesterdayDate]
      ),
      minDate = React.useMemo(
        () => subMonths(todayDate, prevMonths),
        [todayDate, prevMonths]
      ),
      maxDate = React.useMemo(() => yesterdayDate, [yesterdayDate])

    const [selectedPeriod, setSelectedPeriod] = useState<string>(YESTERDAY.id)
    const [customPeriodIsOpen, setCustomPeriodIsOpen] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<Date>(yesterdayDate)
    const [endDate, setEndDate] = useState<Date>(yesterdayDate)
    const [startMonthsIsOpen, setStartOpenMonths] = useState<boolean>(false)
    const [endMonthsIsOpen, setEndOpenMonths] = useState<boolean>(false)
    const [hasChangedDate, setHasChangedDate] = useState<boolean>(false)
    const [buttonOffset, setButtonOffset] = useState<number>(0)
    const [buttonHeight, setButtonHeight] = useState<number>(0)
    const [buttonWidth, setButtonWidth] = useState<number>(0)
    const [customPeriodWidth, setCustomPeriodWidth] = useState<number>(0)
    const [transitionDuration, setTransitionDuration] = useState<number>(
      POSITION_TRANSITION_DURATION
    )

    const customPeriodRef = useRef<HTMLDivElement>(null)
    const buttonsRef = useRef<(HTMLDivElement | null)[]>([])

    const viewPortIsDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    useEffect(() => {
      const elem = document.getElementById(periods[0].id)
      if (elem === undefined) return
      setButtonOffset(elem?.offsetLeft || 0)
      setButtonHeight(elem?.offsetHeight || 0)
      setButtonWidth(elem?.offsetWidth || 0)
    }, [periods])

    useEffect(() => {
      setCustomPeriodWidth(
        document.getElementById(CUSTOM_PERIOD.id)?.offsetWidth || 0
      )
    }, [startDate, endDate])

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!viewPortIsDesktop) return

        if (!customPeriodRef.current?.contains(event.target as Node)) {
          setCustomPeriodIsOpen(false)
          setTransitionDuration(POSITION_TRANSITION_DURATION)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [viewPortIsDesktop])

    useEffect(() => {
      const index = periods.findIndex((item) => item.id === selectedPeriod)
      setButtonOffset(buttonsRef.current[index]?.offsetLeft || 0)
      setButtonWidth(buttonsRef.current[index]?.offsetWidth || 0)
    }, [selectedPeriod, periods])

    const getIntervalName = React.useCallback(
      (
        start: Date,
        end: Date,
        yesterday: Date,
        today: Date,
        lastThirtyDays: Date
      ) => {
        const _startDate = start.setHours(0, 0, 0, 0)
        const _endDate = end.setHours(0, 0, 0, 0)
        const _yesterdayDate = yesterday.setHours(0, 0, 0, 0)
        const _oneWeekAgo = subDays(today, 7).setHours(0, 0, 0, 0)
        const _lastThirtyDays = addDays(lastThirtyDays, 1).setHours(0, 0, 0, 0)
        if (hasChangedDate) {
          if (_startDate === _endDate && _startDate === _yesterdayDate) {
            setTransitionDuration(POSITION_TRANSITION_DURATION)
            setHasChangedDate(false)
            return YESTERDAY.id
          }
          if (_startDate === _oneWeekAgo && _endDate === _yesterdayDate) {
            setTransitionDuration(POSITION_TRANSITION_DURATION)
            setHasChangedDate(false)
            return PREVIOUS_SEVEN_DAYS.id
          }
          if (_startDate === _lastThirtyDays && _endDate === _yesterdayDate) {
            setTransitionDuration(POSITION_TRANSITION_DURATION)
            setHasChangedDate(false)
            return PREVIOUS_THIRTY_DAYS.id
          }
        }
        setTransitionDuration(WIDTH_TRANSITION_DURATION)
        return CUSTOM_PERIOD.id
      },
      [hasChangedDate]
    )

    const changePeriod = React.useCallback(
      (id: string, value?: number) => {
        setSelectedPeriod(id)

        if (!value) {
          setCustomPeriodIsOpen(true)

          return
        }

        const date = subDays(todayDate, value)

        setStartDate(date)
        setEndDate(maxDate)
        setHasChangedDate(false)
      },
      [todayDate, maxDate]
    )

    useEffect(() => {
      if (periods === defaultPeriods)
        if (hasChangedDate)
          setSelectedPeriod(
            getIntervalName(
              startDate,
              endDate,
              yesterdayDate,
              todayDate,
              lastThirtyDays
            )
          )

      onDatesChange(startDate, endDate)
    }, [
      startDate,
      endDate,
      hasChangedDate,
      changePeriod,
      getIntervalName,
      lastThirtyDays,
      onDatesChange,
      periods,
      todayDate,
      yesterdayDate,
    ])

    const changeStartDate = React.useCallback(
      (value: string) => {
        const date = parse(value, 'dd/MM/yyyy', todayDate)

        // trunca a data inicial como minDate quando a data selecionada é anterior a ela
        if (isBefore(date, minDate)) {
          setStartDate(minDate)
          return
        }

        if (!isValid(date)) return

        if (!isWithinInterval(date, { start: minDate, end: maxDate })) return

        if (!isBefore(date, endDate) && !isEqual(date, endDate)) return

        setStartDate(date)
      },
      [todayDate, minDate, maxDate, endDate]
    )

    const changeStartDateOnCalendar = React.useCallback(
      (date: Date) => {
        setStartOpenMonths(false)
        // trunca a data inicial como minDate quando a data selecionada é anterior a ela
        if (isBefore(date, minDate)) {
          setStartDate(minDate)
          setHasChangedDate(true)
          return
        }
        // trunca data inicial e final como a data selecionada quando data inicial selecionada é posterior a final
        if (isBefore(endDate, date)) {
          setStartDate(date)
          setEndDate(date)
          setHasChangedDate(true)
          return
        }
        setStartDate(date)
        setHasChangedDate(true)
      },
      [minDate, endDate]
    )

    const changeEndDate = React.useCallback(
      (value: string) => {
        const date = parse(value, 'dd/MM/yyyy', todayDate)

        if (!isValid(date)) return

        if (!isWithinInterval(date, { start: minDate, end: maxDate })) return

        if (!isBefore(startDate, date) && !isEqual(startDate, date)) return

        setEndDate(date)
      },
      [todayDate, minDate, maxDate, startDate]
    )

    const changeEndDateOnCalendar = React.useCallback((date: Date) => {
      setEndOpenMonths(false)
      setHasChangedDate(true)
      setEndDate(date)
    }, [])

    const changeDateRange = React.useCallback((dates: Array<Date | null>) => {
      const [start, end] = dates

      if (start) setStartDate(start)
      if (end) setEndDate(end)

      setCustomPeriodIsOpen(false)
    }, [])

    const dayIsEnabled = React.useCallback(
      (day: Date, period: 'start' | 'end') => {
        if (period === 'start') {
          if (!isValid(day)) return false

          if (!isWithinInterval(day, { start: minDate, end: maxDate }))
            return false

          if (!isBefore(day, endDate) && !isEqual(day, endDate)) return false
        } else {
          if (!isValid(day)) return false

          if (!isWithinInterval(day, { start: minDate, end: maxDate }))
            return false

          if (!isBefore(startDate, day) && !isEqual(startDate, day))
            return false
        }
        return true
      },
      [minDate, maxDate, startDate, endDate]
    )

    const handleButtonClick = (index: number, period: PeriodsType) => {
      setButtonOffset(buttonsRef.current[index]?.offsetLeft || 0)
      setButtonHeight(buttonsRef.current[index]?.offsetHeight || 0)
      setButtonWidth(buttonsRef.current[index]?.offsetWidth || 0)
      changePeriod(period.id, period.value)
    }

    const CustomHeader = (
      date: Date,
      monthDate: Date,
      calendar: 'start' | 'end',
      decreaseMonth: MouseEventHandler<HTMLDivElement>,
      increaseMonth: MouseEventHandler<HTMLDivElement>
    ): JSX.Element => (
      <div className="flex justify-between">
        <div className="cursor-pointer" onClick={decreaseMonth}>
          <Icon icon="angleLeft" size={4} />
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <span className="font-bold text-inverted-2">
            {months[monthDate.getMonth()]} {date.getFullYear()}
          </span>
          <div
            className="cursor-pointer"
            onClick={() =>
              calendar === 'start'
                ? setStartOpenMonths(!startMonthsIsOpen)
                : setEndOpenMonths(!endMonthsIsOpen)
            }
          >
            <Icon
              icon="angleDown"
              size={4}
              className={`transition duration-300 ${
                (calendar === 'start' ? startMonthsIsOpen : endMonthsIsOpen) &&
                'rotate-180'
              }
              `}
            />
          </div>
        </div>
        <div className="cursor-pointer" onClick={increaseMonth}>
          <Icon icon="angleRight" size={4} />
        </div>
      </div>
    )

    return (
      <div className={`relative ${className}`}>
        <div className="relative flex flex-wrap gap-2">
          {periods.length &&
            periods.map((period, index) => {
              return (
                <div
                  key={period.id}
                  id={period.id}
                  ref={(el) => (buttonsRef.current[index] = el)}
                >
                  <button
                    className={`flex items-center gap-x-1 py-2 px-2 text-f6 rounded-md font-semibold hover:text-primary-dark ${
                      selectedPeriod === period.id
                        ? 'text-primary-dark'
                        : 'text-inverted-1'
                    } transition-colors duration-200`}
                    onClick={() => handleButtonClick(index, period)}
                  >
                    {period.icon && <Icon icon={period.icon as any} />}
                    <span>
                      {period.id === CUSTOM_PERIOD.id && hasChangedDate
                        ? formatDate(startDate, endDate)
                        : period.label}
                    </span>
                  </button>
                </div>
              )
            })}
          <div
            className="absolute rounded-l rounded-r bg-primary-light transition-all ease-out -z-1"
            style={{
              left: `${buttonOffset}px`,
              height: `${buttonHeight}px`,
              width: `${
                selectedPeriod === CUSTOM_PERIOD.id
                  ? customPeriodWidth
                  : buttonWidth
              }px`,
              transitionDuration: `${transitionDuration}ms`,
            }}
          />
        </div>
        {customPeriodIsOpen && (
          <>
            {viewPortIsDesktop ? (
              <div
                ref={customPeriodRef}
                className={`absolute top-full ${position}-0 flex flex-col gap-y-6 px-5 py-6 border border-card-stroke rounded shadow bg-base-1 z-10`}
              >
                <div className="flex gap-x-6">
                  <InputMask
                    className="w-full"
                    formatValue="date"
                    prefix={<Icon icon="calendarAlt" />}
                    prefixBorder={false}
                    value={format(startDate, 'dd/MM/yyyy')}
                    onChange={(event) => changeStartDate(event.target.value)}
                  />
                  <InputMask
                    className="w-full"
                    formatValue="date"
                    prefix={<Icon icon="calendarAlt" />}
                    prefixBorder={false}
                    value={format(endDate, 'dd/MM/yyyy')}
                    onChange={(event) => changeEndDate(event.target.value)}
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
                    }) =>
                      CustomHeader(
                        date,
                        monthDate,
                        'start',
                        decreaseMonth,
                        increaseMonth
                      )
                    }
                    showMonthYearPicker={startMonthsIsOpen}
                    showFourColumnMonthYearPicker
                    inline
                    dayClassName={(day) => {
                      return getDayClassName(
                        day,
                        dayIsEnabled(day, 'start'),
                        startDate,
                        endDate,
                        'start'
                      )
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
                    }) =>
                      CustomHeader(
                        date,
                        monthDate,
                        'end',
                        decreaseMonth,
                        increaseMonth
                      )
                    }
                    showMonthYearPicker={endMonthsIsOpen}
                    showFourColumnMonthYearPicker
                    inline
                    dayClassName={(day) => {
                      return getDayClassName(
                        day,
                        dayIsEnabled(day, 'end'),
                        startDate,
                        endDate,
                        'end'
                      )
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
                onChange={(dates) => changeDateRange(dates)}
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
  id: string
  label: string
  value?: number
  icon?: keyof typeof icons
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
  prevMonths?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
  /**
   * Side where calendar will open
   * */
  position?: 'left' | 'right'
  /**
   * Function triggered on each date change
   * */
  onDatesChange: (startDate: Date, endDate: Date) => void
}
