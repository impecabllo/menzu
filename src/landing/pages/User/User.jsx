import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const User = (props) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    props.getUserRequest(props.match.params.userId)
  }, [])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  return (
    <div>User Email - { user.email }</div>
  )
}

export default withRouter(User)