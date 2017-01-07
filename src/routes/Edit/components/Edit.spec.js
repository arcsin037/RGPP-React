import React from 'react'
import Edit from './Edit'
import { shallow } from 'enzyme'

describe('(Component) Edit', () => {
  let _wrapper
  beforeEach(() => {
    const _props = {
      appName: 'Original Application',
      resolutionX: 640,
      resolutionY: 480
    }
    _wrapper = shallow(<Edit {..._props} />)
  })
  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })
  it('Renders a application name', () => {
    const welcome = _wrapper.find('h1')
    expect(welcome).to.exist
    expect(welcome.text()).to.equal('Original Application')
  })
})
