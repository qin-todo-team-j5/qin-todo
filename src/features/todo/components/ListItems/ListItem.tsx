import React from 'react'

import { Checkbox } from 'src/components/Checkbox'

type ListItemProps = {
  item: {
    id: number
    name: string
  }
}

export const ListItem = ({ item }: ListItemProps) => {
  const [addTask, setAddTask] = React.useState(false)

  return (
    <Checkbox checked={addTask} setChecked={setAddTask}>
      {item.name}
    </Checkbox>
  )
}
