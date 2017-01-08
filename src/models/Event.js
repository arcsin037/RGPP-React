import { Record } from 'immutable'
// ------------------------------------
// Constants
// ------------------------------------
export const EVENT_TYPE_NORMAL = 'EVENT_TYPE_NORMAL'
export const EVENT_TYPE_COMMON = 'EVENT_TYPE_COMMON'

// ------------------------------------
// Model
// ------------------------------------
export const initialState = {
  id: 0,
  name: 'Event',
  type: EVENT_TYPE_NORMAL
}

const EventRecord = Record(initialState)

class Event extends EventRecord {
  setName (name) {
    return this.set('name', name)
  }
  setType (type) {
    return this.set('type', type)
  }
}

export default Event
