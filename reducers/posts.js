import normalize from 'json-api-normalizer'
import { get } from 'lodash'
import * as ApiConstants from 'constants/Api'

export default (state = {}, action) => {
  switch (action.type) {
    case ApiConstants.GET_POSTS_SUCCESS:
      const data = get(normalize(action.payload), 'posts') || {}
      return { ...state, ...data }

    default:
      return state
  }
}
