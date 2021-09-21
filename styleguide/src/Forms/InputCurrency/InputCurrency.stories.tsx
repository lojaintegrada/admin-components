import React from 'react'
import { Story, Meta } from '@storybook/react'
import { InputCurrency, InputCurrencyProps } from '.'

export default {
  title: 'Forms/InputCurrency',
  component: InputCurrency,
  args: {
    label: 'Currency Input',
    currency: 'BRL',
  },
} as Meta

const Template: Story<InputCurrencyProps> = (args) => (
  <InputCurrency {...args} />
)

export const Default = Template.bind({})

export const MaxValue = Template.bind({})
MaxValue.args = {
  helpText: 'Valor máximo R$ 2.000,00',
  max: 2000,
}

export const CurrencyUSD = Template.bind({})
CurrencyUSD.args = {
  currency: 'USD',
  defaultValue: 1234.56,
}

export const OnChange = Template.bind({})
OnChange.args = {
  onChange: (_event, value, _maskedValue) => {
    console.log(value)
  },
}

export const OnFocusWithStartAdornment = Template.bind({})
OnFocusWithStartAdornment.args = {
  onFocus: (_event, value, _maskedValue) => {
    console.log(value)
  },
  prefix: 'R$',
}
