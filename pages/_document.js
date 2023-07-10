import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body class="bg-[url('/minimal.png')] bg-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
