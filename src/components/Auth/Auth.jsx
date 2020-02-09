import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

import styles from './Auth.module.sass'
import logo from '../images/logo.png'

import SignIn from './SignIn/SignInConnected'
import SignUp from './SignUp/SignUpConnected'

const Auth = (props) => {
  const [tab, setTab] = useState(props.match.params.authType)

  const handleChange = (e, value) => {
    const { history } = props
    history.replace(value)
    setTab(value)
  }

  return (
    <>
      <div className={ styles.bg }></div>
      <div className={ styles.root }>
        <Container maxWidth="xs">
          <div className={ styles.logo }>
            <img src={ logo } alt="Menzu"/>
          </div>
          <Paper elevation={ 1 } className={ styles.paper }>
            <AppBar position="static" color="inherit" className={ styles.tabs }>
              <Tabs
                value={ tab }
                onChange={ handleChange }
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Sign in" value="sign-in" />
                <Tab label="Sign up" value="sign-up" />
              </Tabs>
            </AppBar>
            { tab === 'sign-in' && (
              <SignIn />
            ) }
            { tab === 'sign-up' && (
              <SignUp />
            ) }
          </Paper>
        </Container>
      </div>
    </>
  )
}

export default withRouter(Auth)