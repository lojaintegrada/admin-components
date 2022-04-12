import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { TableListItemProps } from './TableListItem.interface'
import { TableListItemLoading } from './TableListItemLoading'

export default {
  title: 'Components/TableList',
  component: TableListItemLoading,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
  },
  args: {
    forceBorderDesktop: false,
  },
} as Meta

const Template: Story<Pick<TableListItemProps, 'forceBorderDesktop'>> = (args) => <TableListItemLoading {...args} />

export const ItemLoading = Template.bind({})
