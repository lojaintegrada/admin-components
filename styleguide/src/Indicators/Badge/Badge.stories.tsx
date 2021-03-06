import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Indicators/Badge',
  component: Badge,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Z2WDD4SH8zwaJC2K5wbtMO/Sistema-Integrado?node-id=98%3A7360',
    },
  },
  args: {
    text: 'Texto',
    type: 'neutral',
    size: 'default',
  },
} as Meta

const Template: Story<BadgeProps> = args => (
  <div className="w-48 flex justify-center items-center">
    <Badge {...args} />
  </div>
)

export const Default = Template.bind({})

export const Expanded = Template.bind({})
Expanded.args = {
  expanded: true,
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}