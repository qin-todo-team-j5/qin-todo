import { PlusCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const title = {
  today: '今日する',
  tomorrow: '明日する',
  next: '今度する',
}

type ListItemsProps = {
  limit: 'today' | 'tomorrow' | 'next'
}

export const ListItems = ({ limit }: ListItemsProps) => {
  const handleClickAddTask = React.useCallback(() => {
    console.log('add task')
  }, [])

  return (
    <div>
      <h3 className={`mb-4 text-1.5xl font-bold text-${limit}`}>
        {title[limit]}
      </h3>
      <div>
        {/* {listItems.map(item => <ListItem key={item} item={item} />)} */}
        <button
          className="flex items-center w-full h-10"
          onClick={handleClickAddTask}
        >
          <PlusCircleIcon className="mr-3 w-7 h-7 text-gray-md" />
          <span className="text-gray-md">タスクを追加する</span>
        </button>
      </div>
    </div>
  )
}
