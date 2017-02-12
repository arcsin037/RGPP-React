import { Record, OrderedMap, Map } from 'immutable'
import { getNotExistMinUInt, getMinUInt } from 'utils/UIntArrayUtil'
// ------------------------------------
// Constants
// ------------------------------------
export const ITEMS_KEY = 'items'
export const SELECTED_ID_KEY = 'selectedId'

// ------------------------------------
// Utils
// ------------------------------------
export const getIdArray = orderedMap => {
  const items = orderedMap.get(ITEMS_KEY).toArray()
  return items.map(item => item.get('id'))
}

export const getNewId = orderedMap => {
  const idArray = getIdArray(orderedMap)
  return getNotExistMinUInt(idArray)
}

export const getMinId = orderedMap => {
  const idArray = getIdArray(orderedMap)
  return getMinUInt(idArray)
}

export const sortedById = (a, b) => a.get('id') - b.get('id')

export const sortStateById = (state) => {
  return state.set(ITEMS_KEY, state.get(ITEMS_KEY).sort(sortedById))
}

// ------------------------------------
// Model
// ------------------------------------
export const initialState = {
  [SELECTED_ID_KEY]: '0',
  [ITEMS_KEY]: OrderedMap()
}

const IdOrderedMapRecord = Record(initialState)

class IdOrderedMap extends IdOrderedMapRecord {
  constructor (state) {
    (state instanceof Map) ? super(sortStateById(state)) : super()
  }

  setItem (id, item) {
    return this.set(ITEMS_KEY, this.get(ITEMS_KEY).set(`${id}`, Map(item)).sort(sortedById))
  }

  deleteItem (id) {
    return this.set(ITEMS_KEY, this.get(ITEMS_KEY).delete(`${id}`))
  }

  select (id) {
    return this.set(SELECTED_ID_KEY, `${id}`)
  }

  // ------------------------------------
  // Getter
  // ------------------------------------
  getItems () {
    return this.get(ITEMS_KEY)
  }

  getSelectedId () {
    return this.get(SELECTED_ID_KEY)
  }

  getItem (id) {
    return this.getItems().get(`${id}`)
  }

  getSelectedItem () {
    return this.getItem(this.getSelectedId())
  }
}

export default IdOrderedMap
