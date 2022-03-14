export type ThemeLists = {
  name: string
  theme: 'system' | 'light' | 'dark'
}

export const themeLists: ThemeLists[] = [
  {
    name: 'OSの設定に合わせる',
    theme: 'system',
  },
  {
    name: 'ライト',
    theme: 'light',
  },
  {
    name: 'ダーク',
    theme: 'dark',
  },
]
