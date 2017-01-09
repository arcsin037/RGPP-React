import React from 'react'
import SelectBox from './SelectBox'
import { shallow } from 'enzyme'

describe('(Component) SelectBox', () => {
  let _wrapper
  beforeEach(() => {
    const _props = {
      options: [
        { value: '0', name: 'name 0' },
        { value: '1', name: 'name 1' }
      ],
      defaultValue: 0
    }
    _wrapper = shallow(<SelectBox {..._props} />)
  })
  it('Should render as a <div>', () => {
    expect(_wrapper.is('select')).to.equal(true)
  })
  it('Should have props', () => {
    expect(_wrapper.prop('value')).to.equal(0)
  })
})
