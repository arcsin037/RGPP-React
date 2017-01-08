import React from 'react'
import { Link } from 'react-router'
import './Header.scss'

const Header = props => (
  <div>
    <Link to='/edit' activeClassName='route--active'>
      Edit
    </Link>
    {' · '}
    <Link to='/events-editor' activeClassName='route--active'>
      Events Editor
    </Link>
    {' · '}
    <Link to='/setting' activeClassName='route--active'>
      Setting
    </Link>
  </div>
)

export default Header
