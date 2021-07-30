import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InputMask, InputMaskProps } from '.'

export default {
  title: 'Forms/InputMask',
  component: InputMask,
  args: {
    label: 'Masked Input',
  },
} as Meta

const Template: Story<InputMaskProps> = args => <InputMask {...args} />

export const Default = Template.bind({})
Default.args = {
  mask: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
  ]
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
