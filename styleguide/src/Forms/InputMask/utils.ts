import maskDate from './maskDate'
/* docs: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md */

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
      const onlyText = rawValue.replace(/[^a-zA-ZÀ-ú'˜0-9\sü]/g, '').split('')
      return onlyText.map(() => /[a-zA-ZÀ-ú'˜`´^0-9\sü]/g)
    },
  },
  date: {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: maskDate('dd/mm/yyyy'),
    keepCharPositions: true,
    inputMode: 'numeric',
    placeholder: '__/__/____',
  },
  zipCode: {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    keepCharPositions: true,
    inputMode: 'numeric',
    placeholder: '_____-___',
  },
  nfe: {
    mask: () => {
      const maxLength = 44
      const mask = []
      for (let i = 1; i <= maxLength; i++) {
        mask.push(/\d/)
        if (i % 4 === 0 && i !== maxLength) mask.push(' ')
      }
      return mask
    },
    keepCharPositions: true,
    inputMode: 'numeric',
    placeholder: '____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____',
  },
}
