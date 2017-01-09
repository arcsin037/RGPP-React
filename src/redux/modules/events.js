import { INIT_ACTION } from 'redux/modules/constants'
import Events from 'models/Events'
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_EVENTS = 'UPDATE_EVENTS'

// ------------------------------------
// Actions
// ------------------------------------
export const updateEvents = (payload) => ({
  type: UPDATE_EVENTS,
  payload
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  [INIT_ACTION]: (state, action) => new Events(state),
  [UPDATE_EVENTS]: (state, action) => action.payload ? action.payload : state
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
