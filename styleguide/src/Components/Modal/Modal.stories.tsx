import React from 'react'
import { Story, Meta } from '@storybook/react'

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
