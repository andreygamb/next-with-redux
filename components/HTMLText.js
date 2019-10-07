import React, { Component } from 'react'
import { Router } from 'routes'
import PropTypes from 'prop-types'
import join from 'lodash/join'

export default class extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }

  static defaultProps = {
    component: 'div'
  }

  render() {
    let { text, html, component, paragraphMode, forwardRef, ...props } = this.props

    if (text) {
      if (paragraphMode) {
        html = join(text.split(/(?:\r)?\n/).map(chunk => `<p>\n${chunk}\n</p>\n`), '')
      } else {
        html = text.replace(/(?:\r)?\n/g, '<br/>')
      }
    }

    if (html) {
      return React.createElement(this.props.component, {
        ...props,
        ref: forwardRef,
        onClick: this._handleClick,
        dangerouslySetInnerHTML: { __html: html }
      })
    } else {
      return null
    }
  }

  _handleClick = event => {
    if (event.target.nodeName === 'A') {
      const href = event.target.getAttribute('href')
      const target = event.target.getAttribute('target')

      if (!target && (/^\/[^\/]/.test(href) || href === '/')) {
        event.preventDefault()
        event.stopPropagation()
        Router.pushRoute(href)
      }
    }
  }
}
