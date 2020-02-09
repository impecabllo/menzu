import { connect } from 'react-redux'
import SignIn from './SignIn'
import { postSignIn } from '../../../store/actions/authActions'

const mapDispatchToProps = (dispatch) => {
  return {
    signInRequest(email, password) {
      return dispatch(postSignIn({ email, password }))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignIn)