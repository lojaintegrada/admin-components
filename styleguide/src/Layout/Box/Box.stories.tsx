import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box, BoxProps } from './Box'
import { BoxHeader as BoxHeaderComponent, BoxHeaderProps } from './BoxHeader'
import {
  BoxContent as BoxContentComponent,
  BoxContentProps,
} from './BoxContent'
import { BoxSeparator as BoxSeparatorComponent } from './BoxSeparator'

export default {
  title: 'Layout/Box',
  component: Box,
} as Meta

const Template: Story<BoxProps> = args => <Box {...args} />
const BoxExample = (
  <React.Fragment>
    <Box.Header title="Box Title" subtitle="Box SubTitle">
      <button
        type="button"
        className="text-on-base-2 text-f6 tracking-4 hover:text-on-base duration-200 transition-colors hidden sm:inline-flex items-center"
      >
        Custom Button
      </button>
    </Box.Header>
    <Box.Content>
      Box Content
      <Box.Separator />
      Box Content
    </Box.Content>
  </React.Fragment>
)
export const BoxFull = Template.bind({})
BoxFull.args = {
  children: BoxExample,
}
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
