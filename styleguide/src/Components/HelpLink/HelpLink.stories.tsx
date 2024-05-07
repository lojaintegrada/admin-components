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
  as: 'hyperLink',
  href: 'https://www.lojaintegrada.com.br'
}

export const Button = Template.bind({})
Button.args = {
  text: 'Saiba mais',
  as: 'button',
  onClick: function() {
    alert('Clicked!')
  }
}

export const NoTextOnMobile = Template.bind({})
NoTextOnMobile.args = {
  text: 'Saiba mais',
  as: 'hyperLink',
  href: 'https://www.lojaintegrada.com.br',
  mobileText: false,
}

