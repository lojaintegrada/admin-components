import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Pagination, PaginationProps } from '.'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<PaginationProps> = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  // currentTitle: 'Pagina atual',
  // previousTitle: 'Pagina anterior'
}
