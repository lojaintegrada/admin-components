import { PeriodsType } from '.'

export const YESTERDAY: PeriodsType = {
  id: 'ontem',
  label: 'Ontem',
  value: 1,
}

export const PREVIOUS_SEVEN_DAYS: PeriodsType = {
  id: '7-dias',
  label: '7 dias',
  value: 7,
}

export const PREVIOUS_THIRTY_DAYS: PeriodsType = {
  id: '30-dias',
  label: '30 dias',
  value: 30,
}

export const CUSTOM_PERIOD: PeriodsType = {
  id: 'selecionar-periodo',
  label: 'Selecionar período',
  icon: 'calendarAlt',
}

export const defaultPeriods: PeriodsType[] = [
  YESTERDAY,
  PREVIOUS_SEVEN_DAYS,
  PREVIOUS_THIRTY_DAYS,
  CUSTOM_PERIOD,
]

export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export const WIDTH_TRANSITION_DURATION = 100
export const POSITION_TRANSITION_DURATION = 200
