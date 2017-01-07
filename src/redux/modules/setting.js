import { Record } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const DEFAULT_APP_NAME = 'Original Application'
export const DEFAULT_RESOLUTION_X = 640
export const DEFAULT_RESOLUTION_Y = 480

export const UPDATE_SETTING = 'UPDATE_SETTING'

// ------------------------------------
// Actions
// ------------------------------------
export const updateSetting = (payload) => ({
  type: UPDATE_SETTING,
  payload
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  [UPDATE_SETTING]: (state, action) => action.payload ? action.payload : state
}

// ------------------------------------
// Model
// ------------------------------------
const SettingRecored = Record({
  appName: DEFAULT_APP_NAME,
  resolutionX: DEFAULT_RESOLUTION_X,
  resolutionY: DEFAULT_RESOLUTION_Y
})

class Setting extends SettingRecored {
  setAppName (appName = DEFAULT_APP_NAME) {
    return this.set('appName', appName)
  }
  setResolutionX (resolutionX = DEFAULT_RESOLUTION_X) {
    return this.set('resolutionX', resolutionX)
  }
  setResolutionY (resolutionY = DEFAULT_RESOLUTION_Y) {
    return this.set('resolutionY', resolutionY)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = new Setting()

const reducer = (state = initialState, action) => {
  if (!(state instanceof Setting)) {
    return new Setting(state)
  }
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducer
