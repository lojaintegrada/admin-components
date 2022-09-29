import React from 'react'
import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Icon } from '../../Icons'
import { Button } from '../Button'
import { TableList, TableListProps } from './TableList'

const exampleItems = [
  {
    title: 'R$ 3.599,99 cancelada',
    description: '#JZW55MBEIX - QA Loja Integrada via pix',
    timestampTime: '11:18',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close', tooltip: {placement: 'right', message: 'I am a tooltip!'} }
  },
  {
    title: 'R$ 3.599,99 cancelada',
    description: '#P0UYL7PWBF - QA Loja Integrada via pix',
    timestampTime: '05:38',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close' }
  },
  {
    title: 'R$ 12,00 incompleta',
    description: '#67JYUCMTR1',
    timestampTime: '05:37',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-primary-light text-inverted-2', icon: 'clock' }
  },
  {
    title: 'R$ 0,50 cancelada',
    description: '#JTRM6NBP41 - QA Store 1 via pix',
    timestampTime: '05:36',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close' }
  },
  {
    title: 'R$ 0,01 incompleta',
    description: '#39YDAHYA1F',
    timestampTime: '05:35',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-primary-light text-inverted-2', icon: 'clock' }
  },
  {
    title: 'R$ 12,00 incompleta',
    description: '#ZPN7P3BZI3',
    timestampTime: '05:33',
    timestampDate: '11 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-primary-light text-inverted-2', icon: 'clock' }
  },
  {
    title: 'R$ 229,05 aprovada',
    description: '#0XGQZQ164P - QA Loja Integrada via boleto',
    timestampTime: '15:40',
    timestampDate: '07 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-success-light text-success-dark', icon: 'check' }
  },
  {
    title: 'R$ 232,56 devolvida',
    description: '#V1KZRJS49J - QA Loja Integrada via credit_card',
    timestampTime: '05:46',
    timestampDate: '05 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-[#E7DDF3] text-inverted-1', icon: 'back' }
  },
  {
    title: 'R$ 2.666,79 devolvida parcialmente',
    description: '#RB3JJLLKV9 - QA Loja Integrada via credit_card',
    timestampTime: '13:46',
    timestampDate: '04 de abril',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-[#E7DDF3] text-inverted-1', icon: 'halfBack' }
  },
  {
    title: 'R$ 144,00 criada',
    description: '#FLGXE26Q62 - Joazinho do Teste via credit_card',
    timestampTime: '14:59',
    timestampDate: '29 de março',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-primary-light text-inverted-2', icon: 'clock' }
  },
  {
    title: 'R$ 311,64 criada',
    description: '#1RS5OPTW34 - Joazinho do Teste via credit_card',
    timestampTime: '14:23',
    timestampDate: '29 de março',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-primary-light text-inverted-2', icon: 'clock' }
  },
  {
    title: 'R$ 360,00 cancelada',
    description: '#D4RHATKP9E',
    timestampTime: '16:10',
    timestampDate: '24 de março',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close' }
  },
  {
    title: 'R$ 350,56 cancelada',
    description: '#4UZDIZJCNS',
    timestampTime: '16:05',
    timestampDate: '24 de março',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close' }
  },
  {
    title: 'R$ 23,30 cancelada',
    description: '#WNLVZQDREA',
    timestampTime: '16:04',
    timestampDate: '24 de março',
    itemWrapperProps: { href: '#link' },
    withIcon: { class: 'bg-danger-light text-danger-dark', icon: 'close' }
  },
]

export default {
  title: 'Components/TableList',
  component: TableList,
  decorators: [withDesign],
  parameters: {
    layout: 'padded',
  },
  args: {
    items: exampleItems,
  },
} as Meta

const Template: Story<TableListProps> = (args) => <TableList {...args} />

export const Default = Template.bind({})

export const WithLoading = Template.bind({})
WithLoading.args = {
  isLoading: true,
}

export const WithEmpty = Template.bind({})
WithEmpty.args = {
  items: [],
  empty: {
    title: 'Poxa, que pena! Você ainda não fez nenhuma venda conosco.',
    illustration: <Icon icon="ban" size={9} className="text-primary" />,
    subTitle: 'Mas fica tranquilo que quando você começar a vender, suas transações aparecerão aqui. Continua firme, você consegue!',
    action: <Button variant="secondary">Voltar</Button>
  }
}

const CellLink = (props: any) => {
  const { href = '/', children, ...restProps } = props
  return (
    <a href={href} {...restProps}>{children}</a>
  )
}

export const WithLink = Template.bind({})
WithLink.args = {
  withHover: true,
  isInsideContainer: true,
  itemWrapper: CellLink,
}
