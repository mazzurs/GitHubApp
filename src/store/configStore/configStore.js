import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from '../reducers/mainReducers'
import logger from 'redux-logger'

export default function configureStore () {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(logger),
  )(createStore)(rootReducer)

  return store
}