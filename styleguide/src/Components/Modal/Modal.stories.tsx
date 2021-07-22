import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Modal, ModalProps } from './Modal'
import { Box } from '../../Layout/Box'

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

const Template: Story<ModalProps> = args => {
  const [_, updateArgs] = useArgs()
  const handleClose = () => {
    updateArgs({ isOpen: false })
  }
  return (
    <div>
      <Modal {...args} onClose={handleClose} />
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
}

export const Default = Template.bind({})
