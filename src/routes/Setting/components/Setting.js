import React, { PropTypes } from 'react'
import styles from './Setting.scss'
import Table from 'components/Table'
import TextInput from 'components/TextInput'
import NumberInput from 'components/NumberInput'
import { MAX_RESOLUTION_X, MAX_RESOLUTION_Y } from 'constants/Screen'
import { clamp } from 'utils/NumberUtil'

export class Setting extends React.Component {
  setAppName = e => {
    const { setting, updateSetting } = this.props
    updateSetting(setting.setAppName(e.target.value))
  }

  setResolutionX = e => {
    const { setting, updateSetting } = this.props
    const resolutionX = clamp(parseInt(e.target.value, 10), 0, MAX_RESOLUTION_X)
    updateSetting(setting.setResolutionX(resolutionX))
  }

  setResolutionY = e => {
    const { setting, updateSetting } = this.props
    const resolutionY = clamp(parseInt(e.target.value, 10), 0, MAX_RESOLUTION_Y)
    updateSetting(setting.setResolutionY(resolutionY))
  }

  render () {
    const { setting } = this.props
    const headers = ['Parameter', 'Value']
    const appTextInput = (
      <TextInput
        value={setting.get('appName')}
        handleChange={this.setAppName}
      />
    )
    const resolutionXInput = (
      <NumberInput
        value={setting.get('resolutionX')}
        handleChange={this.setResolutionX}
        min={0}
        max={MAX_RESOLUTION_X}
      />
    )
    const resolutionYInput = (
      <NumberInput
        value={setting.get('resolutionY')}
        handleChange={this.setResolutionY}
        min={0}
        max={MAX_RESOLUTION_Y}
      />
    )
    const data = [
      ['Application Name', appTextInput],
      ['Resolution X', resolutionXInput],
      ['Resolution Y', resolutionYInput]
    ]
    return (
      <div className={styles.Setting}>
        <Table headers={headers} data={data} />
      </div>
    )
  }
}

Setting.propTypes = {
  setting: PropTypes.object.isRequired,
  updateSetting: PropTypes.func.isRequired
}

export default Setting
