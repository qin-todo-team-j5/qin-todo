import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

import { Heading } from './Heading'

const SettingsList = ({
  children,
  href,
  theme,
  external = false,
}: {
  children: string
  href: string
  theme?: string
  external?: boolean
}) => {
  return (
    <li className="flex items-center h-12 font-bold">
      <Link href={href}>
        <a
          className="flex justify-between items-center w-full"
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          <span>{children}</span>
          <span className="flex items-center">
            {theme}
            {external ? (
              <ExternalLinkIcon className="w-5 h-5 text-gray-md" />
            ) : (
              <ChevronRightIcon className="ml-6 w-5 h-5 text-gray-md" />
            )}
          </span>
        </a>
      </Link>
    </li>
  )
}

export const Settings = () => {
  const theme = 'OSの設定に合わせる'
  return (
    <div className="px-9 mx-auto max-w-2xl">
      <ul className="mt-6 mb-9">
        <Heading>設定</Heading>
        <SettingsList href="/settings/profile">プロフィール</SettingsList>
        <SettingsList href="/settings/account">アカウント</SettingsList>
        <SettingsList href="/settings/theme" theme={theme}>
          テーマ
        </SettingsList>
      </ul>
      <ul className="mt-6 mb-9">
        <Heading>サポート</Heading>
        <SettingsList href="/">プライバシーポリシー</SettingsList>
        <SettingsList href="/">利用規約</SettingsList>
        <SettingsList href="/" external>
          お問い合わせ
        </SettingsList>
      </ul>
    </div>
  )
}
