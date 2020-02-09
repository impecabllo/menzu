import { connect } from 'react-redux'
import SignUp from './SignUp'
import { postSignUp } from '../../../store/actions/authActions'

const mapDispatchToProps = (dispatch) => {
  return {
    signUpRequest(email, password) {
      return dispatch(postSignUp({ email, password }))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUp)