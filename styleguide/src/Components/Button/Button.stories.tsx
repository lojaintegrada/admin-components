import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Default Button',
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small Button',
}

export const Action = Template.bind({})
Action.args = {
  variant: 'danger',
  children: 'Click me',
  type: 'submit',
  onClick: function() {
    alert('Clicked!')
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
  children: 'Loading Button',
}

export const WithLink = Template.bind({})
WithLink.args = {
  children: 'External Link',
  href: "https://google.com",
  target: "_blank"
}
