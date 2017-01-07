import { connect } from 'react-redux'
import Edit from '../components/Edit'

const mapStateToProps = (state, ownProps) => ({
  appName: state.setting.get('appName'),
  resolutionX: state.setting.get('resolutionX'),
  resolutionY: state.setting.get('resolutionY')
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
