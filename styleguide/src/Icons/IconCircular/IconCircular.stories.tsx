import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconCircular as IconCircularComponent, IconCircularProps } from './IconCircular'

export default {
  title: 'Icons/IconCircular',
  component: IconCircularComponent,
} as Meta

const Template: Story<IconCircularProps> = args => <IconCircularComponent {...args} />

export const Default = Template.bind({})

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  icon: 'camera',
  variant: 'danger'
}

export const CustomIconAndBackground = Template.bind({})
CustomIconAndBackground.args = {
  icon: 'camera',
  bgClass: 'bg-[#d380ec]',
}
