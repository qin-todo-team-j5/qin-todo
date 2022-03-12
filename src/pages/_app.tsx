import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from 'react'

import { useUser } from 'src/hooks'

import { Layout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { authStateChange } = useUser()

  React.useEffect(() => {
    authStateChange()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
