import React from 'react'
import ControllableCanvas from './ControllableCanvas'
import { shallow } from 'enzyme'

describe('(Component) ControllableCanvas', () => {
  it('Should render as a <div>', () => {
    const props = {
      width: 640,
      height: 480
    }
    const wrapper = shallow(<ControllableCanvas {...props} />)
    expect(wrapper.is('Canvas')).to.equal(true)
  })
})
