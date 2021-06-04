import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Sidebar, SidebarItem, SidebarSubItem } from './index'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
} as Meta

export const Default: Story = () => {
  return (
    <>
      <Sidebar>
        <SidebarItem title="Início" icon="home" href="/" />
        <SidebarItem title="Vendas" icon="order">
          <SidebarSubItem title="Listar pedidos" href="/" />
          <SidebarSubItem title="Criar pedido" href="/" />
        </SidebarItem>
        <hr className="my-2 border-base-4" />
        <SidebarItem title="Paga LI" icon="creditcard" href="/" active={true} />
      </Sidebar>
    </>
  )
}
