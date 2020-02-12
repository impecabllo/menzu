import { connect } from 'react-redux'
import SignUp from './SignUp'
import { postSignUp } from '../../../store/actions/authActions'

const mapStateToProps = (state) => {
  return {
    state: { ...state.auth.signUp.state }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest(email, password) {
      return dispatch(postSignUp({ email, password }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)