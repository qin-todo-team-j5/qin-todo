import { CogIcon, LogoutIcon } from '@heroicons/react/outline'

import Image from 'next/image'

import { Menu, MenuItem } from '../Menu'

export const Avatar = () => {
  return (
    <Menu
      button={<Image src="/mypage.png" alt="avatar" width={36} height={36} />}
    >
      <MenuItem leftIcon={<CogIcon className="w-6 h-6" />}>設定</MenuItem>
      <MenuItem
        leftIcon={<LogoutIcon className="w-6 h-6 text-red-500" />}
        buttonProps={{ className: 'text-red-500' }}
      >
        ログアウト
      </MenuItem>
    </Menu>
  )
}
