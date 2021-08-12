import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from '../../Box'
import { BoxHeaderProps } from './BoxHeader'

export default {
  title: 'Layout/Box/Header',
  component: Box.Header,
  argTypes: {
    Tabs: {
      control: false
    },
    children: {
      control: false
    }
  },
  args: {
    title: 'Box Title',
    subtitle: 'Box SubTitle',
  },
} as Meta

interface BoxHeaderPropsWithVariant extends BoxHeaderProps, Pick<BoxProps, 'variant'> {}

const Template: Story<BoxHeaderPropsWithVariant> = (args) => (
  <Box>
    <Box.Header {...args} />
  </Box>
)

export const Header = Template.bind({})
