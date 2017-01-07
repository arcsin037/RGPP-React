import React from 'react'
import TextInput from './TextInput'
import { shallow } from 'enzyme'

describe('(Component) TextInput', () => {
  it('Should render as a <input>', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.is('input')).to.equal(true)
  })
})
