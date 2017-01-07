import reducer, {
  initialState,
  UPDATE_,
  update<%= pascalEntityName %>
} from './<%= camelEntityName %>'

describe('(Redux) <%= camelEntityName %>', () => {
  it('Should export a constant UPDATE_.', () => {
    expect(UPDATE_).to.eql('UPDATE_')
  })
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(reducer).to.be.a('function')
    })
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
  describe('(Action Creator) update<%= pascalEntityName %>', () => {
    it('Should be exported as a function.', () => {
      expect(update<%= pascalEntityName %>).to.be.a('function')
    })
    it('Should return an action with type "UPDATE_".', () => {
      expect(update<%= pascalEntityName %>()).to.have.property('type', UPDATE_)
    })
    it('Should assign the first argument to the "payload" property.', () => {
      const state = reducer(undefined, {})
      expect(update<%= pascalEntityName %>()).to.have.property('payload', undefined)
      expect(update<%= pascalEntityName %>(state)).to.have.property('payload', state)
    })
  })
  describe('(Action Handler) UPDATE_', () => {
    it('Should update by the action payload property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, update<%= pascalEntityName %>())
      expect(state).to.eql(initialState)
    })
  })
})
