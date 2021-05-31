import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Sidebar } from './index'

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Default: Story = () => {
  return (
    <>
      <Sidebar />
    </>
  )
}
