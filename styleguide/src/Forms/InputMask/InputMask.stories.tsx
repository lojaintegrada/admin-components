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
}

export const OnlyNumbers = Template.bind({})
OnlyNumbers.args = {
  formatValue: 'onlyNumber',
}

export const DateWithStartAdornment = Template.bind({})
DateWithStartAdornment.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  startAdornment: <Icon icon="clock" />,
}

export const DateWithEndAdornment = Template.bind({})
DateWithEndAdornment.args = {
  formatValue: 'date',
  defaultValue: '10/11/1990',
  endAdornment: <Icon icon="clock" />,
}
