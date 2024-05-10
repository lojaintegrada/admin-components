import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Calendar, CalendarProps } from '.'

export default {
  title: 'Navigation/Calendar',
  component: Calendar,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<CalendarProps> = args => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  onDatesChange: function (startDate: Date, endDate: Date) {
    console.log('start date =', startDate)
    console.log('end date =', endDate)
    console.log(startDate < endDate)
  },
}