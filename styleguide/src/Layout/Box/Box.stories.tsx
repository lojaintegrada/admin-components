import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'
import { BoxHeaderProps } from './BoxHeader'
import { BoxContentProps } from './BoxContent'

import { Status } from '../../Indicators/Status'

const BoxHeaderArgs = {
  title: 'Box Title',
  subtitle: 'Box SubTitle',
  children: (
    <Status type="success" description="Some status" inverted={true} />
  ),
}

const BoxContentArgs = {
  children: (
    <div>
      Box Content
    </div>
  )
}

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    BoxHeader: BoxHeaderArgs,
    BoxContent: BoxContentArgs,
  },
} as Meta

interface BoxFullProps extends BoxProps {
  BoxHeader: BoxHeaderProps
  BoxContent: BoxContentProps
}

const Template: Story<BoxFullProps> = ({ BoxHeader, BoxContent, ...args }) => (
  <Box {...args}>
    <Box.Header {...BoxHeader} />
    <Box.Content {...BoxContent} />
  </Box>
)

export const Default = Template.bind({})

export const WithTabs = Template.bind({})
WithTabs.args = {
  BoxHeader: {
    ...BoxHeaderArgs,
    tabs: 'small',
  },
}
