import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Alert, AlertProps } from './Alert'

import { Button } from '../../Components/Button'

export default {
  title: 'Indicators/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Z2WDD4SH8zwaJC2K5wbtMO/Sistema-Integrado?node-id=95%3A6366',
    },
  },
  args: {
    title: 'O dinheiro só irá para a conta no mesmo dia se o saque for feito antes das 15h e em dias úteis.',
    subtitle: 'Apenas de segunda e sexta-feira',
    showClose: true,
  },
} as Meta

const Template: Story<AlertProps> = args => <div className="max-w-4xl mx-auto"><Alert {...args} /></div>

export const Default = Template.bind({})

export const WithActions = Template.bind({})
WithActions.args = {
  actions: (
    <>
      <Button variant="secondary">Action</Button>
      <a href="#0" className="hover:underline text-f6">Link</a>
    </>
  ),
  showClose: false,
  onClose: () => alert('Alert closed'),
}
