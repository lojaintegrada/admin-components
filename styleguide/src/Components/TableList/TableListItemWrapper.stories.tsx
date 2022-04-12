import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { TableListItemWrapper, TableListItemWrapperProps } from './TableListItemWrapper'

const CellLink = (props: any) => {
  const { href = '/', children, ...restProps } = props
  return (
    <a href={href} {...restProps}>{children}</a>
  )
}

export default {
  title: 'Components/TableList',
  component: TableListItemWrapper,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
  },
  args: {
    Wrapper: CellLink,
    children: (
      <div>
        Some randon content
      </div>
    ),
    props: {
      href: '#a'
    },
    withHover: true,
    isInsideContainer: true
  },
} as Meta

const Template: Story<TableListItemWrapperProps> = (args) => <TableListItemWrapper {...args} />

export const ItemWrapper = Template.bind({})
