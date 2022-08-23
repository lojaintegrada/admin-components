import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { composeRefs } from '../../utils'
import { FloatingLabelInput } from '../FloatingLabelInput/FloatingLabelInput'
import {
  defaultIntlConfig,
  defaultMaxValue,
  formatCurrency,
} from '../InputCurrency/utils'

const FloatingLabelInputCurrencyComponent = (
  {
    value,
    defaultValue,
    config = defaultIntlConfig,
    currency = 'BRL',
    max = defaultMaxValue,
    autoFocus = false,
    autoSelect = false,
    autoReset = false,
    onChange = () => null,
    onBlur = () => null,
    onFocus = () => null,
    onKeyPress = () => null,
    prefix,
    sufix,
    id,
    type = 'text',
    placeholder = ' ',
    label,
    showLabel = true,
    ...props
  }: FloatingLabelInputCurrencyProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  config = config[currency]

  max = Number(max)

  const inputRef = useCallback(
    (node) => {
      const isActive = node === document.activeElement
      if (node && autoFocus && !isActive) {
        node.focus()
      }
    },
    [autoFocus]
  )

  const [maskedValue, setMaskedValue] = useState<string | number>('0')

  // to prevent a malformed config object
  const safeConfig = useMemo(
    () => () => {
      const {
        format: { maximumFractionDigits },
      } = config
      const finalConfig = {
        ...defaultIntlConfig[currency],
        ...config,
      }
      // at the moment this prevents problems when converting numbers
      // with zeroes in-between, otherwise 205 would convert to 25.
      finalConfig.format.minimumFractionDigits = maximumFractionDigits
      return finalConfig
    },
    [currency, config]
  )

  const clean = (number: any) => {
    if (typeof number === 'number') {
      return number
    }

    // strips everything that is not a number (positive or negative)
    return Number(number.toString().replace(/[^0-9-]/g, ''))
  }

  const normalizeValue = (number: any) => {
    const {
      format: { maximumFractionDigits },
    } = safeConfig()
    let safeNumber = number

    if (typeof number === 'string') {
      safeNumber = clean(number)

      if (safeNumber % 1 !== 0) {
        safeNumber = safeNumber.toFixed(maximumFractionDigits)
      }
    } else {
      // all input numbers must be a float point (for the cents portion). This is a fallback in case of integer ones.
      safeNumber = Number.isInteger(number)
        ? Number(number) * 10 ** maximumFractionDigits
        : number.toFixed(maximumFractionDigits)
    }

    // divide it by 10 power the maximum fraction digits.
    return clean(safeNumber) / 10 ** maximumFractionDigits
  }

  const calculateValues = (inputFieldValue: any) => {
    const value = normalizeValue(inputFieldValue)
    const maskedValue = formatCurrency(value, safeConfig())

    return [value, maskedValue]
  }

  const updateValues = (value: any) => {
    const [calculatedValue, calculatedMaskedValue] = calculateValues(value)

    if ((!max && max !== 0) || calculatedValue <= max) {
      setMaskedValue(calculatedMaskedValue)
      return [calculatedValue, calculatedMaskedValue]
    } else {
      const [maxCalculatedValue, maxCalculatedMaskedValue] =
        calculateValues(max)
      setMaskedValue(maxCalculatedMaskedValue)
      return [maxCalculatedValue, maxCalculatedMaskedValue]
    }
  }

  const handleChange = (event: any) => {
    event.preventDefault()

    const [value, maskedValue] = updateValues(event.target.value)

    if (maskedValue) {
      onChange(event, value, maskedValue)
    }
  }

  const handleBlur = (event: any) => {
    const [value, maskedValue] = updateValues(event.target.value)
    if (autoReset) {
      calculateValues(0)
    }
    if (maskedValue) {
      onBlur(event, value, maskedValue)
    }
  }

  const handleFocus = (event: any) => {
    if (autoSelect) {
      event.target.select()
    }
    const [value, maskedValue] = updateValues(event.target.value)
    if (maskedValue) {
      onFocus(event, value, maskedValue)
    }
  }

  const handleKeyUp = (event: any) =>
    onKeyPress(event, event.key, event.keyCode)

  useEffect(() => {
    const currentValue = value || defaultValue || 0
    const [, maskedValue] = calculateValues(currentValue)
    setMaskedValue(maskedValue)
    // eslint-disable-next-line
  }, [currency, value, defaultValue, config])

  return (
    <FloatingLabelInput
      type={type}
      id={id}
      placeholder={placeholder}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      onFocus={handleFocus}
      {...props}
      ref={composeRefs(inputRef, ref)}
      value={value ? maskedValue : undefined}
      inputMode="decimal"
      label={label}
      showLabel={showLabel}
      prefix={prefix}
      sufix={sufix}
    />
  )
}

const InputWithFowardRef = React.forwardRef(FloatingLabelInputCurrencyComponent)
export const FloatingLabelInputCurrency = React.memo(InputWithFowardRef)

export interface FloatingLabelInputCurrencyProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'sufix' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyPress'
  > {
  prefix?: React.ReactNode
  sufix?: React.ReactNode
  label?: string
  showLabel?: boolean
  /** Currency to format value to
   * @default 'BRL'
   * */
  currency?: keyof typeof defaultIntlConfig
  /** Max value allowed
   * @default 1000000000000000
   * */
  max?: number | string
  /** Custom Intl config
   * @deprecated Don't use, component already has its default config
   * */
  config?: any
  /** Should auto focus
   * @default false
   * */
  autoFocus?: boolean
  /** Should auto select
   * @default false
   * */
  autoSelect?: boolean
  /** Should auto reset
   * @default false
   * */
  autoReset?: boolean
  /**
   * onChange with additional params: (event, value, maskedValue)
   * */
  onChange?: (
    arg0: InputEvent,
    arg1: string | number,
    arg2: string | number
  ) => void
  /**
   * onBlur with additional params: (event, value, maskedValue)
   * */
  onBlur?: (
    arg0: InputEvent,
    arg1: string | number,
    arg2: string | number
  ) => void
  /**
   * onFocus with additional params: (event, value, maskedValue)
   * */
  onFocus?: (
    arg0: InputEvent,
    arg1: string | number,
    arg2: string | number
  ) => void
  /**
   * onKeyPress with additional params: (event, key, keyCode)
   * */
  onKeyPress?: (
    arg0: InputEvent,
    arg1: string | number,
    arg2: string | number
  ) => void
}
