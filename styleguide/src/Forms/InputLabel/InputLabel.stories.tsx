import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InputLabel, InputLabelProps } from '.'

export default {
  title: 'Forms/InputLabel',
  component: InputLabel,
} as Meta

const Template: Story<InputLabelProps> = args => <InputLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Label'
}
