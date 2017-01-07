import thunk from 'redux-thunk'
import { save } from 'redux-localstorage-simple'

// ======================================================
// Middleware Configuration
// ======================================================

/* eslint no-console: "off" */
export const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('dispatch', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export const persistStatesConfig = {
  states: ['setting'],
  namespace: 'RGPP'
}

export default [
  thunk,
  logger,
  save(persistStatesConfig)
]

// ======================================================
// Store Enhancers
// ======================================================
export const enhancers = []
