import { List, Map } from 'immutable'
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  // [COUNTER_INCREMENT]: (state, action) => state + action.payload
}
// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = List([])

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducer
