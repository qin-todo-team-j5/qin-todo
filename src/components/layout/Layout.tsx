import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Header } from './Header'
import { SettingsHeader } from './SettingsHeader'

type Props = {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter()

  return (
    <div>
      {router.pathname.match(/settings/) ? <SettingsHeader /> : <Header />}
      <main>{children}</main>
    </div>
  )
}
