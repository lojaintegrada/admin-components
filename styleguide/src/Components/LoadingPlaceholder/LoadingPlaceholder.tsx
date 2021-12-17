import React from 'react'

const LoadingPlaceholderComponent = ({
  className = '',
}: LoadingPlaceholderProps) => {
  return (
    <div className={`animate-pulse flex ${className}`}>
      <div className="h-4 bg-inverted-2 bg-opacity-20 rounded w-full max-w-full"></div>
    </div>
  )
}

export const LoadingPlaceholder = React.memo(LoadingPlaceholderComponent)

export interface LoadingPlaceholderProps {
  className?: string
}
