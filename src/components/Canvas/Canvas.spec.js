import React from 'react'
import Canvas from './Canvas'
import { shallow } from 'enzyme'

describe('(Component) Canvas', () => {
  let _wrapper
  beforeEach(() => {
    const _props = {
      width: 640,
      height: 480
    }
    _wrapper = shallow(<Canvas {..._props} />)
  })
  it('Should render as a <canvas>', () => {
    expect(_wrapper.is('canvas')).to.equal(true)
  })
  it('Should have props', () => {
    expect(_wrapper.prop('width')).to.equal('640px')
    expect(_wrapper.prop('height')).to.equal('480px')
  })
})
