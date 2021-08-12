import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Box, BoxProps } from './Box'
import { BoxHeaderProps } from './BoxHeader'
import { BoxContentProps } from './BoxContent'

import { Status, StatusProps } from '../../Indicators/Status'
import { Tabs, TabsProps } from '../../Components/Tabs'

const BoxHeaderArgs: BoxHeaderProps = {
  title: 'Box Title',
  subtitle: 'Box SubTitle',
}

const BoxContentArgs: BoxContentProps = {
  children: 'Box Content'
}

const TabsArgs: TabsProps = {
  activeItem: 'item1',
  onChange: (id) => console.log('ID:', id),
  items: [
    {
      id: 'item1',
      title: 'Item1',
    },
    {
      id: 'item2',
      title: 'Item2',
    },
    {
      id: 'item3',
      title: 'Item3',
    },
  ]
}

const ActionArgs: StatusProps = {
  type: 'success',
  description: 'Some status',
  inverted: true,
}

export default {
  title: 'Layout/Box',
  component: Box,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Z2WDD4SH8zwaJC2K5wbtMO/Sistema-Integrado?node-id=95%3A9525',
    },
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
  Tabs: TabsProps
  Action: StatusProps
}

const Template: Story<BoxFullProps> = ({ BoxHeader, BoxContent, ...args }) => (
  <Box {...args}>
    <Box.Header {...BoxHeader} Tabs={<Tabs {...TabsArgs} />}>
      <Status {...ActionArgs} />
    </Box.Header>
    <Box.Content {...BoxContent} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  Action: ActionArgs,
  Tabs: TabsArgs,
}

const TemplateWithAction: Story<BoxFullProps> = ({ BoxHeader, BoxContent, Action: ActionArgs, ...args }) => (
  <Box {...args}>
    <Box.Header {...BoxHeader}>
      <Status {...ActionArgs} />
    </Box.Header>
    <Box.Content {...BoxContent} />
  </Box>
)
export const WithAction = TemplateWithAction.bind({})
WithAction.args = {
  Action: ActionArgs,
}

const TemplateWithTabs: Story<BoxFullProps> = ({ BoxHeader, BoxContent, Tabs: TabsArgs, ...args }) => (
  <Box {...args}>
    <Box.Header {...BoxHeader} Tabs={<Tabs {...TabsArgs} />} />
    <Box.Content {...BoxContent} />
  </Box>
)
export const WithTabs = TemplateWithTabs.bind({})
WithTabs.args = {
  Tabs: TabsArgs,
}
