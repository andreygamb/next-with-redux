import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import styled, { css } from 'styled-components'

import Root from 'components/Root'
import { media } from 'utils/styles'

export default class extends PureComponent {
  render() {
    return (
      <Root>
        <Layout>
          {/* Header */}
          <Content>{this.props.children}</Content>
          {/* Footer */}
        </Layout>
      </Root>
    )
  }
}

const Layout = styled.div`
  position: relative;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
`
