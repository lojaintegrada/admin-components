import { months } from './constants'

export const getDayClassName = (
  day: Date,
  dayIsEnabled: boolean,
  startDate: Date,
  endDate: Date,
  period: 'start' | 'end'
): string => {
  const _day = day.setHours(0, 0, 0, 0)
  const _startDate = startDate.setHours(0, 0, 0, 0)
  const _endDate = endDate.setHours(0, 0, 0, 0)
  let classname = ''
  if (period === 'start') {
    if (_day === _startDate)
      classname =
        '!bg-primary !rounded-l !rounded-r !text-base-1 !font-bold before:left-5'
  }
  if (period === 'end') {
    if (_day === _endDate)
      classname =
        '!bg-primary !rounded-l !rounded-r !text-base-1 !font-bold before:right-5'
  }
  if (dayIsEnabled) {
    classname = 'hover:!text-base-1 hover:font-bold'
    if (_day < _startDate || _day > _endDate)
      classname =
        '!bg-base-1 hover:!rounded-l hover:!rounded-r hover:!bg-primary hover:!text-base-1 hover:!font-bold'
  }
  return classname
}

export const getMonthName = (month: number) => {
  return months[month].slice(0, 3).toUpperCase()
}

export const formatDate = (startDate: Date, endDate: Date) => {
  const _startDate = startDate.getDate()
  const _endDate = endDate.getDate()
  const startMonth = months[startDate.getMonth()]
  const endMonth = months[endDate.getMonth()]
  if (_startDate === _endDate) return `${_startDate} de ${startMonth} `
  return `${_startDate} de ${startMonth} - ${_endDate} de ${endMonth}`
}
