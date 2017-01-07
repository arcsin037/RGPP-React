import React from 'react'
import Table from './Table'
import { shallow } from 'enzyme'

describe('(Component) Table', () => {
  it('Should render as a <div>', () => {
    const props = {
      headers: [],
      data: []
    }
    const wrapper = shallow(<Table {...props} />)
    expect(wrapper.is('table')).to.equal(true)
  })
})
