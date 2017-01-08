import React from 'react'
import { bindActionCreators } from 'redux'
import EventsEditor from './EventsEditor'
import { shallow } from 'enzyme'
import { initialState } from 'redux/modules/events'

describe('(Component) EventsEditor', () => {
  let _props, _spies, _wrapper
  beforeEach(() => {
    _spies = {}
    _props = {
      events: initialState,
      ...bindActionCreators({
        updateEvents: (_spies.updateEvents = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<EventsEditor {..._props} />)
  })
  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })
  describe('An add event button...', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'Add Event')
    })

    it('has bootstrap classes', () => {
      expect(_button.hasClass('btn btn-default')).to.be.true
    })

    it('Should dispatch a `add Event` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.updateEvents.should.have.been.called
    })
  })
})
