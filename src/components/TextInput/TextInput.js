import React, { PropTypes } from 'react'
import styles from './TextInput.scss'

export const TextInput = props => (
  <input
    className={styles.TextInput}
    type='text'
    value={props.value}
    onChange={props.handleChange}
    placeholder={props.placeholder}
  />
)

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}

export default TextInput
