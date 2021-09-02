import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Alert, AlertProps } from './Alert'

export default {
  title: 'Indicators/Alert',
  component: Alert,
  args: {
    content: 'O dinheiro só irá para a conta no mesmo dia se o saque for feito antes das 15h e em dias úteis (segunda a sexta-feira).',
  },
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />

export const Default = Template.bind({})
