import reducer, {
  initialState,
  ADD_MAP,
  UPDATE_MAP,
  DELETE_MAP,
  addMap
} from './maps'

describe('(Redux) maps', () => {
  it('Should export a constant ADD_MAP.', () => {
    expect(ADD_MAP).to.equal('ADD_MAP')
  })
  it('Should export a constant UPDATE_MAP.', () => {
    expect(UPDATE_MAP).to.equal('UPDATE_MAP')
  })
  it('Should export a constant DELETE_MAP.', () => {
    expect(DELETE_MAP).to.equal('DELETE_MAP')
  })

  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
  describe('(Action Creator) addMap', () => {
    it('Should be exported as a function.', () => {
      expect(addMap).to.be.a('function')
    })

    it('Should return an action with type "ADD_MAP".', () => {
      expect(addMap()).to.have.property('type', ADD_MAP)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      const data = {}
      expect(addMap(data)).to.have.property('payload', data)
    })
  })
})
