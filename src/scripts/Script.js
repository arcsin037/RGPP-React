/**
 * Script Base
 * @class Script
 * @author arcsin
 * @constructor
 */
class Script {
  /* eslint no-unused-vars: ["error", { "args": "none" }] */

  // "onLoadGame" is called when the game is loaded.
  onLoadGame (event) {}

  // "onLoadMap" is called when the map is loaded.
  onLoadMap (event) {}

  // "state transition" is called when the game is loaded.
  onStateTransition (event) {}

  reaction (event) {}

  update (event) {}

  debugUpdate (event) {}

  draw (ctx) {}

  debugDraw (ctx) {}

  loadChangeableValuesPerEvent () {
    return []
  }

  loadChangeableValuesPerScript () {
    return []
  }
}
export default Script
