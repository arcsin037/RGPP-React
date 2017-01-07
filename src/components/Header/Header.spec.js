import React from 'react'
import Header from './Header'
import { Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Edit route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='route--active' to='/edit'>
          Edit
        </Link>
      )).to.be.true
    })
    it('Should render a Link to Setting route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='route--active' to='/setting'>
          Setting
        </Link>
      )).to.be.true
    })
  })
})
