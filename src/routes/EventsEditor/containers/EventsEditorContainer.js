import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventsEditor from '../components/EventsEditor'
import { updateEvents } from 'redux/modules/events'

const mapStateToProps = (state, ownProps) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  updateEvents
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsEditor)
