import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon } from '../../Icons'
import { ToggleButton, ToggleButtonProps } from '.'

export default {
  title: 'Forms/ToggleButton',
  component: ToggleButton,
} as Meta

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />

export const WithIcon = Template.bind({})
WithIcon.args = {  
  disabled: false,
  children: [
    <Icon icon='desktop'></Icon>,
    <Icon icon='mobile'></Icon>,
  ]
}

export const WithText = Template.bind({})
WithText.args = {  
  disabled: false,
  children: [ 
    'With Text',
    'With Text'
  ]
}

export const Disabled = Template.bind({})
Disabled.args = {  
  disabled: true,
  children: [ 
    'Disabled',
    'Disabled'
  ]
}

export const WithOnChange = Template.bind({})
WithOnChange.args = {
  children: [
    <Icon icon='desktop'></Icon>,
    <Icon icon='mobile'></Icon>,
  ],
  onChange: (e) => {
    console.log(e.target.value)
  },
}