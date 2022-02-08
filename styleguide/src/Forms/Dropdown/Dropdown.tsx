import React from 'react'
import Select, {
  components,
  OptionProps,
  GroupTypeBase,
  IndicatorProps,
  ControlProps,
  PlaceholderProps,
  SingleValueProps,
} from 'react-select'
import { Icon as IconComponent } from '../../Icons'
import { InputHelpText } from '../InputHelpText'
import { InputLabel, InputLabelProps } from '../InputLabel'

export const sizeClasses = {
  default: 'h-12',
  small: 'h-8',
  large: 'h-14',
  xlarge: 'h-24',
}

export const variantControlClasses = {
  default: 'border-card-stroke rounded',
  secondary:
    'border-inverted-2 hover:bg-base-3 rounded-md focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:bg-base-1',
}

export const variantValueClasses = {
  default: 'font-normal',
  secondary: 'font-semibold',
}

export const variantSelectedClasses = {
  default: '',
  secondary: 'bg-base-1 shadow-inner',
}

export const variantDisabledClasses = {
  default: 'cursor-not-allowed opacity-70',
  secondary: 'cursor-not-allowed opacity-90 bg-base-4 border-base-4',
}

export const varianErrorClasses = {
  default: 'border-danger rounded',
  secondary: 'border-danger rounded-md',
}

export interface CustomOptionProps {
  value: string | number
  label: string
  icon?: string | undefined
  isDisabled?: boolean | undefined
}

export interface CustomGroupedOptionsProps {
  label: string
  options: CustomOptionProps[]
}

export type DropdownVariant = 'default' | 'secondary'

const {
  Option,
  DropdownIndicator,
  Control,
  GroupHeading,
  Placeholder,
  SingleValue,
} = components

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
      <IconComponent icon="sortDown" size={5} className={indicatorClasses} />
    </DropdownIndicator>
  )
}

const CustomControl = (
  props: React.PropsWithChildren<
    ControlProps<CustomOptionProps, false, GroupTypeBase<CustomOptionProps>>
  >,
  size: keyof typeof sizeClasses,
  variant: DropdownVariant,
  errorMessage?: string
) => {
  const controlClasses = `cursor-pointer transition-all flex itens-center border pl-2 ${
    errorMessage ? varianErrorClasses[variant] : variantControlClasses[variant]
  } ${sizeClasses[size]} ${
    props.menuIsOpen ? variantSelectedClasses[variant] : ''
  } ${props.isDisabled ? variantDisabledClasses[variant] : ''}`
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
  const { isSelected, isDisabled, data } = optionDefaultProps

  const optionClasses = `${
    isSelected && markSelectedOption ? 'text-inverted-1' : 'text-inverted-2 '
  } text-sm first:pt-0 last:pb-0 p-2 ${
    isDisabled
      ? 'opacity-80 cursor-not-allowed'
      : 'hover:bg-transparent hover:text-on-base font-semibold cursor-pointer'
  }`

  return (
    <Option {...optionDefaultProps} className={optionClasses}>
      {data.icon && (
        <IconComponent icon={data.icon} className="mr-2"></IconComponent>
      )}
      {data.label}
    </Option>
  )
}
const formatGroupLabel = (
  data: GroupTypeBase<CustomOptionProps>,
  showGroupLength?: boolean
) => (
  <div className="flex justify-between">
    <span>{data.label}</span>
    {showGroupLength && (
      <span className="bg-base-4 rounded-full w-4 text-center text-black-alpha">
        {data.options.length}
      </span>
    )}
  </div>
)

const CustomGroupHeading = (props: any) => (
  <GroupHeading
    {...props}
    className="p-2 pt-0 pb-3 text-card-stroke uppercase font-bold text-xs"
  />
)

const CustomPlaceholder = (
  props: PlaceholderProps<
    CustomOptionProps,
    false,
    GroupTypeBase<CustomOptionProps>
  >
) => (
  <Placeholder {...props} className="text-f6 tracking-4 w-full pr-2 truncate" />
)

const CustomSingleValue = (
  props: SingleValueProps<CustomOptionProps, GroupTypeBase<CustomOptionProps>>,
  variant: DropdownVariant
) => (
  <SingleValue
    {...props}
    className={`text-f6 tracking-4 text-on-base text-sm truncate ${variantValueClasses[variant]}`}
  />
)

const DropdownComponent = (
  {
    options,
    placeholder,
    isSearchable = false,
    onChange,
    onBlur,
    size = 'default',
    variant = 'default',
    markSelectedOption,
    fixedValue,
    disabled,
    emptyMessage = 'Vazio',
    showGroupLength,
    errorMessage,
    helpText,
    label,
    labelComplement,
    id,
    name,
    required = false,
    defaultValue,
    maxMenuHeight = 300,
    menuPosition = 'absolute',
    menuPlacement = 'auto',
    menuWidth = '100%',
    menuHorizontalPlacement,
  }: DropdownProps,
  ref: React.ForwardedRef<any>
) => {
  const inputId = id || name
  return (
    <div>
      <InputLabel
        label={label}
        labelComplement={labelComplement}
        required={required}
        hasError={!!errorMessage}
        htmlFor={inputId}
        className="mb-1"
      />
      <Select
        ref={ref}
        className={`w-full text-inverted-2`}
        classNamePrefix="select"
        options={options}
        isSearchable={isSearchable}
        value={fixedValue}
        isDisabled={disabled}
        defaultValue={defaultValue}
        formatGroupLabel={(data) => formatGroupLabel(data, showGroupLength)}
        maxMenuHeight={maxMenuHeight}
        menuPortalTarget={document?.body}
        menuPosition={menuPosition}
        menuPlacement={menuPlacement}
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
              width: menuWidth,
              zIndex: 999,
              padding: 20,
              ...(menuHorizontalPlacement &&
                menuHorizontalPlacement === 'left' && { left: 0 }),
              ...(menuHorizontalPlacement &&
                menuHorizontalPlacement === 'right' && { right: 0 }),
            }
          },
          menuPortal: (base) => {
            return { ...base, zIndex: 9999 }
          },
          indicatorSeparator: () => {
            return {}
          },
          groupHeading: () => {
            return {}
          },
          singleValue: () => {
            return {
              maxWidth: 'calc(100% - 6px)',
            }
          },
          input: (base) => {
            return {
              ...base,
              fontSize: '0.875rem',
              letterSpacing: '-0.025rem',
            }
          },
        }}
        placeholder={placeholder}
        noOptionsMessage={() => emptyMessage}
        onChange={(value) => onChange && value && onChange(value)}
        onBlur={(event) => onBlur?.(event)}
        components={{
          Option: (props) => IconOption(props, markSelectedOption),
          DropdownIndicator: (props) => CustomDropdownIndicator(props),
          Control: (props) => CustomControl(props, size, variant, errorMessage),
          GroupHeading: (props) => CustomGroupHeading(props),
          Placeholder: (props) => CustomPlaceholder(props),
          SingleValue: (props) => CustomSingleValue(props, variant),
        }}
      />
      <InputHelpText
        helpText={errorMessage || helpText}
        hasError={!!errorMessage}
        className="mt-2"
      />
    </div>
  )
}

const DropdownWithFowardRef = React.forwardRef(DropdownComponent)
export const Dropdown = React.memo(DropdownWithFowardRef)

export interface DropdownProps {
  /**
   * Options displayed inside dropdown
   * */
  options: CustomOptionProps[] | CustomGroupedOptionsProps[]
  placeholder?: string
  onChange?: (option: CustomOptionProps) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  /**
   * Changes the size of dropdown
   * @default default
   * */
  size?: keyof typeof sizeClasses
  /**
   * Changes the size of dropdown
   * @default default
   * */
  variant?: DropdownVariant
  /**
   * Keep marked the selected option on clicked
   * @default false
   * */
  markSelectedOption?: boolean
  /**
   * A fixed value doenst change and keep selected
   * */
  fixedValue?: CustomOptionProps
  /**
   * Makes the field writeable and return the matched options
   * @default false
   * */
  isSearchable?: boolean
  /**
   * Disable entire dropdown
   * @default false
   * */
  disabled?: boolean
  /**
   * The string showed if the options are empty or search result is empty
   * @default "Vazio"
   * */
  emptyMessage?: string
  /**
   * Must show group length on the group heading
   * */
  showGroupLength?: boolean
  /**
   * Help text
   * */
  label?: string
  labelComplement?: InputLabelProps['labelComplement']
  /** Should display the label above the dropdown
   * @default ''
   * */
  helpText?: string
  /** Should display error state and the message
   * @default ''
   * */
  errorMessage?: string
  /**
   * Requires at least one option marked on dropdown
   * @default false
   * */
  required?: boolean
  /**
   * Initial default value for the dropdown
   * */
  defaultValue?: CustomOptionProps
  /**
   * Max height for the options menu container
   * */
  maxMenuHeight?: number
  /**
   * The CSS position value of the menu, when "fixed" extra layout management is required
   * @default 'absolute'
   * */
  menuPosition?: 'fixed' | 'absolute'
  /**
   * Default placement of the menu in relation to the control. 'auto' will flip when there isn't enough space below the control.
   * @default 'auto'
   * */
  menuPlacement?: 'top' | 'bottom' | 'auto'
  /**
   * Width of menu containing the options
   * @default '100%'
   * */
  menuWidth?: string
  /**
   * Can align the menu in different positions if the menuWidth is bigger than the width of select
   * */
  menuHorizontalPlacement?: 'left' | 'right'
  id?: string
  name?: string
}
