import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'
import { BoxHeader as BoxHeaderComponent, BoxHeaderProps } from './BoxHeader'
import {
  BoxContent as BoxContentComponent,
  BoxContentProps,
} from './BoxContent'
import { BoxSeparator as BoxSeparatorComponent } from './BoxSeparator'

import { Status } from '../../Indicators/Status'

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes:{
    children: {
      control: false
    }
  },
  args: {
    BoxHeader: {
      title: 'Box Title',
      subtitle: 'Box SubTitle',
      children: (
        <Status type="success" description="Some status" inverted={true} />
      ),
    },
    BoxContent: {
      children: (
        <div>
          Box Content
        </div>
      )
    },
  }
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

export const BoxFull = Template.bind({})
BoxFull.parameters = {
  layout: 'padded',
}

const TemplateHeader: Story<BoxHeaderProps> = args => (
  <BoxHeaderComponent {...args} />
)
export const BoxHeader = TemplateHeader.bind({})
BoxHeader.args = {
  title: 'Box Title',
  subtitle: 'Box SubTitle',
}

const TemplateContent: Story<BoxContentProps> = args => (
  <BoxContentComponent {...args} />
)
export const BoxContent = TemplateContent.bind({})
BoxContent.args = {
  children: 'Box Content',
}

const TemplateSeparator: Story = () => (
  <BoxSeparatorComponent />
)
export const BoxSeparator = TemplateSeparator.bind({})
