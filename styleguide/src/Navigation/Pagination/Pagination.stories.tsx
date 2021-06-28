import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Pagination, PaginationProps } from '.'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  args: {
    onPageChange: (page: any) => { alert(`To page: ${page}`) },
    totalPages: 10,
  }
} as Meta

const Template: Story<PaginationProps> = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  currentItemsLength: 2,
  totalItemsLength: 123,
}

export const WithoutItems = Template.bind({})

export const WithLengthOptions = Template.bind({})
WithLengthOptions.args = {
  currentItemsLength: 5,
  totalItemsLength: 123,
  onItemsLengthChange: (e: any) => { alert(`Selected length: ${e}`) },
  itemsLengthOptions: [
    { label: `Mostrando 20`, value: 20 },
    { label: 'Mostrando 50', value: 50 },
    { label: 'Mostrando 100', value: 100 },
  ]
}
