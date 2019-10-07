import React, { PureComponent } from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import Helmet from 'react-helmet'
import { colors } from 'utils/styles'
import GlobalStyle from 'utils/createGlobalStyle'
import { IconFont } from 'components/Icon'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const title = 'Title'
const description = 'Description'
const defaultImageUrl = ''

export default class extends PureComponent {
  render() {
    return (
      <main>
        <Helmet
          defaultTitle={`${title}`}
          titleTemplate={`%s • ${title}`}
          link={[
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/static/favicon/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon/favicon-16x16.png' },
            {
              rel: 'manifest',
              href: '/static/favicon/site.webmanifest',
              type: 'application/manifest+json',
              crossOrigin: 'use-credentials'
            },
            { rel: 'mask-icon', href: '/static/favicon/safari-pinned-tab.svg', color: colors.background },
            { rel: 'shortcut icon', href: '/static/favicon/favicon.ico' }
          ]}
          meta={[
            { name: 'viewport', content: 'width=device-width, user-scalable=no' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },

            { name: 'msapplication-TileColor', content: colors.background },
            { name: 'msapplication-config', content: '/static/favicon/browserconfig.xml' },
            { name: 'theme-color', content: colors.background },

            { name: 'description', content: description },

            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: title },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: defaultImageUrl },
            {
              property: 'og:image:width',
              content: '1200'
            },
            {
              property: 'og:image:height',
              content: '630'
            },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: defaultImageUrl }
          ]}
        />
        {GlobalStyle()}
        {IconFont()}
        {this.props.children}
      </main>
    )
  }
}
