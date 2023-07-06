import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="iPhone" />
        <meta property="og:image" content="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
