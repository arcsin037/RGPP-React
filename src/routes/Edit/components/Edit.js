import React, { PropTypes } from 'react'
import styles from './Edit.scss'
import Button from 'components/Button'
import ScenePanel from 'components/ScenePanel'
import MapChipEditor from 'plugins/MapChipEditor'
import { startGame, togglePause, quitGame } from 'utils/GameManager'

export class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.plugins = [
      new MapChipEditor()
    ]
  }

  startGame = e => {
    startGame()
  }

  togglePause = e => {
    togglePause()
  }

  quitGame = e => {
    quitGame()
  }

  addScene = () => {
    const { updateScenes, scenes } = this.props
    updateScenes(scenes.addScene())
  }

  render () {
    const { appName, resolutionX, resolutionY, scenes } = this.props
    const selectedScenes = scenes.getSelectedItem()
    const scenePanel = selectedScenes && (
      <ScenePanel width={resolutionX} height={resolutionY} plugins={this.plugins} />
    )
    return (
      <div className={styles.Edit}>
        <div>
          <Button onClick={this.startGame}>
            {'Play'}
          </Button>
          <Button onClick={this.togglePause}>
            {'Pause'}
          </Button>
          <Button onClick={this.quitGame}>
            {'Quit'}
          </Button>
        </div>
        <div>
          <Button onClick={this.addScene}>
            +
          </Button>
        </div>
        <h1>{appName}</h1>
        {scenePanel}
      </div>
    )
  }
}

Edit.propTypes = {
  appName: PropTypes.string.isRequired,
  resolutionX: PropTypes.number.isRequired,
  resolutionY: PropTypes.number.isRequired,
  scenes: PropTypes.object.isRequired,
  updateScenes: PropTypes.func.isRequired
}

export default Edit
