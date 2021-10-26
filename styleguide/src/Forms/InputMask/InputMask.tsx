import React from 'react'
import ReactTextMask, {
  MaskedInputProps as ReactMaskedInputProps,
} from 'react-text-mask'

import { composeRefs } from '../../utils'
import { Input, InputProps } from '../Input'
import { formatValuePatterns } from './utils'

function InputMaskComponent(
  { formatValue = 'default', prefix, ...props }: InputMaskProps,
  inputRef: React.ForwardedRef<HTMLInputElement>
) {
  const renderInput = (ref: (inputElement: HTMLElement) => void, p: any) => {
    return <Input ref={composeRefs(inputRef, ref)} {...p} />
  }
  const formatValueProps = formatValuePatterns[formatValue] || {}

  const mergedProps = {
    ...props,
    ...formatValueProps,
  }
  if (!mergedProps.mask) {
    mergedProps.mask = false
  }

  return (
    <ReactTextMask
      render={renderInput}
      {...mergedProps}
      prefix={prefix as string}
    />
  )
}

export const InputMask = React.forwardRef(InputMaskComponent)

export interface InputMaskProps extends InputProps {
  /**
   * Predefined masks. When used, will replace passed `mask` attr
   * */
  formatValue?: keyof typeof formatValuePatterns
  mask?: ReactMaskedInputProps['mask']
  guide?: ReactMaskedInputProps['guide']
  placeholderChar?: ReactMaskedInputProps['placeholderChar']
  keepCharPositions?: ReactMaskedInputProps['keepCharPositions']
  pipe?: ReactMaskedInputProps['pipe']
  showMask?: ReactMaskedInputProps['showMask']
}

export type InputMaskType = ReactMaskedInputProps['mask']
