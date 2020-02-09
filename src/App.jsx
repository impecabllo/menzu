import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { history } from './index'
import Loading from './components/Loading'
import { AuthRequired } from './components/AuthRequired/AuthRequired'

import 'normalize.css'
import './fonts.sass'
import styles from './App.module.sass'

const Auth = lazy(() => import('./components/Auth/Auth'))
const LandingRoot = lazy(() => import('./landing/LandingRoot'))

const App = () => {
  return (
    <MuiThemeProvider theme={ theme }>
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
              <Route exact path="/:authType(sign-in|sign-up)" component={ Auth } />
              <Route path="/" component={ AuthRequired(LandingRoot) } />
            </Switch>
          </Suspense>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  )
}

export default App
