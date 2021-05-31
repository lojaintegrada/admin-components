import React from 'react'
import { Meta } from '@storybook/react'
import { Icon as IconComponent } from './Icon'
import { icons } from './icons-path'

export default {
  title: 'Icons',
  component: IconComponent,
} as Meta

export const Example = (args: any) => <IconComponent {...args} />;
Example.args = { icon: 'cog' };

export const IconsList = () => {
  return (
    <>
      <div className="text-center">There are {Object.keys(icons).length} icons</div>
      <ul className="grid grid-cols-7 gap-4 list-none">
        {(Object.keys(icons) as Array<keyof typeof icons>).map((key) => (
          <li key={key} className="flex items-center py-4">
            <IconComponent icon={key} />
            <div className="pl-2">{key}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
