import { List, Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_IMAGE = 'ADD_IMAGE'

// ------------------------------------
// Models
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
export const addImage = data => ({
  type: ADD_IMAGE,
  payload: data
})
// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  [ADD_IMAGE]: (state, action) => state.push(Map(action.payload))
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
