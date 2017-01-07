import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Setting from '../components/Setting'
import { updateSetting, setAppName, setResolutionX, setResolutionY } from 'redux/modules/setting'

const mapStateToProps = (state, ownProps) => ({
  setting: state.setting,
  appName: state.setting.get('appName'),
  resolutionX: state.setting.get('resolutionX'),
  resolutionY: state.setting.get('resolutionY')
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  updateSetting,
  setAppName,
  setResolutionX,
  setResolutionY
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
