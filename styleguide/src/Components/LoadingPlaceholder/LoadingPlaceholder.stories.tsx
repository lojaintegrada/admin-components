import React from 'react'
import { Story, Meta } from '@storybook/react'

import { LoadingPlaceholder, LoadingPlaceholderProps } from './LoadingPlaceholder'

export default {
  title: 'Components/LoadingPlaceholder',
  component: LoadingPlaceholder,
  args: {},
} as Meta

const Template: Story<LoadingPlaceholderProps> = args => <div className="w-40"><LoadingPlaceholder {...args} /></div>

export const Default = Template.bind({})
