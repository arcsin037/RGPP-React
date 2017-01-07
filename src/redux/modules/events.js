import { Record } from 'immutable'
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
  [UPDATE_EVENTS]: (state, action) => action.payload ? action.payload : state
}

// ------------------------------------
// Model
// ------------------------------------
const EventsRecord = Record([])

class Events extends EventsRecord {
}

// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = new Events()

const reducer = (state = initialState, action) => {
  if (!(state instanceof Events)) {
    return new Events(state)
  }
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducer
