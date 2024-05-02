import React from 'react'

export const Stepper: React.FC<StepperProps> = React.memo(
  ({ className = '', currentStep = 0, steps = [], showText = false }) => {
    const getColors = (step: number) => {
      if (currentStep > step) return 'bg-primary border-primary'
      if (currentStep === step) return 'bg-inverted-1 border-inverted-1'
      return 'bg-base-4 border-base-4'
    }
    return (
      <div
        className={`w-full flex flex-row justify-center gap-x-10 mb-6 relative ${className}`}
        id="stepsContainer"
      >
        {steps.map((item, index) => {
          return (
            <div
              key={item.step}
              id={`step${item.step}`}
              className="flex flex-row items-center gap-y-2.5 gap-x-3.5 z-10 relative"
            >
              {!showText && index > 0 && (
                <div
                  id={`leftLinkStep${item.step}`}
                  className={`w-5 h-0.5 absolute -left-5 ${
                    currentStep >= item.step ? 'bg-primary' : 'bg-base-4'
                  }`}
                />
              )}
              <div
                id={`stepCircle${item.step}`}
                className={`flex w-8 h-8 rounded-full border-2 justify-center items-center text-base-1
                  ${getColors(item.step)}
                  ${item.customClassName}`}
              >
                <span
                  onClick={() => item.handleClick?.()}
                  className={`font-bold ${
                    item.handleClick ? 'cursor-pointer' : ''
                  }`}
                >
                  {item.step}
                </span>
              </div>
              {showText && (
                <span
                  onClick={() => item.handleClick?.()}
                  className={`text-center my-auto text-sm ${showText ? '' : ''}
                  ${item.step < 2 ? 'cursor-pointer' : ''}
                  ${currentStep === item.step ? 'font-bold' : ''}`}
                >
                  {item.text}
                </span>
              )}
              {!showText && index < steps.length - 1 && (
                <div
                  id={`rightLinkStep${item.step}`}
                  className={`w-5 h-0.5 absolute -right-5 ${
                    currentStep > item.step ? 'bg-primary' : 'bg-base-4'
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }
)

type StepType = {
  step: number
  text?: string
  handleClick?: Function
  customClassName?: string
}

export interface StepperProps {
  /**
   * Custom class name
   * */
  className?: string
  /**
   * Current page step
   * */
  currentStep: number
  /**
   * Array of steps containing the step number (1, 2, 3, ..., n),
   * text with step's title (optional) and a handler for the
   * step's click (optional)
   * */
  steps: StepType[]
  /**
   * Shows step text instead of linking lines
   * */
  showText?: boolean
  /**
   * Function to handle step click
   * */
}
