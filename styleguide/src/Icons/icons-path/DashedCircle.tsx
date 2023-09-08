import React from 'react'

export const DashedCircle = () => (
  <>
    <g clipPath="url(#a)" fill="none">
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
          d="M6.975.956a8.058 8.058 0 0 1 4.05 0m-9.83 5.679a8.061 8.061 0 0 1 2.024-3.507m0 11.351a8.061 8.061 0 0 1-2.025-3.508m9.83 5.68a8.058 8.058 0 0 1-4.05 0m9.831-5.68a8.062 8.062 0 0 1-2.024 3.507m0-11.35a8.062 8.062 0 0 1 2.024 3.508"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="1.4"
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
