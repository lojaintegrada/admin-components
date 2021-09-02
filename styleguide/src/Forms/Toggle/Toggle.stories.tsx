import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Toggle, ToggleProps } from '.'

export default {
  title: 'Forms/Toggle',
  component: Toggle,
} as Meta

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Meu toggle',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Meu toggle',
  disabled: true,
}
export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  label: 'Meu toggle',
  disabled: true,
  checked: true,
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
  label: 'Meu toggle',
  checked: true,
}

export const WithOnChange = Template.bind({})
WithOnChange.args = {
  label: 'Meu toggle',
  checked: true,
  onChange: (e) => {
    console.log(e.target.checked)
  },
}
