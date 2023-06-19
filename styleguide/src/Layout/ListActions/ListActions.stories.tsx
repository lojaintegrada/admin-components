import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ListActions, ListActionsProps } from '.'

export default {
  component: ListActions,
  title: 'Layout/ListActions',
} as Meta

const Template: Story<ListActionsProps> = (args) => <ListActions {...args} />

export const Default = Template.bind({})
Default.args = {
  actions: [
    {
      buttons: [
        {
          className: 'adjust-selected',
          icon: 'cog',
          text: 'Configurações',
          tagType: 'sign',
        },
      ],
    },
    {
      buttons: [
        {
          className: 'enable-selected',
          icon: 'checkCircle',
          text: 'Ativar selecionados',
          tagType: 'new',
        },
        {
          className: 'disable-selected',
          icon: 'ban',
          text: 'Inativar selecionados',
          tagText: 'LEROLERO',
        },
      ],
    },
    {
      buttons: [
        {
          className: 'remove-selected',
          type: 'danger',
          icon: 'trash',
          text: 'Remover selecionados',
        },
      ],
    },
  ],
}
