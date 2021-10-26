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
      const onlyLetter = rawValue.replace(/[^A-zÀ-ú]/g, '').split('')
      return onlyLetter.map(() => /[A-zÀ-ú]/)
    },
  },
  onlyAlphanumeric: {
    mask: (rawValue: any) => {
      const onlyAlphanumeric = rawValue.replace(/\W/g, '').split('')
      return onlyAlphanumeric.map(() => /\w/)
    },
  },
  onlyText: {
    mask: (rawValue: any) => {
      const onlyText = rawValue.replace(/[^a-zA-ZÀ-ú'~0-9\s]/g, '').split('')
      return onlyText.map(() => /[a-zA-ZÀ-ú'~´`^0-9\s]/g)
    },
  },
  date: {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: maskDate('dd/mm/yyyy'),
    keepCharPositions: true,
    inputMode: 'numeric',
  },
}
