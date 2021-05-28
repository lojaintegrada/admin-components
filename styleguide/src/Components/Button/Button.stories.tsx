import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Default Button'
  }
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small Button'
}

export const Action = Template.bind({})
Action.args = {
  variant: 'danger',
  children: 'Click me',
  onClick: function() {
    alert('Clicked!')
  }
}
