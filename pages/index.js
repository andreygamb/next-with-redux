import 'isomorphic-unfetch'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Layout from 'components/Layout'
import Title from 'components/Title'
import { Container, media } from 'utils/styles'

export default class extends Component {
  static async getInitialProps({ store, req }) {}

  static contextTypes = {
    locale: PropTypes.string,
    data: PropTypes.object,
    router: PropTypes.object
  }

  render() {
    const route = this.context.router.route
    const locale = this.context.locale === 'ru' ? 'en' : 'ru'
    const href = `/${locale}`.concat(route !== '/' ? route : '')
    return (
      <Layout>
        <Container>
          <a href={href}>{locale.toUpperCase()}</a>
          <Title>{this.context.data.title}</Title>
        </Container>
      </Layout>
    )
  }
}
