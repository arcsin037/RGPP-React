import React from 'react'
import Button from 'components/Button'
import { shallow } from 'enzyme'

describe('(Component) Button', () => {
  it('Should render as a <button>', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.is('button')).to.equal(true)
  })
})
