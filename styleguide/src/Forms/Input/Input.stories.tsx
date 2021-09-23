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

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: 'Can\'t change',
  disabled: true,
}

export const Readonly = Template.bind({})
Readonly.args = {
  defaultValue: 'Can\'t change',
  readOnly: true,
}

export const Prefix = Template.bind({})
Prefix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
}

export const IconPrefix = Template.bind({})
IconPrefix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: <Icon icon="cog" />,
  hasError: true,
}

export const Sufix = Template.bind({})
Sufix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: 'R$',
}

export const IconSufix = Template.bind({})
IconSufix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: <Icon icon="cog" />,
  hasError: true,
}

export const PrefixDisabled = Template.bind({})
PrefixDisabled.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  disabled: true,
  value: '123',
}

export const PrefixReadOnly = Template.bind({})
PrefixReadOnly.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  readOnly: true,
  value: '123',
}

export const WithBoth = Template.bind({})
WithBoth.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  sufix: <Icon icon="cog" />,
}
