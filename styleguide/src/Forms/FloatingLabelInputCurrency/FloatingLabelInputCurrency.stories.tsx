import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Icon } from '../../Icons'
import {
  FloatingLabelInputCurrency,
  FloatingLabelInputCurrencyProps,
} from './FloatingLabelInputCurrency'

export default {
  title: 'Forms/FloatingLabelInputCurrency',
  component: FloatingLabelInputCurrency,
} as Meta

const Template: Story<FloatingLabelInputCurrencyProps> = (args) => (
  <FloatingLabelInputCurrency {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Meu Campo',
  name: 'nome',
  id: 'campo',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Meu Campo',
  name: 'nome',
  id: 'campo',
}

export const Prefix = Template.bind({})
Prefix.args = {
  label: 'Meu Campo',
  prefix: 'R$',
  name: 'valor',
  id: 'campo',
}

export const IconPrefix = Template.bind({})
IconPrefix.args = {
  label: 'Meu Campo',
  prefix: <Icon icon="cog" />,
  name: 'nome',
  id: 'campo',
}

export const Sufix = Template.bind({})
Sufix.args = {
  label: 'Meu Campo',
  sufix: 'R$',
  name: 'valor',
  id: 'campo',
}

export const IconSufix = Template.bind({})
IconSufix.args = {
  label: 'Meu Campo',
  sufix: <Icon icon="cog" />,
  name: 'nome',
  id: 'campo',
}

export const WithBoth = Template.bind({})
WithBoth.args = {
  label: 'Meu Campo',
  prefix: 'R$',
  sufix: <Icon icon="cog" />,
  name: 'valor',
  id: 'campo',
}
