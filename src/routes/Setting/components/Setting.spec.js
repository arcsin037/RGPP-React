import React from 'react'
import { bindActionCreators } from 'redux'
import Setting from './Setting'
import { shallow } from 'enzyme'
import { initialState } from 'redux/modules/setting'

describe('(Component) Setting', () => {
  let _props, _spies, _wrapper
  beforeEach(() => {
    _spies = {}
    _props = {
      setting: initialState,
      ...bindActionCreators({
        updateSetting: (_spies.updateSetting = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Setting {..._props} />)
  })
  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })
})
