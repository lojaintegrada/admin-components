import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon } from '../../Icons'

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

export const WithComplement = Template.bind({})
WithComplement.args = {
  label: 'Label',
  labelComplement: <Icon icon="infoCircle" size={4} block />,
  required: true,
}
