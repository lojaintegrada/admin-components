import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon } from '../../Icons/Icon'
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
    <Icon icon='desktop' key={1} />,
    <Icon icon='mobile' key={2}/>,
  ]
}

export const WithText = Template.bind({})
WithText.args = {
  disabled: false,
  children: [
    <span key={1}>With Text</span>,
    <span key={2}>With Text</span>,
    <span key={3}>With Text</span>,
  ]
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: [
    <span key={1}>Disabled</span>,
    <span key={2}>Disabled</span>,
  ]
}

export const WithOnChange = Template.bind({})
WithOnChange.args = {
  disabled: false,
  children: [
    <Icon icon='desktop' key={1} />,
    <Icon icon='mobile' key={2}/>,
  ],
  onChange: (e) => {
    console.log(e.target.name)
  },
}
