import React, {useState, ChangeEvent} from 'react'

const ToggleButtonComponent =(
  {children, disabled, onChange,...props}: ToggleButtonProps, 
  ref: React.ForwardedRef<HTMLInputElement>) => {

  const childrens = children || [];
    
  const [checked, setChecked] = useState('toggle-btn-0');

  const toggleClasses = disabled? 
    `pointer-events-none bg-base-3 border-card-stroke text-on-base-2 font-semibold`: 
    `peer-checked:bg-primary peer-checked:border-primary peer-checked:text-base-1 text-primary`;


  const isChecked = (value: string): boolean => checked === value;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.currentTarget.value);
    onChange && onChange(e);
  }

  const ToggleButtonItems =  childrens.map((item, index)=> { 
    const borderRadius = (index === 0? 'rounded-l':((childrens.length - 1) === index ? 'border-r rounded-r':'') );
    return (
      <li key={`toggle-btn-[${index}]`} className='inline-flex justify-center items-center h-12'>
        <label htmlFor='toggle-btn' className='relative inline-flex justify-center items-center h-12'  >
          <input   
            className='peer absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0 z-20'
            type="radio" 
            value={`toggle-btn-${index}`} 
            checked = {isChecked(`toggle-btn-${index}`)} 
            onChange = {handleChange}
            {...props}
            />
          <span className={`${toggleClasses} inline-flex justify-center items-center ${borderRadius} py-4 px-6 border-y border-l h-12`}>
            {item}
          </span> 
        </label>
      </li> 
    )})

  return (
      <div className={`inline-flex justify-center items-center h-12 ${toggleClasses}} rounded`} ref={ref}>
        <ul className='list-none inline-flex justify-center items-center h-12 '>
          {ToggleButtonItems}
        </ul> 
      </div>
  )
}

const ToggleWithForwardRef = React.forwardRef(ToggleButtonComponent);
export const ToggleButton = React.memo(ToggleWithForwardRef);

export interface ToggleButtonProps extends React.InputHTMLAttributes<HTMLInputElement>{
  children?: string[] | JSX.Element[] 
}
