import React from 'react'
import <%= pascalEntityName %> from './<%= pascalEntityName %>'
import { shallow } from 'enzyme'

describe('(Component) <%= pascalEntityName %>', () => {
  it('Should render as a <div>', () => {
    const wrapper = shallow(<<%= pascalEntityName %> />)
    expect(wrapper.is('div')).to.equal(true)
  })
})
