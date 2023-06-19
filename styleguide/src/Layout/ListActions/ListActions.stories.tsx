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
          className: 'edit-selected',
          icon: 'blog',
          text: (
            <>
              Editar em <br />
              massa
            </>
          ),
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
        },
        {
          className: 'disable-selected',
          icon: 'ban',
          text: 'Inativar selecionados',
          tagType: 'new',
          id: 'disable-selected',
        },
      ],
    },
    {
      buttons: [
        {
          className: 'remove-selected',
          variant: 'danger',
          icon: 'trash',
          text: 'Remover selecionados',
          onClick: () => alert('Remover!'),
        },
      ],
    },
  ],
}
