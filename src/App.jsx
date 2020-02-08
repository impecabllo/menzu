import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './index'
import Loading from './components/Loading'

import 'normalize.css'
import './fonts.sass'
import styles from './App.module.sass'

const LandingRoot = lazy(() => import('./landing'))

const App = () => {
  return (
    <ConnectedRouter history={ history }>
      <div className="app">
        <Suspense
          fallback={
            <div className={ styles.appLoading }>
              <Loading size={ 100 } thickness={ 1.5 } />
            </div>
          }
        >
          <Switch>
            <Route path="/" component={ LandingRoot } />
          </Switch>
        </Suspense>
      </div>
    </ConnectedRouter>
  )
}

export default App
