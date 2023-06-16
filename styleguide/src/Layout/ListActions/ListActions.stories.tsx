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
          className: 'enable-selected',
          icon: 'checkCircle',
          text: 'Ativar selecionados',
        },
        {
          className: 'disable-selected',
          icon: 'ban',
          text: 'Inativar selecionados',
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
