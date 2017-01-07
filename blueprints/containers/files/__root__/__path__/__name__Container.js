import { connect } from 'react-redux'
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)
