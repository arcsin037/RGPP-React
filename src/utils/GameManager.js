/**
 * Game Manager
 * @class GameManager
 * @author arcsin
 * @constructor
 */

const FRAME_RATE = 60 // (frame / second)
const INTERVAL = 1000 / FRAME_RATE

let isStartGame = false
let isPauseGame = false

const requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.setTimeout

const alwaysUpdate = () => {
  console.log('### always update ###', isPauseGame)

  if (isStartGame) {
    requestAnimationFrame(alwaysUpdate, INTERVAL)
  }
}

export const startGame = () => {
  isStartGame = true
  requestAnimationFrame(alwaysUpdate, INTERVAL)
}

export const togglePause = () => {
  isPauseGame = !isPauseGame
}

export const quitGame = () => {
  isStartGame = false
}
