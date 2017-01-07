// import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'edit',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Edit = require('./containers/EditContainer').default
      // const reducer = require('./modules/edit').default

      /*  Add the reducer to the store on key 'edit'  */
      // injectReducer(store, { key: 'edit', reducer })

      /*  Return getComponent   */
      cb(null, Edit)

    /* Webpack named bundle   */
    }, 'edit')
  }
})
