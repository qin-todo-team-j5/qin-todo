import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

type MenuItemProps = {
  buttonProps?: React.HTMLAttributes<HTMLButtonElement>
  children: React.ReactNode
  leftIcon?: React.ReactNode
}

export const MenuItem = ({
  buttonProps,
  children,
  leftIcon,
}: MenuItemProps) => {
  const { className, ...props } = buttonProps || {}

  const customClass = React.useCallback((active: boolean) => {
    return clsx(
      'flex items-center px-6 h-11 font-bold text-left cursor-pointer',
      active && 'bg-slate-100',
      className && className
    )
  }, [])

  return (
    <Menu.Item>
      {({ active }) => (
        <button className={customClass(active)} {...props}>
          {leftIcon && <span className="mr-3">{leftIcon}</span>}
          {children}
        </button>
      )}
    </Menu.Item>
  )
}
