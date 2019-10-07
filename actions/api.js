import { RSAA } from 'redux-api-middleware'
import queryString from 'query-string'
import * as ApiConstants from 'constants/Api'

const headers = (extraHeaders = {}) => {
  return {
    'content-type': 'application/vnd.api+json',
    Authorization: process.env.AUTHORIZATION,
    'Accept-Language': 'ru',
    ...extraHeaders
  }
}

const endpoint = (req, pathname, query) => {
  let host = req ? req.headers.host : typeof window !== 'undefined' && window.location.hostname
  let apiUrl = process.env.API_URL
  if (host === 'edit.example.ru') {
    apiUrl = process.env.EDIT_API_URL
  }
  return `${apiUrl}${pathname}${query ? `${~pathname.indexOf('?') ? '&' : '?'}${queryString.stringify(query)}` : ''}`
}

export const getPosts = req => {
  const query = { include: [''].join(',') }

  return {
    [RSAA]: {
      method: 'GET',
      endpoint: endpoint(req, '/api/v1/posts', query),
      headers: headers(),
      types: [
        { type: ApiConstants.GET_POSTS_PENDING },
        { type: ApiConstants.GET_POSTS_SUCCESS },
        { type: ApiConstants.GET_POSTS_REJECT }
      ],
      bailout: ({ posts }) => posts.length > 0
    }
  }
}
