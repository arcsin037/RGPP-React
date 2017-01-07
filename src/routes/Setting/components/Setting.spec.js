import React from 'react'
import Setting from './Setting'
import { shallow } from 'enzyme'
import { initialState, updateSetting } from 'redux/modules/setting'

describe('(Component) Setting', () => {
  let _wrapper
  beforeEach(() => {
    const _props = {
      setting: initialState,
      updateSetting
    }
    _wrapper = shallow(<Setting {..._props} />)
  })
  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })
})
