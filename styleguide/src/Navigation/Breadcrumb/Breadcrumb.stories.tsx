import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Breadcrumb, BreadcrumbProps } from '.'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<BreadcrumbProps> = args => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  currentTitle: 'Página atual',
  previousTitle: 'Página anterior'
}

export const NoPrevious = Template.bind({})
NoPrevious.args = {
  currentTitle: 'Página atual',
}

export const WithPrevious = Template.bind({})
WithPrevious.args = {
  currentTitle: 'Página atual',
  previousTitle: 'Página anterior',
  previousHref: 'https://www.google.com'
}

const Link = (props: any) => { return  <a href="https://www.google.com" target="_blank" className={`underline ` + props.className}>{props.children}</a> }
export const WithPreviousCustom = Template.bind({})
WithPreviousCustom.args = {
  currentTitle: 'Página atual',
  previousTitle: 'Página anterior',
  Link: Link
}
