export const getDayClassName = (day: Date, startDate: Date, endDate: Date, period: 'start' | 'end'): string => {
  const _day = day.setHours(0,0,0,0)
  const _startDate = startDate.setHours(0,0,0,0)
  const _endDate = endDate.setHours(0,0,0,0)
  var classname = ''
  if(period == 'start') {
    if (_day == _startDate) classname = '!w-10 !h-6 !relative !z-3 !bg-primary !rounded-l !text-base-1 !font-bold'
    if (_startDate == _endDate) classname += ' !rounded-r'
  }
  if(period == 'end') {
    if (_day == _endDate) classname = '!bg-primary !rounded-r !text-base-1 !font-bold'
    if (_startDate == _endDate) classname += ' !rounded-l'
  }
  return classname
}