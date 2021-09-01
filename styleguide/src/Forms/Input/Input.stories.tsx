import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Icon } from '../../Icons'
import { Input, InputProps } from '.'

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

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

export const StartAdornment = Template.bind({})
StartAdornment.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  startAdornment: 'R$',
}

export const IconStartAdornment = Template.bind({})
IconStartAdornment.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  startAdornment: <Icon icon="cog" />,
  hasError: true,
}

export const EndAdornment = Template.bind({})
EndAdornment.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  endAdornment: 'R$',
}

export const IconEndAdornment = Template.bind({})
IconEndAdornment.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  endAdornment: <Icon icon="cog" />,
  hasError: true,
}
