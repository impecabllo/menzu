import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styles from './SignIn.module.sass'

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    props.signInRequest(email, password)
  }

  return (
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