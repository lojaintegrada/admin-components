import React from 'react'
import { Story, Meta } from '@storybook/react'

import { InformationBox, InformationBoxProps } from './InformationBox'

export default {
  title: 'Indicators/InformationBox',
  component: InformationBox,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Z2WDD4SH8zwaJC2K5wbtMO/Sistema-Integrado?node-id=2406%3A20851',
    },
  },
  args: {
    title: 'Dica!',
    subtitle: 'Como criar um cadastro de produto incrível? No mundo virtual, o consumidor não pode pegar, sentir ou experimentar o produto. Por isso, a imagem que você utiliza faz toda a diferença na hora da venda.',
  },
} as Meta

const Template: Story<InformationBoxProps> = args => <div className="max-w-4xl mx-auto"><InformationBox {...args} /></div>

export const Default = Template.bind({})