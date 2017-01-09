import React, {PropTypes} from 'react'
import styles from './SelectBox.scss'

/**
 * Select Box
 *
 * @class SelectBox
 * @author arcsin
 * @constructor
 */

const SelectBox = (props) => {
  if (props.options.length === 0) return null
  const options = props.options.map((option) => (
    <option key={option.name} value={option.value}>
      {option.name}
    </option>
  ))
  return (
    <select className={styles.SelectBox} value={props.defaultValue} onChange={props.handleChange}>
      {options}
    </select>
  )
}

SelectBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func
}

export default SelectBox
