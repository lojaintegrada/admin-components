import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Tabs, TabsProps } from './TableList'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
  },
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
    ],
  },
} as Meta

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

export const Default = Template.bind({})

export const WithTabDisabled = Template.bind({})
WithTabDisabled.args = {
  items: [
    {
      id: 'pedidos',
      title: 'Pedidos',
    },
    {
      id: 'cupons',
      title: 'Cupons de desconto',
      disabled: true,
    },
  ],
}
