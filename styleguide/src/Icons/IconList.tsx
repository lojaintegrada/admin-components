import React from 'react'
import { Icon as IconComponent } from './Icon'
import { icons } from './icons-path'

const IconsList = () => {
  return (
    <>
      <div className="text-f6 mb-10">
        There are {Object.keys(icons).length} icons
      </div>
      <ul className="grid grid-cols-6 gap-4 list-none">
        {(Object.keys(icons) as Array<keyof typeof icons>).map((key) => (
          <li key={key} className="flex items-center min-w-0 group">
            <div className="shrink-0 border border-transparent group-hover:border-card-stroke rounded flex">
              <IconComponent icon={key} />
            </div>
            <div className="ml-4 overflow-hidden text-ellipsis min-w-0 text-f6">
              {key}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IconsList
