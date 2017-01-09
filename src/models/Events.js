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
    return this.add(newEvent).select(newId)
  }

  removeEvent (removeId) {
    const newEvents = this.remove(removeId)
    return newEvents.select(getMinId(newEvents))
  }
}

export default Events
