import CounterRoute from 'routes/Setting'

describe('(Route) Setting', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `setting`', () => {
    expect(_route.path).to.equal('setting')
  })
})
