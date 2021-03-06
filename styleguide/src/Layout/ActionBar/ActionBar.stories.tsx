import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ActionBar, ActionBarProps } from '.'
import { Button } from '../../Components/Button'

export default {
  component: ActionBar,
  title: 'Layout/ActionBar',
} as Meta

const Template: Story<ActionBarProps> = (args) => <ActionBar {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <Button variant="tertiary" icon="timesCircle" onClick={() => {}}>
      Cancelar
    </Button>,
    <Button variant="primary" icon="checkCircle" onClick={() => {}}>
      <span className="hidden lg:block">Criar novo registro</span>
      <span className="block lg:hidden">Criar</span>
    </Button>,
  ],
}

export const OnlyMobile = Template.bind({})
OnlyMobile.args = {
  onlyMobile: true,
  children: [
    <Button icon="trash" onClick={() => {}}>
      Remover
    </Button>,
    <Button icon="checkCircle" onClick={() => {}}>
      Ativar
    </Button>,
    <></>,
    <Button icon="ban" onClick={() => {}}>
      Inativar
    </Button>,
  ],
}
