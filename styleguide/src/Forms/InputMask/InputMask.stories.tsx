import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InputMask, InputMaskProps } from '.'
import { Icon } from '../../Icons'

export default {
  title: 'Forms/InputMask',
  component: InputMask,
  args: {
    label: 'Masked Input',
  },
} as Meta

const Template: Story<InputMaskProps> = (args) => <InputMask {...args} />

export const Default = Template.bind({})
Default.args = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
}

export const Date = Template.bind({})
Date.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  name: 'birthday',
  placeholder: '00/00/0000',
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

export const DateWithStartAdornment = Template.bind({})
DateWithStartAdornment.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  prefix: <Icon icon="clock" />,
}

export const DateWithEndAdornment = Template.bind({})
DateWithEndAdornment.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  sufix: <Icon icon="clock" />,
}

export const DateWithEndAdornmentError = Template.bind({})
DateWithEndAdornmentError.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  sufix: <Icon icon="clock" />,
  hasError: true,
}
