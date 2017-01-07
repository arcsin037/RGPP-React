import React, { PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import styles from './Canvas.scss'

class Canvas extends React.Component {
  componentDidMount () {
    const { getCanvasInfo } = this.props
    const canvas = findDOMNode(this.refs.canvas)
    if (!canvas || !canvas.getContext || !getCanvasInfo) {
      return
    }
    const ctx = canvas.getContext('2d')
    getCanvasInfo(ctx)
  }

  render () {
    const {
      width,
      height,
      onKeyDown = () => {},
      onKeyUp = () => {},
      onMouseMove = () => {},
      onMouseDown = () => {},
      onMouseUp = () => {},
      onMouseOut = () => {},
      onMouseOver = () => {},
      onDoubleClick = () => {}
    } = this.props

    const widthPx = `${width}px`
    const heightPx = `${height}px`

    const sizeStyle = {
      width: widthPx,
      height: heightPx
    }

    return (
      <canvas
        ref='canvas'
        tabIndex={0}
        className={styles.Canvas}
        style={sizeStyle}
        width={widthPx}
        height={heightPx}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onDoubleClick={onDoubleClick}
      />
    )
  }
}

Canvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  getCanvasInfo: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onDoubleClick: PropTypes.func
}

export default Canvas
