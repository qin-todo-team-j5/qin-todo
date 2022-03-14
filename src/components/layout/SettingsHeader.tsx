import { ChevronLeftIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'

const title = {
  '/settings': '設定',
  '/settings/profile': 'プロフィール',
  '/settings/account': 'アカウント',
  '/settings/theme': 'テーマ',
} as { [key: string]: string }

export const SettingsHeader = () => {
  const router = useRouter()

  const handleClickCancel = React.useCallback(() => {
    router.push('/')
  }, [router])

  const handleClickBack = React.useCallback(() => {
    router.back()
  }, [router])

  return (
    <header className="flex justify-between items-center p-5 mx-auto max-w-5xl h-20">
      {router.pathname === '/settings' ? (
        <XIcon className="w-6 h-6 cursor-pointer" onClick={handleClickCancel} />
      ) : (
        <ChevronLeftIcon
          className="w-6 h-6 cursor-pointer"
          onClick={handleClickBack}
        />
      )}
      <h1 className="text-lg font-bold">{title[router.pathname]}</h1>
      <span />
    </header>
  )
}
