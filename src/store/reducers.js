import { combineReducers } from 'redux'
import locationReducer from 'redux/modules/location'
import images from 'redux/modules/images'
import plugin from 'redux/modules/plugin'
import scenes from 'redux/modules/scenes'
import sounds from 'redux/modules/sounds'
import setting from 'redux/modules/setting'
import events from 'redux/modules/events'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    images,
    scenes,
    sounds,
    setting,
    events,
    location: locationReducer,
    plugin,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
