import { PlusCircleIcon } from '@heroicons/react/solid'
import React from 'react'

import { Checkbox } from 'src/components/Checkbox'

import { caretColor, textColor, TodoLimitType } from 'src/utils/color'

import { ListItem } from './ListItem'

const title = {
  today: '今日する',
  tomorrow: '明日する',
  next: '今度する',
}

const listItems = [
  {
    id: 1,
    name: 'Prettierのインストール',
  },
  {
    id: 2,
    name: 'eslintのインストール',
  },
]

type ListItemsProps = {
  limit: TodoLimitType
}

export const ListItems = ({ limit }: ListItemsProps) => {
  const [editing, setEditing] = React.useState(false)

  // samples
  // const { listItems } = getTasks(limit)

  const handleClickAddTask = React.useCallback(() => {
    setEditing(!editing)
  }, [editing])

  const handleBlur = React.useCallback(() => {
    listItems.push({ id: listItems.length + 1, name: 'hoge' })
    setEditing(false)
  }, [])

  return (
    <div>
      <h3 className={`mb-4 text-1.5xl font-bold ${textColor(limit)}`}>
        {title[limit]}
      </h3>
      <div>
        {listItems.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
        {editing && (
          <div className="flex items-center">
            <Checkbox
              checked={false}
              setChecked={() => {
                false
              }}
            />
            <input
              className={`focus:outline-none ${caretColor(limit)}`}
              name="newTask"
              onBlur={handleBlur}
            />
          </div>
        )}
        <button
          className="flex items-center w-full h-10 cursor-pointer"
          onClick={handleClickAddTask}
        >
          <PlusCircleIcon className="mr-3 w-6 h-6 text-gray-md" />
          <span className="text-gray-md">タスクを追加する</span>
        </button>
      </div>
    </div>
  )
}
