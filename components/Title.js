import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import { fonts, media, onlyMobile, onlyDesktop } from 'utils/styles'

export default class extends PureComponent {
  render() {
    const title = this.props.title || this.props.children
    return title ? (
      <Title textLeft={this.props.textLeft} onlyMobile={this.props.onlyMobile} onlyDesktop={this.props.onlyDesktop}>
        {title}
      </Title>
    ) : null
  }
}

const Title = styled.div`
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  line-height: 34px;

  ${media.desktop`
    padding: 6px 0;
    font-size: 80px;
    line-height: 97px;
  `};

  ${props =>
    props.textLeft &&
    css`
      text-align: left;
    `};

  ${props =>
    props.onlyDesktop &&
    css`
      ${onlyDesktop}
    `};

  ${props =>
    props.onlyMobile &&
    css`
      ${onlyMobile}
    `};
`
