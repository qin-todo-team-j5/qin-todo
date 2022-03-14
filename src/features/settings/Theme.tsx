import { CheckIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import React from 'react'

import { themeLists, ThemeLists } from 'src/utils/theme'

const ThemeList = ({
  checked,
  list,
}: {
  checked?: boolean
  list: ThemeLists
}) => {
  const { setTheme } = useTheme()

  const handleClickTheme = React.useCallback(() => {
    if (checked) {
      return
    }

    if (localStorage.getItem('theme') !== list.theme) {
      setTheme(list.theme)
    }
  }, [checked, list])

  return (
    <li
      className="flex justify-between items-center h-12 font-bold cursor-pointer"
      onClick={handleClickTheme}
    >
      <span>{list.name}</span>
      {checked && <CheckIcon className="w-6 h-6 text-blue-500" />}
    </li>
  )
}

export const Theme = () => {
  const { theme } = useTheme()

  return (
    <div className="px-9 mx-auto max-w-2xl">
      <ul className="mt-6 mb-9">
        {themeLists.map(list => (
          <ThemeList
            key={list.name}
            list={list}
            checked={theme === list.theme}
          />
        ))}
      </ul>
    </div>
  )
}
