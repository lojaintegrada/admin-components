export function formatCurrency(value: string | number, localeConfig: any) {
  const numberConfig = localeConfig.format
  const currencyOptions = new global.Intl.NumberFormat(
    localeConfig.locale,
    numberConfig
  ).resolvedOptions()

  return value.toLocaleString(localeConfig.locale, {
    ...currencyOptions,
    style: 'decimal',
  })
}

// Above this value, Intl can't convert
export const defaultMaxValue = 1000000000000000

export const defaultIntlConfig = {
  BRL: {
    locale: 'pt-BR',
    format: {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
  USD: {
    locale: 'en-US',
    format: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
}
