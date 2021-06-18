import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LoadingPlaceholder, LoadingPlaceholderProps } from './LoadingPlaceholder'

export default {
  title: 'Components/LoadingPlaceholder',
  component: LoadingPlaceholder,
  args: {},
} as Meta

const Template: Story<LoadingPlaceholderProps> = args => <LoadingPlaceholder {...args} />

export const Default = Template.bind({})
