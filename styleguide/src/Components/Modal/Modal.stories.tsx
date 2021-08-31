import React, { useEffect, useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Modal, ModalProps } from './Modal'
import { Box } from '../../Layout/Box'
import { Button } from '../Button'

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: (
      <div>
        <p>Modal Content</p>
      </div>
    ),
  },
} as Meta

const Template: Story<ModalProps> = args => (
  <div>
    <Modal {...args} />
    <Box>
      <Box.Content>
        Any page content
      </Box.Content>
    </Box>
    <Box>
      <Box.Content>
        Any page content
      </Box.Content>
    </Box>
    <Box>
      <Box.Content>
        Any page content
      </Box.Content>
    </Box>
    <Box>
      <Box.Content>
        Any page content
      </Box.Content>
    </Box>
  </div>
)

export const Default = Template.bind({})

export const WithScroll = Template.bind({})
WithScroll.args = {
  headerTitle: "Modal title",
  children: (
    <div>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
    </div>
  ),
  footerActions: (
    <div className="flex justify-end">
      <Button variant="secondary" className="mr-5">
        Some button
      </Button>
      <Button>Some button</Button>
    </div>
  ),
}

export const WithFooter = Template.bind({})
WithFooter.args = {
  headerClose: 'Close',
  footerActions: (
    <div className="flex justify-end">
      <Button variant="secondary" className="mr-5">
        Some button
      </Button>
      <Button>Some button</Button>
    </div>
  ),
}

const TemplateWithId: Story<ModalProps> = (args) => {
  const [newCustomArgs, setNewCustomArgs] = useState<ModalProps>()

  useEffect(() => {
    const customParentSelector = document.getElementById('parentSelector')
    args.parentSelector = customParentSelector

    setNewCustomArgs(args)
  }, [])

  return (
    <div>
      <div id="parentSelector">Content with parentSelector id</div>
      {newCustomArgs && <Modal {...newCustomArgs} />}
    </div>
  )
}

export const WithCustomParentSelector = TemplateWithId.bind({})
WithCustomParentSelector.args = {
  headerClose: 'Close',
  footerActions: (
    <div className="flex justify-end">
      <Button variant="secondary" className="mr-5">
        Some button
      </Button>
      <Button>Some button</Button>
    </div>
  ),
  parentSelector: document.getElementById('parentSelector'),
}
