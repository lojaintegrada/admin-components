import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Tabs, TabsProps } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Z2WDD4SH8zwaJC2K5wbtMO/Sistema-Integrado?node-id=95%3A7532',
    },
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
        disabled: true,
      },
    ],
  },
} as Meta

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

export const Default = Template.bind({})
