import reducer, {
  initialState,
  UPDATE_EVENTS,
  updateEvents
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
  describe('(Action Handler) UPDATE_EVENTS', () => {
    it('Should update by the action payload property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, updateEvents())
      expect(state).to.eql(initialState)
    })
  })
})
