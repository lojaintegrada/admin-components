import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComponent } from './Icon'

export default {
  title: 'Icons/Icon',
  component: IconComponent,
  tags: ['autodocs'],
} as Meta

export const Example = (args: any) => <IconComponent {...args} />
Example.args = { icon: 'cog' }