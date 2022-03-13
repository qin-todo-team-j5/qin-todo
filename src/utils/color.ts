import clsx from 'clsx'

export const todoLimit = ['today', 'tomorrow', 'next'] as const

export type TodoLimitType = typeof todoLimit[number]

export const textColor = (limit: TodoLimitType) => {
  return clsx(
    limit === 'today' && 'text-today',
    limit === 'tomorrow' && 'text-tomorrow',
    limit === 'next' && 'text-next'
  )
}

export const backgroundColor = (limit: TodoLimitType) => {
  return clsx(
    limit === 'today' && 'bg-today',
    limit === 'tomorrow' && 'bg-tomorrow',
    limit === 'next' && 'bg-next'
  )
}

export const caretColor = (limit: TodoLimitType) => {
  return clsx(
    limit === 'today' && 'caret-today',
    limit === 'tomorrow' && 'caret-tomorrow',
    limit === 'next' && 'caret-next'
  )
}
