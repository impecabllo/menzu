import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import reducers from './store'
import createSagaMiddleware from 'redux-saga'
import sagaWatchers from './store/sagas/watchersSaga'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
const connectedRouterMiddleware = routerMiddleware(history)

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers(history),
  storeEnhancers(
    applyMiddleware(
      connectedRouterMiddleware,
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(sagaWatchers)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
