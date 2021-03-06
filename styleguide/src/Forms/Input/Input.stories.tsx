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
  placeholder: 'Digite aqui',
  name: 'nome',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  errorMessage: 'Campo obrigatório',
  name: 'nome',
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: "Can't change",
  disabled: true,
}

export const Readonly = Template.bind({})
Readonly.args = {
  defaultValue: "Can't change",
  readOnly: true,
}

export const Prefix = Template.bind({})
Prefix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  name: 'valor',
}

export const PrefixWithoutBorder = Template.bind({})
PrefixWithoutBorder.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  prefixBorder: false,
  name: 'valor',
}

export const IconPrefix = Template.bind({})
IconPrefix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: <Icon icon="cog" />,
  hasError: true,
  name: 'nome',
}

export const IconPrefixWhitoutBorder = Template.bind({})
IconPrefixWhitoutBorder.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: <Icon icon="search" />,
  prefixBorder: false,
  hasError: true,
  name: 'nome',
}

export const Sufix = Template.bind({})
Sufix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: 'R$',
  name: 'valor',
}
export const SufixWithoutBorder = Template.bind({})
SufixWithoutBorder.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: 'R$',
  sufixBorder: false,
  name: 'valor',
}
export const IconSufix = Template.bind({})
IconSufix.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: <Icon icon="cog" />,
  hasError: true,
  name: 'nome',
}
export const IconSufixWithoutBorder = Template.bind({})
IconSufixWithoutBorder.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  sufix: <Icon icon="cog" />,
  sufixBorder: false,
  hasError: true,
  name: 'nome',
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
  name: 'valor',
}

export const WithBothWithoutBorder = Template.bind({})
WithBothWithoutBorder.args = {
  label: 'Meu Campo',
  helpText: 'Texto de ajuda para preencher o campo',
  prefix: 'R$',
  sufix: <Icon icon="search" />,
  prefixBorder: false,
  sufixBorder: false,
  name: 'valor',
}

export const WithLabelComplement = Template.bind({})
WithLabelComplement.args = {
  label: 'Label',
  labelComplement: <Icon icon="infoCircle" size={4} block />,
  required: true,
  name: 'nome',
}

export const Search = Template.bind({})
Search.args = {
  type: "search",
  sufix: (
    <button
      type="submit"
      className="w-full h-full flex items-center justify-center text-tertiary hover:text-primary"
    >
      <Icon icon="search" block />
    </button>
  ),
  sufixBorder: false,
  name: 'search',
}
