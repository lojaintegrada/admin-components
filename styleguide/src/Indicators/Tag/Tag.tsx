import React from 'react'

const TagTypes = {
  neutral: 'bg-base-1 border-inverted-2',
  primary: 'bg-primary-light border-primary',
  danger: 'bg-danger-light border-danger',
  success: 'bg-success-light border-success',
  warning: 'bg-warning-light border-warning',
}

const TagComponent = ({
  type = 'neutral',
  content,
  fullWidth = false,
  className = '',
  action,
}: TagProps) => {
  return (
    <div
      className={`tag ${
        fullWidth ? 'flex' : 'inline-flex'
      } items-center justify-between border rounded px-4 py-2 tracking-4 leading-6 text-f6 text-primary-bold ${
        TagTypes[type]
      } ${className}`}
    >
      <div className="min-w-0 break-words -my-px">{content}</div>
      {action && <div className="-my-px ml-3">{action}</div>}
    </div>
  )
}

export const Tag = React.memo(TagComponent)

export interface TagProps {
  /** Tag color
   * @default neutral
   * */
  type?: keyof typeof TagTypes
  /**
   * Tag content
   * */
  content: string | React.ReactNode
  /**
   * Enlarge width of the Tag
   * */
  fullWidth?: boolean
  /** Adittional classes for Tag
   * @default ''
   * */
  className?: string
  /**
   * Action for the tag, like an button or icon
   * */
  action: React.ReactNode
}
