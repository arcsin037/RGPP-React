import React, { PropTypes } from 'react'
import styles from './NumberInput.scss'

export const NumberInput = props => (
  <input
    className={styles.NumberInput}
    type='number'
    value={props.value}
    onChange={props.handleChange}
    placeholder={props.placeholder}
    min={props.min}
    max={props.max}
  />
)

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
}

export default NumberInput
