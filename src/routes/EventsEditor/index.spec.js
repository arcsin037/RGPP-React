import EventsEditorRoute from 'routes/EventsEditor'

describe('(Route) EventsEditor', () => {
  let _route

  beforeEach(() => {
    _route = EventsEditorRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `events`', () => {
    expect(_route.path).to.equal('events-editor')
  })
})
