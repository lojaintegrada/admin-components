import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Timeline, TimelineProps } from './Timeline'

export default {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  args: {
    items: [
      {
        title: 'Venda criada',
        timestamp: '11/11/2011 às 10:10:10',
        icon: 'eye',
        iconBackgroundColor: 'bg-primary',
        description: 'Status change: from Cancelling to CancelledStatus change: from Cancelling to CancelledStatus change: from Cancelling to Cancelled',        
      },
      {
        title: 'Venda criada',
      },
      {
        title: 'Venda criada sem toggle',
        iconBackgroundColor: 'bg-danger',
        description: 'Status change: from Cancelling to Cancelled',
        toggle: false,
      },
      {
        title: 'Venda criada',
        timestamp: '11/11/2011 às 10:10:10',
        icon: 'cog',
        iconColor: 'text-danger',
        iconBackgroundColor: 'bg-danger-light',
      },
    ]
  },
} as Meta

const Template: Story<TimelineProps> = args => <Timeline {...args} />

export const Default = Template.bind({})

export const WithoutToggle = Template.bind({})
WithoutToggle.args = {
  toggleItems: false,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  items: [],
}