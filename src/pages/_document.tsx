import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head />
      <body className="text-black dark:text-white bg-white dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
