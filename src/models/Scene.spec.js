import Scene from './Scene'

describe('(Models) Scene', () => {
  it('Should create instance', () => {
    const instance = new Scene()
    expect(instance).to.be.ok
  })
  it('Should set default value', () => {
    const instance = new Scene()
    expect(instance.get('id')).to.eql(0)
    expect(instance.get('name')).to.eql('Scene')
  })
  it('Should set value by constructor', () => {
    const instance = new Scene({
      id: 1,
      name: 'hoge'
    })
    expect(instance.get('id')).to.eql(1)
    expect(instance.get('name')).to.eql('hoge')
  })
  it('Should set name', () => {
    let instance = new Scene()
    expect(instance.get('name')).to.eql('Scene')
    instance = instance.setName('name')
    expect(instance.get('name')).to.eql('name')
    instance = instance.setName('another name')
    expect(instance.get('name')).to.eql('another name')
    instance = instance.setName('')
    expect(instance.get('name')).to.eql('')
  })
})
