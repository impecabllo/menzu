import * as React from 'react'
import { Redirect } from 'react-router'

const AuthRequiredComponent = (props) => {
  return localStorage.getItem('email') ? <>{ props.children }</> : <Redirect to={ '/auth' } />
}

export const AuthRequired = (Component) => (props) =>  <AuthRequiredComponent><Component {...props} /></AuthRequiredComponent>
