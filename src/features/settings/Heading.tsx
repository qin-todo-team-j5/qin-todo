import clsx from 'clsx'
import React from 'react'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  children: string
}

type HTMLOriginalElement = {
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  label: HTMLLabelElement
}

export const Heading = ({ as = 'h3', children, ...props }: HeadingProps) => {
  type Element = HTMLOriginalElement[typeof as]

  // eslint-disable-next-line react/prop-types
  const { className, ...restProps } = props as Element
  const customClass = clsx('text-sm font-bold text-gray-md', className)

  return React.createElement(
    as,
    { className: customClass, ...restProps },
    children
  )
}
