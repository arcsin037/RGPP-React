import Event, {
  EVENT_TYPE_NORMAL,
  EVENT_TYPE_COMMON
} from './Event'

describe('(Models) Event', () => {
  it('Should export a constant EVENT_TYPE_NORMAL.', () => {
    expect(EVENT_TYPE_NORMAL).to.eql('EVENT_TYPE_NORMAL')
  })
  it('Should export a constant EVENT_TYPE_COMMON.', () => {
    expect(EVENT_TYPE_COMMON).to.eql('EVENT_TYPE_COMMON')
  })
  it('Should create instance', () => {
    const instance = new Event()
    expect(instance).to.be.ok
  })
  it('Should set default value', () => {
    const instance = new Event()
    expect(instance.get('id')).to.eql(0)
    expect(instance.get('name')).to.eql('Event')
    expect(instance.get('type')).to.eql(EVENT_TYPE_NORMAL)
  })
  it('Should set value by constructor', () => {
    const instance = new Event({
      id: 1,
      name: 'hoge',
      type: EVENT_TYPE_COMMON
    })
    expect(instance.get('id')).to.eql(1)
    expect(instance.get('name')).to.eql('hoge')
    expect(instance.get('type')).to.eql(EVENT_TYPE_COMMON)
  })
  it('Should set name', () => {
    let instance = new Event()
    expect(instance.get('name')).to.eql('Event')
    instance = instance.setName('name')
    expect(instance.get('name')).to.eql('name')
    instance = instance.setName('another name')
    expect(instance.get('name')).to.eql('another name')
    instance = instance.setName('')
    expect(instance.get('name')).to.eql('')
  })
  it('Should set type', () => {
    let instance = new Event()
    expect(instance.get('type')).to.eql(EVENT_TYPE_NORMAL)
    instance = instance.setType(EVENT_TYPE_NORMAL)
    expect(instance.get('type')).to.eql(EVENT_TYPE_NORMAL)
    instance = instance.setType(EVENT_TYPE_COMMON)
    expect(instance.get('type')).to.eql(EVENT_TYPE_COMMON)
  })
})
