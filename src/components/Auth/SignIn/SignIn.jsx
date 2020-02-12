import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styles from './SignIn.module.sass'

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    props.signInRequest(email, password)
  }

  return props.state.isSuccess && !props.state.isFetching ? (<Redirect to="/user" />) : (
    <div className={ styles.root }>
      <div className={ styles.formGroup }>
        <TextField
          label="E-mail"
          className={ styles.textField }
          type="email"
          name="email"
          autoComplete="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          label="Password"
          className={ styles.textField }
          type="password"
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        disabled={ !email || !password || props.state.isFetching }
        className={ styles.button }
        onClick={ handleSubmit }
        fullWidth
      >
        Sign In
      </Button>
    </div>
  )
}

export default SignIn