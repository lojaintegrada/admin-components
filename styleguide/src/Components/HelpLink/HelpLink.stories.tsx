import React from 'react'
import { Story, Meta } from '@storybook/react'

import { HelpLink, HelpLinkProps } from '.'

export default {
  title: 'Navigation/HelpLink',
  component: HelpLink,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<HelpLinkProps> = args => <HelpLink {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Saiba mais',
  href: 'https://www.lojaintegrada.com.br'
}

