import { INIT_ACTION } from 'redux/modules/constants'
import Scenes from 'models/Scenes'
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SCENES = 'UPDATE_SCENES'

// ------------------------------------
// Actions
// ------------------------------------
export const updateScenes = (payload) => ({
  type: UPDATE_SCENES,
  payload
})
// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  [INIT_ACTION]: (state, action) => new Scenes(state),
  [UPDATE_SCENES]: (state, action) => action.payload ? action.payload : state
}
// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = {}

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducer
