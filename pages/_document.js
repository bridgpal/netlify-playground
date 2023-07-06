import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="iPhone" />
        <meta property="og:image" content="https://www.apple.com/v/iphone/home/t/images/home/og.png?201610171354" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
