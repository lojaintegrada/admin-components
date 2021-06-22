import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Timeline, TimelineProps } from './Timeline'

export default {
  title: 'Components/Timeline',
  component: Timeline,
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
        title: 'Vendacriadadacriadadacriadadacriadadacriadadacriadadacriadadacriadadacriadadacriadadacriadadacriada',
        iconBackgroundColor: 'bg-danger',
        description: 'Status change: from Cancelling to Cancelled',
      },
      {
        title: 'Venda criada',
        timestamp: '11/11/2011 às 10:10:10',
        icon: 'cog',
      },
    ]
  },
} as Meta

const Template: Story<TimelineProps> = args => <div style={{ maxWidth: 500 }}><Timeline {...args} /></div>

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  items: [],
}
