import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Calendar, CalendarProps } from '.'
import { CUSTOM_PERIOD, YESTERDAY } from './constants'

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
    return [startDate, endDate]
  },
}

export const CustomPeriods = Template.bind({})
CustomPeriods.args = {
  onDatesChange: function (startDate: Date, endDate: Date) {
    return [startDate, endDate]
  },
  periods: [YESTERDAY, CUSTOM_PERIOD]
}