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
          className: 'edit-selected hidden lg:flex',
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
          text: (
            <>
              Ativar <span className="hidden lg:inline">selecionados</span>
            </>
          ),
        },
        {
          className: 'disable-selected',
          icon: 'ban',
          text: (
            <>
              Inativar <span className="hidden lg:inline">selecionados</span>
            </>
          ),
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
          text: (
            <>
              Remover <span className="hidden lg:inline">selecionados</span>
            </>
          ),
          onClick: () => alert('Remover!'),
        },
      ],
    },
  ],
}
