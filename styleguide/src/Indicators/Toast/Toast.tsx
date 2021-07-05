import React, { useEffect } from 'react'
import { ToastContainer, toast as toastFunc, ToastContent, ToastOptions } from 'react-toastify'
import { injectStyle } from "react-toastify/dist/inject-style"

import './../../tailwind.css'

const contextClass = {
  success: "bg-primary-light border-primary-dark",
  danger: "bg-danger-light border-danger-dark",
  error: "bg-danger-light border-danger-dark",
  info: "bg-info-light border-info",
  warning: "bg-warning-light border-warning-dark",
  default: "bg-success-light border-success",
  dark: "bg-success-light border-success",
}

const Container = () => {
  useEffect(() => {
    injectStyle()
  }, [])

  return (
    <ToastContainer
      toastClassName={(props) => (
        `mb-3 border flex items-center justify-between p-3 pr-4 relative rounded shadow-md text-sm text-on-base ${contextClass[props?.type || "default"]}`
      )}
      bodyClassName={(props) => (
        `${props?.defaultClassName}`
      )}
      progressClassName={(props) => (
        `${props?.defaultClassName} bg-primary-dark`
      )}
      position="top-right"

      // autoClose={false}
    />
  )
}

const notify = (content: ToastContent, options?: ToastOptions) => {
  const type = options?.type || 'success'
  const autoClose = !(typeof options?.autoClose === 'boolean') ? options?.autoClose : options?.autoClose && 5000

  toastFunc(content, {
    ...options,
    type: type,
    autoClose: autoClose,
    // className: 'ba br2 ' + types[type].className,
    // bodyClassName: "f6 lh-copy " + types[type].bodyClassName,
    // progressClassName: types[type].progressClassName,
  })
}

export const Toast = {
  Container,
  notify
}
