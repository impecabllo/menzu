import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Header from './components/Header/HeaderConnected'
import Home from './pages/Home/HomeConnected'
import Profile from './pages/Profile/ProfileConnected'
import User from './pages/User/UserConnected'
import CreatePost from './pages/Posts/Create/CreateConnected'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  }
}))

const LandingRoot = props => {
  const classes = useStyles()

  useEffect(() => {
    props.getProfile()
  }, [])

  return (
    <div className={ classes.root }>
      <Header />
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/profile" component={ Profile } />
          <Route path="/user/:userId?" component={ User } />
          <Route path="/create" component={ CreatePost } />
        </Switch>
      </main>
    </div>
  )
}

export default LandingRoot