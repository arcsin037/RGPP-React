import { OrderedMap } from 'immutable'
import reducer, {
  initialState,
  UPDATE_EVENTS,
  updateEvents,
  Events
} from './events'

describe('(Redux) events', () => {
  it('Should export a constant UPDATE_EVENTS.', () => {
    expect(UPDATE_EVENTS).to.eql('UPDATE_EVENTS')
  })
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(reducer).to.be.a('function')
    })
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
  describe('(Action Creator) updateEvents', () => {
    it('Should be exported as a function.', () => {
      expect(updateEvents).to.be.a('function')
    })
    it('Should return an action with type "UPDATE_EVENTS".', () => {
      expect(updateEvents()).to.have.property('type', UPDATE_EVENTS)
    })
    it('Should assign the first argument to the "payload" property.', () => {
      const state = reducer(undefined, {})
      expect(updateEvents()).to.have.property('payload', undefined)
      expect(updateEvents(state)).to.have.property('payload', state)
    })
  })
  describe('(Model) Events', () => {
    let _instance
    beforeEach(() => {
      _instance = new Events()
    })
    it('Should create instance', () => {
      expect(_instance).to.be.ok
    })
    it('Should set default value', () => {
      expect(_instance.get('selectedId')).to.eql('0')
      expect(_instance.get('list')).to.eql(OrderedMap())
    })
    it('Should selectEvent', () => {
      _instance = _instance.selectEvent(1)
      expect(_instance.get('selectedId')).to.eql('1')
      _instance = _instance.selectEvent(5)
      expect(_instance.get('selectedId')).to.eql('5')
    })
    it('Should add and remove event', () => {
      _instance = _instance.addEvent()
      expect(_instance.get('list').size).to.eql(1)
      expect(_instance.get('list').get(0).get('id')).to.eql(0)
      _instance = _instance.addEvent()
      expect(_instance.get('list').size).to.eql(2)
      expect(_instance.get('list').get(1).get('id')).to.eql(1)
      _instance = _instance.removeEvent(0)
      expect(_instance.get('list').size).to.eql(1)
      expect(_instance.get('list').get(1).get('id')).to.eql(1)
      _instance = _instance.addEvent()
      expect(_instance.get('list').size).to.eql(2)
      expect(_instance.get('list').get(0).get('id')).to.eql(0)
    })
  })
  describe('(Action Handler) UPDATE_EVENTS', () => {
    it('Should update by the action payload property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, updateEvents())
      expect(state).to.eql(initialState)
    })
  })
})
