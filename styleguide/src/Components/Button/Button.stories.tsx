import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default: Story = () => {
  return (
    <>
      <Button>Regular Button</Button>
      <Button size="small">Small Button</Button>
    </>
  )
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Inaccessible: Story = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)
