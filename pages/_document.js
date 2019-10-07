import Document, { Html, Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    const helmet = await Helmet.renderStatic()
    const helmetTags = Object.keys(helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => helmet[el].toComponent())

    const { nextExport = false } = global.__NEXT_DATA__ || {}

    return {
      ...initialProps,
      head: [...initialProps.head, ...helmetTags],
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
      nextExport
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
