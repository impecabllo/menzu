import { connect } from 'react-redux'
import SignIn from './SignIn'
import { postSignIn } from '../../../store/actions/authActions'

const mapStateToProps = (state) => {
  return {
    state: { ...state.auth.signIn.state }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInRequest(email, password) {
      return dispatch(postSignIn({ email, password }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)