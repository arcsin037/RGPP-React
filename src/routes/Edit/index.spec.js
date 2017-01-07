import CounterRoute from 'routes/Edit'

describe('(Route) Edit', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `edit`', () => {
    expect(_route.path).to.equal('edit')
  })
})
