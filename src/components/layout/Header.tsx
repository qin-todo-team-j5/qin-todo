import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Avatar } from './Avatar'

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 mx-auto max-w-5xl h-20">
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Qin Todo" width={112} height={24} />
        </a>
      </Link>
      <Avatar />
    </header>
  )
}
