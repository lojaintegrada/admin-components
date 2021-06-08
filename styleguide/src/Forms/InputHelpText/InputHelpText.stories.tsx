import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InputHelpText, InputHelpTextProps } from '.'

export default {
  title: 'Forms/InputHelpText',
  component: InputHelpText,
} as Meta

const Template: Story<InputHelpTextProps> = args => <InputHelpText {...args} />

export const Default = Template.bind({})
Default.args = {
  helpText: 'Texto de ajuda para preencher o campo'
}
