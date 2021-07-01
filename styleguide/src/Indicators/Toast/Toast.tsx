import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

import './../../tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

const Container = () => {
  return (
    <ToastContainer />
  )
}

const notify = (text: string, options: any) => {
  // const type = options?.type || 'success'
  console.log('AAAAAA')
  const autoClose = !(typeof options.autoClose === 'boolean') ? options.autoClose : options.autoClose === true && 5000

  toast(text, {
    toastId: options.toastId || null,
    // className: 'ba br2 ' + types[type].className,
    // bodyClassName: "f6 lh-copy " + types[type].bodyClassName,
    // progressClassName: types[type].progressClassName,
    type: options.type,
    position: options.position || 'top-right',
    autoClose: autoClose,
    draggable: options.draggable && options.draggable === false ? false : true,
    pauseOnHover: options.pauseOnHover && options.pauseOnHover === false ? false : true,
    onClose: options.onClose || null
  })
}

export const Toast = {
  Container,
  notify
}

export interface ToastProps {
  /**
   * Status additional text
   * */
  text?: string
  /**
   * Status additional text
   * */
  options?: any
}
