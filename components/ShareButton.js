import React, { Component } from 'react'
import openPopup from 'utils/openPopup'
import extend from 'lodash/extend'
import omit from 'lodash/omit'

export default class extends Component {
  static defaultProps = {
    component: 'span'
  }

  render() {
    return React.createElement(
      this.props.component,
      extend({}, omit(this.props, ['service', 'text', 'component']), {
        className: this.props.className,
        onClick: this._handleClick
      }),
      this.props.children
    )
  }

  _handleClick = event => {
    event.preventDefault()

    const socials = {
      fb: '//www.facebook.com/sharer/sharer.php?u={{href}}',
      twitter: '//twitter.com/intent/tweet?text={{text}}&url={{href}}',
      vk: '//vk.com/share.php?url={{href}}',
      ok: '//connect.ok.ru/offer?url={{href}}&title={{text}}'
    }

    const params = {
      href: window.encodeURIComponent(window.location.href),
      text: this.props.text,
      via: 'imi'
    }
    const href = socials[this.props.service].replace(/(\{\{(.*?)\}\})/g, (match, p1, p2) => {
      return params[p2] ? params[p2] : ''
    })

    openPopup(href, this.props.service, 600, 320)
  }
}
