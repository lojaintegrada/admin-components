import maskDate from './maskDate'

export const formatValuePatterns = {
  default: {},
  onlyNumber: {
    mask: (rawValue: any) => {
      const onlyNumbers = rawValue.replace(/\D/g, '').split('')
      return onlyNumbers.map(() => /\d/)
    },
    inputMode: 'decimal',
  },
  onlyLetter: {
    mask: (rawValue: any) => {
      const onlyAlphanumeric = rawValue.replace(/[^A-zÀ-ú]/g, '').split('')
      return onlyAlphanumeric.map(() => /[A-zÀ-ú]/)
    },
  },
  onlyAlphanumeric: {
    mask: (rawValue: any) => {
      const onlyAlphanumeric = rawValue.replace(/\W/g, '').split('')
      return onlyAlphanumeric.map(() => /\w/)
    },
  },
  date: {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: maskDate('dd/mm/yyyy'),
    keepCharPositions: true,
    inputMode: 'numeric',
  },
}
