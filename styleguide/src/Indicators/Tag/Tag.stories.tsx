import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Icon } from '../../Icons'

import { Tag, TagProps } from './Tag'

export default {
  title: 'Indicators/Tag',
  component: Tag,
  decorators: [withDesign],
  args: {
    content: 'De 10/02/2022 a 22/02/2022',
    type: 'primary',
  },
} as Meta

const Template: Story<TagProps> = args => <Tag {...args} />

export const Default = Template.bind({})

export const WithAction = Template.bind({})
WithAction.args = {
  action: (
    <Icon icon="timesCircle" size={4} block />
  ),
}
