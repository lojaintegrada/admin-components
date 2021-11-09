import React from 'react'
import { Story, Meta } from '@storybook/react'

import Container, { ContainerProps } from './Container'
import { ActionBar, Box } from '..'
import { Breadcrumb, Button } from '../..'

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<ContainerProps> = (args) => (
  <div className="bg-base-2 w-full min-h-screen p-px">
    <Container {...args}>
      <Container.Header>
        <Breadcrumb
          currentTitle="Page"
          previousTitle="Previous page"
        />
      </Container.Header>
      <Box>
        <Box.Header title="Container test" />
        <Box.Content>
          <p className="h-64">Container test</p>
        </Box.Content>
      </Box>
    </Container>

    <ActionBar>
      <Button variant="tertiary" icon="timesCircle" onClick={() => {}}>
        Cancelar
      </Button>
      <Button variant="primary" icon="checkCircle" onClick={() => {}}>
        <span className="hidden lg:block">Salvar alterações</span>
        <span className="block lg:hidden">Salvar</span>
      </Button>
    </ActionBar>
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const Expanded = Template.bind({})
Expanded.args = {
  expanded: true,
}
