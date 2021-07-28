import React from 'react'
import ReactTextMask, {
  MaskedInputProps as ReactMaskedInputProps,
} from 'react-text-mask'

import { composeRefs } from '../../utils'
import { Input, InputProps } from '../Input'

export type MaskType = ReactMaskedInputProps['mask']

export interface InputMaskProps
  extends Pick<
      ReactMaskedInputProps,
      | 'mask'
      | 'guide'
      | 'placeholderChar'
      | 'keepCharPositions'
      | 'pipe'
      | 'showMask'
    >,
    InputProps {}

function InputMaskComponent(
  props: InputMaskProps,
  inputRef: React.ForwardedRef<HTMLInputElement>
) {
  const { style, ...rest } = props

  const renderInput = (ref: (inputElement: HTMLElement) => void, p: any) => {
    return <Input style={style} ref={composeRefs(inputRef, ref)} {...p} />
  }

  return <ReactTextMask render={renderInput} {...rest} />
}

export const InputMask = React.forwardRef(InputMaskComponent)
