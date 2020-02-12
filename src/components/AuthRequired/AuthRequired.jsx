import * as React from 'react'
import { Redirect } from 'react-router'

const AuthRequiredComponent = (props) => {
  return localStorage.getItem('token') ? <>{ props.children }</> : <Redirect to={ '/sign-in' } />
}

export const AuthRequired = (Component) => (props) =>  <AuthRequiredComponent><Component {...props} /></AuthRequiredComponent>
