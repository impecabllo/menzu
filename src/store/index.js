import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import profileReducer from './reducers/profileReducer'
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  profile: profileReducer,
  auth: authReducer,
  user: userReducer
})