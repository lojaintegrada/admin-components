export const getDayClassName = (day: Date, startDate: Date, endDate: Date, period: 'start' | 'end'): string => {
  const _day = day.setHours(0,0,0,0)
  const _startDate = startDate.setHours(0,0,0,0)
  const _endDate = endDate.setHours(0,0,0,0)
  var classname = ''
  if(period == 'start') {
    if (_day == _startDate) classname = '!bg-primary !rounded-l !text-base-1 !font-bold !rounded-r before:left-5'
  }
  if(period == 'end') {
    if (_day == _endDate) classname = '!bg-primary !rounded-r !text-base-1 !font-bold !rounded-l before:right-5'
  }
  return classname
}