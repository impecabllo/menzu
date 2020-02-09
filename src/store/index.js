import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import authReducer from './reducers/authReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer
})