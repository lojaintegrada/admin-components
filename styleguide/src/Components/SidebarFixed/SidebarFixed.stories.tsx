import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input } from '../../Forms/Input'
import { Select } from '../../Forms/Select'
import { Button } from '../Button'

import { SidebarFixed, SidebarFixedProps } from '.'

export default {
  title: 'Components/SidebarFixed',
  component: SidebarFixed,
  args: {
    children: (
      <div className="flex flex-col gap-5">
        <Input label="Filtro 1" />
        <Input label="Filtro 2" />
        <Select label="Filtro 3" options={[]} />
        <Input label="Filtro 4" />
      </div>
    ),
    isOpen: true,
    helpLink: 'https://ajuda.lojaintegrada.com.br/',
    footerActions: (
      <Button fullWidth>Aplicar filtros</Button>
    ),
    onClose: () => alert('Closed')
  }
} as Meta

const Template: Story<SidebarFixedProps> = args => (
  <div>
    <SidebarFixed {...args} />
    Nothing here to see
  </div>
)

export const Default = Template.bind({})
Default.args = {}
