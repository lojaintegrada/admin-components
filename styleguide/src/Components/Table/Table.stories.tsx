import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Table, TableProps } from './Table'
import { Icon } from '../../Icons'

const Link = (props: any) => {
  return (
    <a href="#a" {...props}>
      {props.children}
    </a>
  )
}

const columns = [
  {
    id: 'Name',
    label: 'Name',
    cellWrapper: Link,
  },
  {
    id: 'Address',
    label: 'Address',
    cellWrapper: Link,
  },
  {
    id: 'Price',
    label: <small>KA</small>,
    textAlign: 'center',
    size: 'w-1/6',
    cellWrapper: Link,
  },
  {
    id: 'Count',
    label: 'Count',
    size: 'w-1/6',
    cellWrapper: Link,
  },
  {
    id: 'Active',
    label: 'Active',
    size: 'w-1/6',
    textAlign: 'center',
  },
  {
    id: 'Actions',
    label: 'Actions',
    size: 'w-16',
    textAlign: 'center',
  },
]

const rows = [
  {
    id: 1,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: (
      <div>
        <span className="navy-60 strike">$ 2399.00</span>
        <br />
        <span className="navy-60">$ 2299.00</span>
      </div>
    ),
    Active: <Icon icon="trash" />,
    Actions: <div className="blue" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } },
  },
  {
    id: 2,
    Name: 'Last Test',
    Address:
      'LongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLong Text',
    Price: (
      <span className="yellow">
        24 <div className="ml1 v-top" />
      </span>
    ),
    Active: <Icon icon="cog" />,
    Actions: <div className="blue" />,
    bgColor: 'danger-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 2 } },
  },
  {
    id: 3,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: (
      <div>
        <span className="navy-60 strike">$ 2399.00</span>
      </div>
    ),
    Active: <Icon icon="copy" />,
    Actions: <div className="blue" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 3 } },
  },
  {
    id: 4,
    Name: 'Last Test',
    Address: 'Just a big street',
    Price: (
      <span className="yellow">
        24 <div className="ml1 v-top" />
      </span>
    ),
    Active: <Icon icon="edit" />,
    Actions: <div className="blue" />,
    bgColor: 'success-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 4 } },
  },
]

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    columns: columns,
    rows: rows,
    selectable: true,
    onChange: (selectedData: number[]) => {
      console.log('Selected rows data: ', selectedData)
    },
  },
  argTypes: {
    emptyText: {
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  rows: undefined,
}

export const Selectable = Template.bind({})
Selectable.args = {
  selectable: true,
  onChange: (selectedRows) => {
    console.log(selectedRows)
  },
}
