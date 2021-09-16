import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Select, SelectProps } from '.'

const selectOptions = [
  { label: 'Visualizar 15', value: 15 },
  { label: 'Visualizar 50', value: 50, disabled: true },
  { label: 'Visualizar 100', value: 100 },
]

export default {
  title: 'Forms/Select',
  component: Select,
  args: {
    options: selectOptions,
    onChange: (e: any) => {
      alert(`Item: ${e.target.value}`)
    },
  },
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'exemplo',
  label: 'Meu Select',
  helpText: 'Texto de ajuda para escolher',
  placeholder: 'Selecione um item',
  defaultValue: 100,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Select',
  helpText: 'Texto de ajuda para escolher',
  errorMessage: 'Campo obrigatório',
}

export const WithoutStyle = Template.bind({})
WithoutStyle.args = {
  withoutStyle: true,
}
