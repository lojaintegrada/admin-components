import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from './Box'
import { BoxContentProps } from './BoxContent'

export default {
  title: 'Layout/Box/Content',
  component: Box.Content,
  args: {
    children: 'Box Content'
  }
} as Meta

const Template: Story<BoxContentProps> = ({ children, ...args }) => (
  <Box>
    <Box.Content {...args}>
      {children}
    </Box.Content>
  </Box>
)

export const Content = Template.bind({})
