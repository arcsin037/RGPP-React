import React, { PropTypes } from 'react'
import styles from './Button.scss'

export const Button = props => (
  <button
    className='btn btn-default'
    title={props.title}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
