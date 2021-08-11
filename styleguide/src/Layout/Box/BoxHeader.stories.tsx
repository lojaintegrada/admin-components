import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'
import { BoxHeaderProps } from './BoxHeader'

import { Status } from '../../Indicators/Status'

export default {
  title: 'Layout/Box/Header',
  component: Box.Header,
  args: {
    title: 'Box Title',
    subtitle: 'Box SubTitle',
    children: (
      <Status type="success" description="Some status" inverted={true} />
    ),
  },
} as Meta

interface BoxHeaderPropsWithVariant extends BoxHeaderProps, Pick<BoxProps, 'variant'> {}

const Template: Story<BoxHeaderPropsWithVariant> = (args) => (
  <Box>
    <Box.Header {...args} />
  </Box>
)

export const Header = Template.bind({})
