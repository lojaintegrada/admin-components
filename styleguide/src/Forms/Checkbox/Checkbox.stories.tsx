import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta

const labelCheckbox = (
  <>
    <span>Li e aceito os </span>
    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors font-semibold">
      termos de uso.
    </a>
  </>
)

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: labelCheckbox,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  label: "Meu checkbox",
  indeterminate: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Meu checkbox',
  disabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  label: 'Meu checkbox',
  disabled: true,
  checked: true,
}

export const DisabledIndeterminate = Template.bind({})
DisabledIndeterminate.args = {
  label: 'Meu checkbox',
  disabled: true,
  indeterminate: true,
}

export const WithOnChange = Template.bind({})
WithOnChange.args = {
  label: 'Meu checkbox',
  onChange: (e) => {
    console.log(e.target.checked)
  },
}
