import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = state => {
  return {
    user: { ...state.user.data },
  }
}

export default connect(mapStateToProps)(Home)