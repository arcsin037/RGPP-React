// import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'setting',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Setting = require('./containers/SettingContainer').default
      // const reducer = require('./modules/setting').default

      /*  Add the reducer to the store on key 'setting'  */
      // injectReducer(store, { key: 'setting', reducer })

      /*  Return getComponent   */
      cb(null, Setting)

    /* Webpack named bundle   */
    }, 'setting')
  }
})
