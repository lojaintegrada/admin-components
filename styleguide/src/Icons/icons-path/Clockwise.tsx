import React from 'react'

export const Clockwise = () => (
  <>
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      clipPath="url(#a)"
      fill="none"
    >
      <path d="M9 5.625V9l2.813 1.688m1.124-3.376h2.813V4.5" />
      <path d="M13.247 13.5a6.188 6.188 0 1 1 .129-8.876c.827.839 1.51 1.629 2.374 2.689" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </>
)
