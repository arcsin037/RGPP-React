// ------------------------------------
// Constants
// ------------------------------------
export const ADD_MAP = 'ADD_MAP'
export const UPDATE_MAP = 'UPDATE_MAP'
export const DELETE_MAP = 'DELETE_MAP'

// ------------------------------------
// Actions
// ------------------------------------
export const addMap = (data) => ({
  type: ADD_MAP,
  payload: data
})

export const updateMap = (index, data) => ({
  type: UPDATE_MAP,
  index,
  payload: data
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {}

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
