import React from 'react'
import ControllableCanvas from './ControllableCanvas'
import { shallow } from 'enzyme'

describe('(Component) ControllableCanvas', () => {
  it('Should render as a <div>', () => {
    const wrapper = shallow(<ControllableCanvas />)
    expect(wrapper.is('Canvas')).to.equal(true)
  })
})
