import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from './Tooltip'

import { Icon } from '../../Icons'

export default {
  title: 'Indicators/Tooltip',
  component: Tooltip,
  args: {
    appendTo: 'parent',
    content: 'I am a tooltip!',
    hideOnClick: false,
    trigger: 'mouseenter',
    touch: 'hold',
    duration: 150,
    placement: 'top',
    interactive: false,
  },
} as Meta

const Template: Story<TooltipProps> = args => (
  <div className="my-10 flex justify-center">
    <Tooltip {...args}>
      <a href="#">
        <Icon icon="eye" />
      </a>
    </Tooltip>
  </div>
)

export const Default = Template.bind({})
