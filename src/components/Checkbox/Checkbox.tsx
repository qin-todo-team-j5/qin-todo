import { Switch } from '@headlessui/react'
import { DuplicateIcon, TrashIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import React from 'react'

type CheckBoxProps = {
  children?: React.ReactNode
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const Checkbox = ({ children, checked, setChecked }: CheckBoxProps) => {
  const handleClickDuplicate = React.useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation()
      console.log('duplicate')
    },
    []
  )

  const handleClickTrash = React.useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.stopPropagation()
      console.log('trash')
    },
    []
  )

  return (
    <Switch
      as="div"
      role="checkbox"
      checked={checked}
      onChange={setChecked}
      className="group flex items-center h-10 cursor-pointer"
    >
      <div>
        <div className="relative mr-3 w-6 h-6 rounded-full border-2 border-gray-md">
          <div
            className={clsx(
              'absolute top-0.5 left-0.5 w-4 h-4 rounded-full',
              checked && 'bg-today'
            )}
          />
        </div>
      </div>
      {children && (
        <div className="flex justify-between items-center space-x-16 max-w-full">
          <label
            className={clsx('w-full', checked && 'text-gray-md line-through')}
          >
            {children}
          </label>
          <div className="hidden group-hover:flex items-center text-gray-md">
            <DuplicateIcon
              className="inline w-6 h-6"
              onClick={e => handleClickDuplicate(e)}
            />
            <TrashIcon className="w-6 h-6" onClick={e => handleClickTrash(e)} />
          </div>
        </div>
      )}
    </Switch>
  )
}
