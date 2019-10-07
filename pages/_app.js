import 'isomorphic-unfetch'
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from 'next/app'
import { withRouter } from 'next/router'
import withRedux from 'utils/withRedux'

import ruData from 'data/ruData'
import enData from 'data/enData'

import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

@withRedux
@withRouter
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
      locale: ctx.query.locale
    }
  }

  static childContextTypes = {
    locale: PropTypes.string,
    data: PropTypes.object,
    router: PropTypes.object
  }

  getChildContext() {
    const { locale, router } = this.props
    let data = {}
    switch (locale) {
      case 'en':
        data = enData
        break
      case 'ru':
      default:
        data = ruData
    }
    return { locale, data, router }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
