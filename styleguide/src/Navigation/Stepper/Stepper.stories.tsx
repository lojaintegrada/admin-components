import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Stepper, StepperProps } from '.'

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  }
} as Meta

const Template: Story<StepperProps> = args => <Stepper {...args} />

export const Default = Template.bind({})
Default.args = {
  steps: [
    {step: 1, text: 'Step 1'},
    {step: 2, text: 'Step 2'},
    {step: 3, text: 'Step 3'}
  ],
  currentStep: 2
}

export const NoText = Template.bind({})
NoText.args = {
  steps: [
    {step: 1, text: 'Step 1'},
    {step: 2, text: 'Step 2'},
    {step: 3, text: 'Step 3'}
  ],
  currentStep: 2,
  showText: false
}

export const WithText = Template.bind({})
WithText.args = {
  steps: [
    {step: 1, text: 'Step 1'},
    {step: 2, text: 'Step 2'},
    {step: 3, text: 'Step 3'}
  ],
  currentStep: 2,
  showText: true
}

export const HandleClick = Template.bind({})
HandleClick.args = {
  steps: [
    {step: 1, text: 'Step 1', handleClick: () => alert(`Clicked on step 1!`)},
    {step: 2, text: 'Step 2', handleClick: () => alert(`Clicked on step 2!`)},
    {step: 3, text: 'Step 3', handleClick: () => alert(`Clicked on step 3!`)}
  ],
  currentStep: 2,
  showText: false,
}

export const CustomStepClassName = Template.bind({})
CustomStepClassName.args = {
  steps: [
    {step: 1, text: 'Step 1', customClassName: '!text-primary !bg-primary-light !border-primary'},
    {step: 2, text: 'Step 2', customClassName: '!text-warning !bg-warning-light !border-warning'},
    {step: 3, text: 'Step 3', customClassName: '!text-danger !bg-danger-light !border-danger'}
  ],
  currentStep: 2,
  showText: false
}