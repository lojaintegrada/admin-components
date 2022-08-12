import React from 'react'
import ReactTextMask, {
  MaskedInputProps as ReactMaskedInputProps,
} from 'react-text-mask'

import { composeRefs } from '../../utils'
import {
  FloatingLabelInput,
  FloatingLabelInputProps,
} from '../FloatingLabelInput/FloatingLabelInput'
import { formatValuePatterns } from '../InputMask/utils'

function FloatingLabelInputMaskComponent(
  { formatValue = 'default', prefix, ...props }: FloatingLabelInputMaskProps,
  inputRef: React.ForwardedRef<HTMLInputElement>
) {
  const renderInput = (ref: (inputElement: HTMLElement) => void, p: any) => {
    return <FloatingLabelInput ref={composeRefs(inputRef, ref)} {...p} />
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

export const FloatingLabelInputMask = React.forwardRef(
  FloatingLabelInputMaskComponent
)

export interface FloatingLabelInputMaskProps extends FloatingLabelInputProps {
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

export type FloatingLabelInputMaskType = ReactMaskedInputProps['mask']
