import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Table, TableProps } from './Table'

const Link = (props: any) => {
  return (
    <a href="#a" className={props.className}>
      {props.children}
    </a>
  )
}

const columns = [
  {
    id: 'Name',
    label: 'Name',
    cellWrapper: Link
  },
  {
    id: 'Address',
    label: 'Address',
    cellWrapper: Link
  },
  {
    id: 'Price',
    label: <small>KA</small>,
    textAlign: 'center',
    size: 15,
    cellWrapper: Link
  },
  {
    id: 'Count',
    label: 'Count',
    size: 10,
    cellWrapper: Link
  },
  {
    id: 'Active',
    label: 'Active',
    size: 10,
    textAlign: 'center'
  },
  {
    id: 'Actions',
    label: '',
    size: 7,
    textAlign: 'center'
  }
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
    Active: <input />,
    Actions: <div className="blue" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 1 } }
  },
  {
    id: 2,
    Name: 'Last Test',
    Address: 'Just a big street',
    Price: (
      <span className="yellow">
        24 <div className="ml1 v-top" />
      </span>
    ),
    Active: <input />,
    Actions: <div className="blue" />,
    bgColor: 'danger-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 2 } }
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
    Active: <input />,
    Actions: <div className="blue" />,
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 3 } }
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
    Active: <input />,
    Actions: <div className="blue" />,
    bgColor: 'success-light',
    cellWrapperProps: { page: 'admin/settings/view', params: { file_name: 4 } }
  }
]

const selectableData = [
  {
    id: 1,
    Name: 'Example Test',
    Address: 'Street of Test',
    City: 'Example Town',
    Count: 245,
    Price: '2399.00',
  },
  {
    id: 2,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: 24,
  },
  {
    id: 3,
    Name: 'Example Test',
    Address: 'Street of Test',
    Count: 245,
    Price: '2399.00'
  },
  {
    id: 4,
    Name: 'Last Test',
    Address: 'Just a big street',
    Count: 24,
  }
]

export default {
  title: 'Components/Table',
  component: Table,
  args: {
    columns: columns,
    rows: rows,
    data: selectableData,
    selectable: true,
    onChange: (selectedData: any) => {
      console.log('Selected rows data: ', selectedData)
    }
  },
} as Meta

const Template: Story<TableProps> = args => <Table {...args} />

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  // size: 'large',
  // children: 'Large Button',
}
