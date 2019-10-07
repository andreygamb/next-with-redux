import React, { Component } from 'react'
import styled from 'styled-components'
import HTTPStatus from 'http-status'
import Helmet from 'react-helmet'
import Layout from 'components/Layout'
import { media } from 'utils/styles'

export default class extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props
    const title = statusCode === 404 ? 'Страница не найдена' : HTTPStatus[statusCode] || 'Ошибка сервера'

    return (
      <Layout
        headerOptions={{ withDesktopBorder: true, withMobileBorder: true, backgroundColor: 'transparent' }}
        isErrorPage>
        <Helmet title={title} />
        <Content>
          <Container>
            {statusCode && <Code>{statusCode}</Code>}
            <Title>{title}</Title>
          </Container>
        </Content>
      </Layout>
    )
  }
}

const Container = styled.div`
  text-align: center;
  text-transform: uppercase;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  margin: 50px 0 70px;

  ${media.desktop`
    margin: 0;
    margin-bottom: 100px;
  `};
`

const Code = styled.h1`
  font-size: 100px;
  line-height: 120%;
`

const Title = styled.div`
  font-size: 15px;
  line-height: 20px;

  ${media.desktop`
    font-size: 43px;
    line-height: 52px;
  `};
`
