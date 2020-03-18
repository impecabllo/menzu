import { connect } from 'react-redux'
import LandingRoot from './LandingRoot'
import { getProfile } from '../store/actions/profileActions'

const mapStateToProps = (state) => {
  return {
    profileState: state.profile.state,
    profileData: state.profile.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile() {
      return dispatch(getProfile())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingRoot)
