import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from '.'

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Meu Campo'
}
