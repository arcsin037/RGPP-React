import <%= pascalEntityName %> from './<%= pascalEntityName %>'

describe('(Models) <%= pascalEntityName %>', () => {
  it('Should create instance', () => {
    const instance = new <%= pascalEntityName %>()
    expect(instance).to.be.ok
  })
})
