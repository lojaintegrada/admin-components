import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sidebar } from './index';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Default: Story = () => {
  return (
    <>
      <Sidebar />
      <link
        rel="stylesheet"
        href="https://cdn.awsli.com.br/qa1/static-v2/painel/css/admin.css?v=c2e27d9"
      />
    </>
  );
};
