import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Meu checkbox',
}
