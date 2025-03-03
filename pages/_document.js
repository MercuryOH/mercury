import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styleTags} </Head>
        <script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
