import { connect } from 'react-redux'
import Profile from './Profile'

const mapStateToProps = state => {
  return {
    profile: { ...state.profile.data },
  }
}

export default connect(mapStateToProps)(Profile)