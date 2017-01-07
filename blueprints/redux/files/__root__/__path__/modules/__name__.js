import { Record } from 'immutable'
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ = 'UPDATE_'

// ------------------------------------
// Actions
// ------------------------------------
export const update<%= pascalEntityName %> = (payload) => ({
  type: UPDATE_,
  payload
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandlers = {
  [UPDATE_]: (state, action) => action.payload ? action.payload : state
}

// ------------------------------------
// Model
// ------------------------------------
const <%= pascalEntityName %>Record = Record({
})

class <%= pascalEntityName %> extends <%= pascalEntityName %>Record {
}

// ------------------------------------
// Reducer
// ------------------------------------

// initial state
export const initialState = new <%= pascalEntityName %>()

const reducer = (state = initialState, action) => {
  if (!(state instanceof <%= pascalEntityName %>)) {
    return new <%= pascalEntityName %>(state)
  }
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducer
