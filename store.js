import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import * as reducers from 'reducers'

export default (initialState = {}) => {
  const middlewares = [thunkMiddleware, apiMiddleware]
  return createStore(combineReducers(reducers), initialState, compose(applyMiddleware(...middlewares)))
}
