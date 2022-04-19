import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { TableListItemProps } from './TableListItem.interface'
import { TableListItem } from './TableListItem'

const CellLink = (props: any) => {
  const { href = '/', children, ...restProps } = props
  return (
    <a href={href} {...restProps}>{children}</a>
  )
}

export default {
  title: 'Components/TableList',
  component: TableListItem,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'R$ 49,90 devolvida parcialmente',
    description: '#29102 - Daniela Cabral via Cartão de crédito',
    timestampTime: '19:45',
    timestampDate: '10 de dezembro',
    itemWrapperProps: {
      href: '#a'
    },
    withIcon: {
      class: 'bg-warning-light text-warning-dark',
      icon: 'clock',
    },
    forceBorderDesktop: false,
    withHover: true,
    isInsideContainer: true,
    itemWrapper: CellLink,
  },
} as Meta

const Template: Story<TableListItemProps> = (args) => <TableListItem {...args} />

export const Item = Template.bind({})
