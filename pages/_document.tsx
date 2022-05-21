import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id, en">
        <Head>
          <link href="/fonts/stylesheet.css" rel="stylesheet" />
          <title>Links | Iyan Saputra</title>
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
