import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Edit from '../components/Edit'
import { updateScenes } from 'redux/modules/scenes'

const mapStateToProps = (state, ownProps) => ({
  appName: state.setting.get('appName'),
  resolutionX: state.setting.get('resolutionX'),
  resolutionY: state.setting.get('resolutionY'),
  scenes: state.scenes
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  updateScenes
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
