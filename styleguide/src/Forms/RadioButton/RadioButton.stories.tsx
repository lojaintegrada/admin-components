import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RadioButton, RadioButtonProps } from '.'

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
} as Meta

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  label: 'label',
  name: '',
}
export const Focus = Template.bind({})
Focus.args = {
  disabled: false,
  label: 'label',
  name: '',
  focus: true,
  onFocus: (event) => {
      console.log(event)
  }
}
export const FocusChecked = Template.bind({})
FocusChecked.args = {
  disabled: false,
  label: 'label',
  name: '',
  focus: true,
  checked: true,
  onFocus: (event) => {
    console.log(event)
  }
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'label',
  name: '',
  checked: true,
}
