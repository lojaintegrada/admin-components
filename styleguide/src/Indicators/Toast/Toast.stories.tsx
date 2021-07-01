import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Toast, ToastProps } from './Toast'

import { Button } from '../../Components/Button'

export default {
  title: 'Indicators/Toast',
  component: Toast.Container,
  args: {
    title: 'Aprovado',
    type: 'success'
  },

} as Meta

interface ttttt extends ToastProps {
  title: string
}

const Template: Story<ttttt> = ({ title, ...args }) => (
  <>
    <Toast.Container />
    <Button onClick={() => Toast.notify(title, { ...args })}>
      Show toast
    </Button>
  </>
)

export const Default = Template.bind({})
