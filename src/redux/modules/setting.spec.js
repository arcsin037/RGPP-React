import reducer, {
  initialState,
  updateSetting,
  DEFAULT_APP_NAME,
  DEFAULT_RESOLUTION_X,
  DEFAULT_RESOLUTION_Y,
  UPDATE_SETTING
} from './setting'

describe('(Redux) setting', () => {
  it('Should export a constant DEFAULT_APP_NAME.', () => {
    expect(DEFAULT_APP_NAME).to.eql('Original Application')
  })
  it('Should export a constant DEFAULT_RESOLUTION_X.', () => {
    expect(DEFAULT_RESOLUTION_X).to.eql(640)
  })
  it('Should export a constant DEFAULT_RESOLUTION_Y.', () => {
    expect(DEFAULT_RESOLUTION_Y).to.eql(480)
  })
  it('Should export a constant UPDATE_SETTING.', () => {
    expect(UPDATE_SETTING).to.eql('UPDATE_SETTING')
  })
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(reducer).to.be.a('function')
    })
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
  describe('(Action Creator) updateSetting', () => {
    it('Should be exported as a function.', () => {
      expect(updateSetting).to.be.a('function')
    })
    it('Should return an action with type "UPDATE_SETTING".', () => {
      expect(updateSetting()).to.have.property('type', UPDATE_SETTING)
    })
    it('Should assign the first argument to the "payload" property.', () => {
      const state = reducer(undefined, {})
      expect(updateSetting()).to.have.property('payload', undefined)
      expect(updateSetting(state)).to.have.property('payload', state)
    })
  })
  describe('(Action Handler) UPDATE_SETTING', () => {
    it('Should set application name by the action payload\'s "appName" property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, updateSetting())
      expect(state.get('appName')).to.eql(DEFAULT_APP_NAME)
      state = reducer(state, updateSetting(state.setAppName('AppName')))
      expect(state.get('appName')).to.eql('AppName')
      state = reducer(state, updateSetting(state.setAppName('')))
      expect(state.get('appName')).to.eql('')
    })
    it('Should set resolution of x by the action payload\'s "resolutionX" property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, updateSetting())
      expect(state.get('resolutionX')).to.eql(DEFAULT_RESOLUTION_X)
      state = reducer(state, updateSetting(state.setResolutionX(200)))
      expect(state.get('resolutionX')).to.eql(200)
      state = reducer(state, updateSetting(state.setResolutionX(400)))
      expect(state.get('resolutionX')).to.eql(400)
      state = reducer(state, updateSetting(state.setResolutionX(0)))
      expect(state.get('resolutionX')).to.eql(0)
    })
    it('Should set resolution of y by the action payload\'s "resolutionY" property.', () => {
      let state = reducer(undefined, {})
      expect(state).to.eql(initialState)
      state = reducer(state, updateSetting())
      expect(state.get('resolutionY')).to.eql(DEFAULT_RESOLUTION_Y)
      state = reducer(state, updateSetting(state.setResolutionY(200)))
      expect(state.get('resolutionY')).to.eql(200)
      state = reducer(state, updateSetting(state.setResolutionY(400)))
      expect(state.get('resolutionY')).to.eql(400)
      state = reducer(state, updateSetting(state.setResolutionY(0)))
      expect(state.get('resolutionY')).to.eql(0)
    })
  })
})
