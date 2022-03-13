import { ListItems } from './ListItems'

const todoLimit = ['today', 'tomorrow', 'next'] as const

export const Todo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-6 mx-auto mt-10 max-w-7xl md:grid-cols-3">
      {todoLimit.map(limit => (
        <ListItems key={limit} limit={limit} />
      ))}
    </div>
  )
}
