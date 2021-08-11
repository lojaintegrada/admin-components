import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tabs, TabsProps } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    activeItem: 'pedidos',
    onChange: (id: string) => {
      alert(id)
    },
    items: [
      {
        id: 'pedidos',
        title: 'Pedidos',
      },
      {
        id: 'cupons',
        title: 'Cupons de desconto',
      },
      {
        id: 'relatorios',
        title: 'Todos os relatorio da loja',
      },
      {
        id: 'vendas',
        title: 'Vendas',
      },
    ]
  },
} as Meta

const Template: Story<TabsProps> = args => <Tabs {...args} />

export const Default = Template.bind({})
