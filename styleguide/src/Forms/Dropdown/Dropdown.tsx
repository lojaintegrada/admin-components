import React from 'react'
import Select, {
  components,
  OptionProps,
  GroupTypeBase,
  IndicatorProps,
  ControlProps,
} from 'react-select'
import { Icon as IconComponent } from '../../Icons'

export const variantClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}

export interface CustomOptionProps {
  value: string
  label: string
  icon?: string | undefined
  isDisabled?: boolean | undefined
}

const { Option, DropdownIndicator, Control } = components

const CustomDropdownIndicator = (
  props: React.PropsWithChildren<
    IndicatorProps<CustomOptionProps, false, GroupTypeBase<CustomOptionProps>>
  >
) => {
  const { selectProps } = props

  const indicatorClasses = `transform transition duration-200 ${
    selectProps.menuIsOpen ? 'rotate-180' : 'rotate-0'
  } text-inverted-2`

  return (
    <DropdownIndicator {...props} className="mr-1">
      <IconComponent
        icon="arrowDropDown"
        size={3}
        className={indicatorClasses}
      />
    </DropdownIndicator>
  )
}

const CustomControl = (
  props: React.PropsWithChildren<
    ControlProps<CustomOptionProps, false, GroupTypeBase<CustomOptionProps>>
  >,
  variant: keyof typeof variantClasses
) => {
  const controlClasses = `flex itens-center border rounded border-card-stroke ${variantClasses[variant]}`
  return <Control {...props} className={controlClasses} />
}

const IconOption = (
  optionDefaultProps: OptionProps<
    CustomOptionProps,
    false,
    GroupTypeBase<CustomOptionProps>
  >,
  markSelectedOption?: boolean
) => {
  const { isSelected, data } = optionDefaultProps

  const optionClasses = `${
    isSelected && markSelectedOption ? 'text-inverted-1' : 'text-inverted-2 '
  } hover:bg-transparent hover:text-on-base font-semibold p-2 cursor-pointer text-sm first:pt-0 last:pb-0`

  return (
    <Option {...optionDefaultProps} className={optionClasses}>
      {data.icon && (
        <IconComponent icon={data.icon} className="mr-2"></IconComponent>
      )}
      {data.label}
    </Option>
  )
}
const DropdownComponent = ({
  options,
  placeholder,
  isSearchable = false,
  onChange,
  variant = 'default',
  markSelectedOption,
  fixedValue,
  disabled,
  emptyMessage,
}: DropdownProps) => {
  return (
    <>
      <Select
        className="w-full text-inverted-2 cursor-pointer"
        classNamePrefix="select"
        options={options}
        isSearchable={isSearchable}
        value={fixedValue}
        isDisabled={disabled}
        noO
        styles={{
          option: () => {
            return {}
          },
          control: () => {
            return {}
          },
          menu: (base) => {
            return {
              ...base,
              padding: 20,
            }
          },
          indicatorSeparator: () => {
            return {}
          },
        }}
        placeholder={placeholder}
        noOptionsMessage={() => emptyMessage || 'Vazio'}
        onChange={(value) => onChange && value && onChange(value)}
        components={{
          Option: (props) => IconOption(props, markSelectedOption),
          DropdownIndicator: (props) => CustomDropdownIndicator(props),
          Control: (props) => CustomControl(props, variant),
        }}
      />
    </>
  )
}

const DropdownWithFowardRef = React.forwardRef(DropdownComponent)
export const Dropdown = React.memo(DropdownWithFowardRef)

export interface DropdownProps {
  /**
   * Options displayed inside dropdown
   * */
  options: CustomOptionProps[]
  placeholder?: string
  onChange?: (option: CustomOptionProps) => void
  variant?: keyof typeof variantClasses
  /**
   * Keep marked the selected option on clicked
   * */
  markSelectedOption?: boolean
  /**
   * A fixed value doenst change and keep selected
   * */
  fixedValue?: CustomOptionProps
  /**
   * Makes the field writeable and return the matched options
   * */
  isSearchable?: boolean
  disabled?: boolean
  /**
   * The string showed if the options are empty or search result is empty
   * */
  emptyMessage?: string
}
