import { EVENT_TYPE_NORMAL } from 'models/Event'
import IdOrderedMap, {
  getNewId,
  getMinId
} from 'models/IdOrderedMap'

// ------------------------------------
// Model
// ------------------------------------
export class Events extends IdOrderedMap {
  addEvent () {
    const newId = getNewId(this)
    const newEvent = {
      id: newId,
      name: `Event ${newId}`,
      type: EVENT_TYPE_NORMAL
    }
    return this.setItem(newId, newEvent).select(newId)
  }

  removeEvent (removeId) {
    const newEvents = this.deleteItem(removeId)
    return newEvents.select(getMinId(newEvents))
  }

  updateEvent (id, event) {
    return this.setItem(id, event)
  }
}

export default Events
