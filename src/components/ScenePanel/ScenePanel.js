import React, { PropTypes } from 'react'
import * as BasicDraw from 'utils/BasicDraw'
import ControllableCanvas from 'components/ControllableCanvas'

export class ScenePanel extends React.Component {
  constructor (props) {
    super(props)
    this.onEvent = this.onEvent.bind(this)
    this.isLoaded = false
  }
  onEvent (state) {
    const { ctx } = state
    if (!ctx) return
    if (!this.isLoaded) {
      this.onInit(this.props, state)
      this.isLoaded = true
    }
    this.onUpdate(this.props, state)
    this.onDraw(ctx)
  }
  onInit (props, state) {
    props.plugins.forEach(plugin => plugin.onInit(state))
  }
  onUpdate (props, state) {
    props.plugins.forEach(plugin => plugin.onUpdate(state))
  }
  onDraw (ctx) {
    BasicDraw.clear(ctx)
    this.props.plugins.forEach(plugin => plugin.onDraw(ctx))
  }

  render () {
    const { width, height } = this.props
    return (
      <ControllableCanvas
        width={width}
        height={height}
        onEvent={this.onEvent}
      />
    )
  }
}

ScenePanel.propTypes = {
  plugins: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default ScenePanel
