import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from './Tooltip'

import { Icon } from '../../Icons'

export default {
  title: 'Indicators/Tooltip',
  component: Tooltip,
  args: {
    content: 'I am a tooltip!',
    hideOnClick: false,
    trigger: 'mouseenter',
    touch: 'hold',
    duration: 150,
    placement: 'top',
  },
} as Meta

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <a href="#">
      <Icon icon="eye" />
    </a>
  </Tooltip>
)

export const Default = Template.bind({})
