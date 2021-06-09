import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from '.'

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  errorMessage: 'Campo obrigatório',
}
