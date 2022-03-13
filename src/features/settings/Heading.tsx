import clsx from 'clsx'
import React from 'react'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: string
}

export const Heading = ({ children, ...props }: HeadingProps) => {
  // eslint-disable-next-line react/prop-types
  const { className, ...restProps } = props
  const customClass = clsx('text-sm font-bold text-gray-md', className)

  return (
    <h3 className={customClass} {...restProps}>
      {children}
    </h3>
  )
}
