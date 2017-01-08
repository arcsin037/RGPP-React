import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Setting from '../components/Setting'
import { updateSetting } from 'redux/modules/setting'

const mapStateToProps = (state, ownProps) => ({
  setting: state.setting
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  updateSetting
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)
