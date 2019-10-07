import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { get, truncate } from 'lodash'

export default class Meta extends Component {
  render() {
    const defaultImageUrl = ''
    const defaultDescription = 'Description'
    const { title, description, imageUrl } = this.props
    const truncatedDescription = truncate(description || defaultDescription, {
      length: 160,
      separator: ' '
    })
    const shareImage = imageUrl || defaultImageUrl

    return (
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: truncatedDescription },

          { property: 'og:title', content: title },
          { property: 'og:description', content: truncatedDescription },
          { property: 'og:image', content: shareImage },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: truncatedDescription },
          { name: 'twitter:image', content: shareImage },

          { name: 'vk:image', content: shareImageVk }
        ]}
      />
    )
  }
}
