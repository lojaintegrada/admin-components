import React, { useEffect } from 'react'
import {
  ToastContainer,
  toast as showToast,
  ToastContent,
  ToastOptions,
} from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { Icon } from '../../Icons'

const contextClass = {
  success: 'bg-primary-light border-primary-dark',
  error: 'bg-danger-light border-danger-dark',
  info: 'bg-secondary-light border-secondary',
  warning: 'bg-warning-light border-warning-dark',
  default: '',
  dark: '',
}

const progressClassName = {
  success: '!bg-primary-dark',
  error: '!bg-danger-dark',
  info: '!bg-secondary-dark',
  warning: '!bg-warning-dark',
  default: '',
  dark: '',
}

const Container = () => {
  useEffect(() => {
    injectStyle()
  }, [])

  return (
    <ToastContainer
      toastClassName={(props) =>
        `mb-3 border flex items-top justify-between p-3 pb-4 pr-4 relative rounded shadow-md ${
          contextClass[props?.type || 'info']
        }`
      }
      bodyClassName={() => `max-w-[95%] text-sm text-on-base break-words`}
      progressClassName={(props) =>
        `${props?.defaultClassName} !h-1 ${
          progressClassName[props?.type || 'info']
        }`
      }
      closeButton={
        <div className="-mt-3 -mr-2 cursor-pointer text-on-base hover:text-on-base-2">
          <Icon icon="close" size={3} />
        </div>
      }
      position="top-right"
    />
  )
}

const notify = (content: ToastContent, options?: ToastOptions) => {
  const type = options?.type || 'info'
  const autoClose = !(typeof options?.autoClose === 'boolean')
    ? options?.autoClose
    : options?.autoClose && 5000

  showToast(content, {
    ...options,
    type: type,
    autoClose: autoClose,
  })
}

export const Toast = {
  Container,
  notify,
}
