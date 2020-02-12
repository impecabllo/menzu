import { connect } from 'react-redux'
import User from './User'
import { getUser } from '../../../store/actions/authActions'

const mapStateToProps = state => {
  return {
    user: { ...state.user.data },
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserRequest(userId) {
      return dispatch(getUser(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)