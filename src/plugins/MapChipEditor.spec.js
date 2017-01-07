import MapChipEditor from './MapChipEditor'

describe('(Plugins) MapChipEditor', () => {
  describe('class MapChipEditor', () => {
    let instance
    before(() => {
      instance = new MapChipEditor()
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
  describe('functions', () => {

  })
})
