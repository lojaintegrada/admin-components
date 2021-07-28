import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InputMask, InputMaskProps } from '.'

export default {
  title: 'Forms/InputMask',
  component: InputMask,
} as Meta

const Template: Story<InputMaskProps> = args => <InputMask {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  defaultValue: '34,7',
  mask: [
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')'
  ]
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  errorMessage: 'Campo obrigatório',
}
