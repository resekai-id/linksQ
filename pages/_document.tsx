import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id, en">
        <Head>
          <link href="/fonts/stylesheet.css" rel="stylesheet" />
          <title>Links | Iyan Saputra</title>
          {process.env.NODE_ENV === 'production' && (
            <Fragment>
              <script
                async
                defer
                data-website-id="9f0b070d-e128-4eb4-9b4a-984b02b01c08"
                src="https://analytics.iyansr.id/umami.js"
              ></script>
            </Fragment>
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
