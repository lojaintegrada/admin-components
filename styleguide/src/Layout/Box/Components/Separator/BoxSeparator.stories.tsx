import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from '../../Box'

export default {
  title: 'Layout/Box/Separator',
  component: Box.Separator,
  argTypes: {
    variant: {
      options: ['default', 'small'],
      control: { type: 'radio' }
    }
  },
  args: {
    variant: 'default',
  }
} as Meta

const Template: Story<Pick<BoxProps, 'variant'>> = (args) => (
  <Box {...args}>
    <Box.Content>
      Some content 1
      <Box.Separator />
      Some content 2
    </Box.Content>
  </Box>
)

export const Separator = Template.bind({})
