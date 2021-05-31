import React from 'react'

export const Loading = () => (
  <path
    fill-rule="evenodd"
    d="M9 0h-.25a.75.75 0 000 1.5H9c4.136 0 7.5 3.364 7.5 7.5v.25a.75.75 0 001.5 0V9a9 9 0 00-9-9z"
    clip-rule="evenodd"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 9 9"
      to="360 9 9"
      begin="0s"
      dur="1s"
      repeatCount="indefinite"
    />
  </path>
)
