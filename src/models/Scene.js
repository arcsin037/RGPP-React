import { Record } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Model
// ------------------------------------
export const initialState = {
  id: 0,
  name: 'Scene',
  eventIds: []
}

const SceneRecord = Record(initialState)

class Scene extends SceneRecord {
  setName (name) {
    return this.set('name', name)
  }
}

export default Scene
