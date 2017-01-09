import { Record, OrderedMap, Map } from 'immutable'
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
const EventsRecord = Record({
  selectedId: '0',
  list: OrderedMap()
})

export class Events extends EventsRecord {
  addEvent (event) {
    return this.set('list', this.list.set(`${event.id}`, Map(event)).sort((a, b) => a.get('id') - b.get('id')))
  }

  selectEvent (id) {
    return this.set('selectedId', `${id}`)
  }

  removeEvent (id) {
    return this.set('list', this.list.delete(`${id}`))
  }
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
