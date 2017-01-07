import React, { PropTypes } from 'react'
import styles from './Button.scss'

export const Button = props => (
  <button className={styles.Button} title={props.title} onClick={props.onClick}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
