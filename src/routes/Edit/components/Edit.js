import React, { PropTypes } from 'react'
import styles from './Edit.scss'
import ScenePanel from 'components/ScenePanel'
import MapChipEditor from 'plugins/MapChipEditor'

export const Edit = props => {
  const plugins = [
    new MapChipEditor()
  ]
  const { appName, resolutionX, resolutionY } = props
  return (
    <div className={styles.Edit}>
      <h1>{appName}</h1>
      <ScenePanel width={resolutionX} height={resolutionY} plugins={plugins} />
    </div>
  )
}

Edit.propTypes = {
  appName: PropTypes.string.isRequired,
  resolutionX: PropTypes.number.isRequired,
  resolutionY: PropTypes.number.isRequired
}

export default Edit
