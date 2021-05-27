import React, { ReactNode } from 'react';
// import {
//   Provider,
//   Button as ReakitButton,
//   ButtonProps as ReakitButtonProps,
// } from 'reakit'
import './../tailwind.css';

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-success shadow-xl rounded-3xl">
      <button>- {children} -</button>
    </div>
  );
};

export interface ButtonProps {
  /** Size of the button
   * @default regular
   * */
  size?: 'regular' | 'large' | 'small';
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary';
  /**
   * Icon of the button
   */
  icon?: ReactNode;
  /**
   * Position of the icon
   * @default start
   */
  iconPosition?: 'start' | 'end';
  /**
   * React children
   * Also support render prop
   */
  children?: React.ReactNode | ((props: ButtonProps) => React.ReactNode);
}
