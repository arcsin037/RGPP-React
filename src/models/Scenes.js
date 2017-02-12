import IdOrderedMap, {
  getNewId,
  getMinId
} from 'models/IdOrderedMap'

// ------------------------------------
// Model
// ------------------------------------
export class Scenes extends IdOrderedMap {
  addScene () {
    const newId = getNewId(this)
    const newScene = {
      id: newId,
      name: `Scene ${newId}`,
      eventIds: []
    }
    return this.setItem(newId, newScene).select(newId)
  }

  removeScene (removeId) {
    const newScenes = this.deleteItem(removeId)
    return newScenes.select(getMinId(newScenes))
  }

  updateScene (id, event) {
    return this.setItem(id, event)
  }
}

export default Scenes
