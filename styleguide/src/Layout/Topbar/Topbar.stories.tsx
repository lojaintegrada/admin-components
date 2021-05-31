import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Topbar, TopbarProps } from '.'

export default {
  title: 'Layout/Topbar',
  component: Topbar,
} as Meta

const Template: Story<TopbarProps> = args => <Topbar {...args} />

export const Default = Template.bind({})
Default.args = {}
