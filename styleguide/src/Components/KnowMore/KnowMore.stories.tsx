import React from 'react'
import { Story, Meta } from '@storybook/react'

import { KnowMore, KnowMoreProps } from '.'

export default {
  title: 'Navigation/KnowMore',
  component: KnowMore,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<KnowMoreProps> = args => <KnowMore {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Saiba mais',
  href: 'https://www.lojaintegrada.com.br'
}

