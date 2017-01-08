import { Record, OrderedMap } from 'immutable'
import { getNotExistMinPositiveInt } from 'utils/NumberUtil'
import Event from 'models/Event'
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
  list: OrderedMap()
})

class Events extends EventsRecord {
  addEvent () {
    const eventlist = this.get('list').toArray()
    const eventIdArray = eventlist.map(event => event.get('id'))
    const newId = getNotExistMinPositiveInt(eventIdArray)
    const event = new Event({
      id: newId,
      name: `Event ${newId}`,
      type: 'default'
    })
    return this.set('list', this.list.set(newId, event))
  }

  removeEvent (id) {
    return this.set('list', this.list.delete(id))
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
