import { Menu as HeadlessMenu, Transition } from '@headlessui/react'
import React from 'react'

type MenuProps = {
  button: React.ReactNode
  children: React.ReactNode
}

export const Menu = ({ button, children }: MenuProps) => {
  return (
    <HeadlessMenu>
      {({ open }) => (
        <div>
          <HeadlessMenu.Button>{button}</HeadlessMenu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="relative"
          >
            <HeadlessMenu.Items className="flex absolute -left-[9rem] flex-col justify-start py-2 mt-5 w-80 bg-white rounded-2xl drop-shadow-lg">
              {children}
            </HeadlessMenu.Items>
          </Transition>
        </div>
      )}
    </HeadlessMenu>
  )
}
