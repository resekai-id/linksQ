import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Fragment } from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id, en">
        <Head>
          <link href="/fonts/stylesheet.css" rel="stylesheet" />
          {/* preconnect to analytics domin */}
          <link rel="preconnect" href="https://cdn.splitbee.io" />

          <title>Links | Iyan Saputra</title>
          {process.env.NODE_ENV === 'production' && (
            <Script
              id="splitbee-analytics"
              strategy="lazyOnload"
              async
              defer
              src="https://cdn.splitbee.io/sb.js"
            />
          )}
        </Head>
        <body className="text-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
