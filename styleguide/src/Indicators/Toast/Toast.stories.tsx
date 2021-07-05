import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Toast } from './Toast'

import { Button } from '../../Components/Button'

export default {
  title: 'Indicators/Toast',
  component: Toast.Container,
  args: {
    title: 'Aprovado',
    type: 'success'
  },
  argTypes: {
    type: {
      options: ['info', 'success', 'warning', 'error', 'default'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Template: Story<any> = ({ title, ...args }) => (
  <>
    <Toast.Container />
    <Button onClick={() => Toast.notify(title, { ...args })}>
      Show toast
    </Button>
  </>
)

export const Default = Template.bind({})
