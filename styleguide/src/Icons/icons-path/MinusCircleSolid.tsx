import React from 'react'

export const MinusCircleSolid = () => (
  <>
    <g clipPath="url(#a)">
      <mask
        id="b"
        width="18"
        height="18"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path d="M18 0H0v18h18V0Z" fill="#fff" />
      </mask>
      <g mask="url(#b)">
        <path
          d="M4.125 1.507A8.775 8.775 0 0 1 9 .028a8.784 8.784 0 0 1 8.775 8.775 8.775 8.775 0 1 1-13.65-7.296Zm.825 7.971h8.1v-1.35h-8.1v1.35Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h18v18H0z" fill="none" />
      </clipPath>
    </defs>
  </>
)
