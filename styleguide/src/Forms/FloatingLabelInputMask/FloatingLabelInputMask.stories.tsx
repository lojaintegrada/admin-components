import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Icon } from '../../Icons'
import {
  FloatingLabelInputMask,
  FloatingLabelInputMaskProps,
} from './FloatingLabelInputMask'

export default {
  title: 'Forms/FloatingLabelInputMask',
  component: FloatingLabelInputMask,
} as Meta

const Template: Story<FloatingLabelInputMaskProps> = (args) => (
  <FloatingLabelInputMask {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Meu Campo',
  name: 'nome',
  id: 'campo',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Campo',
  name: 'nome',
  id: 'campo',
}

export const Prefix = Template.bind({})
Prefix.args = {
  label: 'Meu Campo',
  prefix: 'R$',
  name: 'valor',
  id: 'campo',
}

export const IconPrefix = Template.bind({})
IconPrefix.args = {
  label: 'Meu Campo',
  prefix: <Icon icon="cog" />,
  name: 'nome',
  id: 'campo',
}

export const Sufix = Template.bind({})
Sufix.args = {
  label: 'Meu Campo',
  sufix: 'R$',
  name: 'valor',
  id: 'campo',
}

export const IconSufix = Template.bind({})
IconSufix.args = {
  label: 'Meu Campo',
  sufix: <Icon icon="cog" />,
  name: 'nome',
  id: 'campo',
}

export const WithBoth = Template.bind({})
WithBoth.args = {
  label: 'Meu Campo',
  prefix: 'R$',
  sufix: <Icon icon="cog" />,
  name: 'valor',
  id: 'campo',
}

export const OnlyNumbers = Template.bind({})
OnlyNumbers.args = {
  formatValue: 'onlyNumber',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  formatValue: 'onlyText',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const ZipCode = Template.bind({})
ZipCode.args = {
  formatValue: 'zipCode',
  defaultValue: '21310310',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const Nfe = Template.bind({})
Nfe.args = {
  formatValue: 'nfe',
  defaultValue: '32191105570714000825550010059146621133082968',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const Phone = Template.bind({})
Phone.args = {
  formatValue: 'phone',
  defaultValue: '2139774179',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const Cellphone = Template.bind({})
Cellphone.args = {
  formatValue: 'cellphone',
  defaultValue: '21970100616',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const PhoneOrCellphone = Template.bind({})
PhoneOrCellphone.args = {
  formatValue: 'phoneOrCellphone',
  defaultValue: '21970100616',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const CPF = Template.bind({})
CPF.args = {
  formatValue: 'cpf',
  defaultValue: '52517738033',
  onChange: (a) => {
    console.log(a.target.value)
  },
}

export const CNPJ = Template.bind({})
CNPJ.args = {
  formatValue: 'cnpj',
  defaultValue: '03167626000185',
  onChange: (a) => {
    console.log(a.target.value)
  },
}
