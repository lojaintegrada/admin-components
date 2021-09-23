import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Dropdown, DropdownProps, CustomOptionProps } from './'

const dropdownOptions = [
  { label: 'Visualizar 15', value: 15 },
  { label: 'Visualizar 50', value: 50, isDisabled: true, icon: 'cog' },
  { label: 'Visualizar 100', value: 100 },
]

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
  args: {
    options: dropdownOptions,
    onChange: (e: CustomOptionProps) => {
      alert(`Item ${e.label}: ${e.value}`)
    },
  },
} as Meta

const Template: Story<DropdownProps> = (args) => (
  <div className="w-48">
    <Dropdown {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Selecione um item',
}

export const Empty = Template.bind({})
Empty.args = {
  placeholder: 'Selecione um item',
  options: [],
  emptyMessage: 'Não foram encontradas opções',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Selecione um item',
  disabled: true,
}

export const Searchable = Template.bind({})
Searchable.args = {
  placeholder: 'Selecione um item',
  isSearchable: true,
}

export const FixedValue = Template.bind({})
FixedValue.args = {
  placeholder: 'Selecione um item',
  fixedValue: { label: 'Saiba mais', value: '1' },
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  placeholder: 'Selecione um item',
  variant: 'large',
}

export const Grouped = Template.bind({})
Grouped.args = {
  placeholder: 'Selecione um item',
  options: [
    {
      label: 'Ajuda',
      options: [
        { label: 'Visualizar 15', value: '15' },
        { label: 'Visualizar 50', value: '50', isDisabled: true, icon: 'cog' },
        { label: 'Visualizar 100', value: '100' },
      ],
    },
  ],
}

export const GroupedWithLength = Template.bind({})
GroupedWithLength.args = {
  placeholder: 'Selecione um item',
  showGroupLength: true,
  options: [
    {
      label: 'Ajuda',
      options: [
        { label: 'Visualizar 15', value: '15' },
        { label: 'Visualizar 50', value: '50', isDisabled: true, icon: 'cog' },
        { label: 'Visualizar 100', value: '100' },
      ],
    },
  ],
}

export const HelpText = Template.bind({})
HelpText.args = {
  placeholder: 'Selecione um item',
  variant: 'large',
  helpText: 'Texto de ajuda para preencher o campo',
}

export const Label = Template.bind({})
Label.args = {
  placeholder: 'Selecione um item',
  variant: 'large',
  label: 'Label',
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: 'Selecione um item',
  variant: 'large',
  helpText: 'Texto de ajuda para preencher o campo',
  label: 'Label',
  errorMessage: 'Houve um erro',
}