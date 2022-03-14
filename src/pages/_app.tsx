import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
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
    <ThemeProvider defaultTheme="system" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
