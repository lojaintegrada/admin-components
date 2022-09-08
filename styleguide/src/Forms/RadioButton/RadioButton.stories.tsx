import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RadioButton, RadioButtonProps } from '.'

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
} as Meta

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

const TemplateGrouped: Story<RadioButtonProps> = (args) => {
  return (
    <> 
    <RadioButton {...args} id='1' name='form' defaultChecked/>
    <RadioButton {...args} id='2' name='form'/>
    <RadioButton {...args} id='3' name='form'/>
  </>
  )
}
 
export const Default = Template.bind({})
Default.args = {
  label: 'label',
  name: '',
}

export const Grouped= TemplateGrouped.bind({})
Grouped.args = {
  label: 'label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'label',
  name: '',
  defaultChecked: true,
}
