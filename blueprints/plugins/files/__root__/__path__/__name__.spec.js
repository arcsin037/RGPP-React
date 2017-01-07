import <%= pascalEntityName %> from './<%= pascalEntityName %>'

describe('(Plugins) <%= pascalEntityName %>', () => {
  let instance
  before(() => {
    instance = new <%= pascalEntityName %>()
  })
  it('shoud have onInit function', () => {
    expect(instance.onInit).to.be.a('function')
  })
  it('shoud have onUpdate function', () => {
    expect(instance.onUpdate).to.be.a('function')
  })
  it('shoud have onDraw function', () => {
    expect(instance.onDraw).to.be.a('function')
  })
})
