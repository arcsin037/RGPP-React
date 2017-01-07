import React from 'react'
import NumberInput from './NumberInput'
import { shallow } from 'enzyme'

describe('(Component) NumberInput', () => {
  it('Should render as a <input>', () => {
    const wrapper = shallow(<NumberInput />)
    expect(wrapper.is('input')).to.equal(true)
  })
})
