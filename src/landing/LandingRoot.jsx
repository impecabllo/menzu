import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import User from './pages/User/UserConnected'

import styles from './LandingRoot.module.sass'

const LandingRoot = props => {
  return (
    <div className={ styles.root }>
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/user/:userId?" component={ User } />
        </Switch>
      </main>
    </div>
  )
}

export default LandingRoot