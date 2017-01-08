import <%= pascalEntityName %>Route from 'routes/<%= pascalEntityName %>'

describe('(Route) <%= pascalEntityName %>', () => {
  let _route

  beforeEach(() => {
    _route = <%= pascalEntityName %>Route({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `<%= camelEntityName %>`', () => {
    expect(_route.path).to.equal('<%= camelEntityName %>')
  })
})
