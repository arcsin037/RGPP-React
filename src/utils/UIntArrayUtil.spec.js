import * as UIntArrayUtil from './UIntArrayUtil'

describe('(Utils) UIntArrayUtil', () => {
  describe('getNotExistMinUInt', () => {
    it('Should get 0 in empty array', () => {
      const array = []
      expect(UIntArrayUtil.getNotExistMinUInt(array)).to.eql(0)
    })
    it('Should get empty interger', () => {
      const array = [0, 1, 3]
      expect(UIntArrayUtil.getNotExistMinUInt(array)).to.eql(2)
    })
    it('Should get last number', () => {
      const array = [2, 0, 1]
      expect(UIntArrayUtil.getNotExistMinUInt(array)).to.eql(3)
    })
    it('Should get 0', () => {
      const array = [2, 3, 4]
      expect(UIntArrayUtil.getNotExistMinUInt(array)).to.eql(0)
    })
  })
  describe('getMinUInt', () => {
    it('Should get 0 in empty array', () => {
      const array = []
      expect(UIntArrayUtil.getMinUInt(array)).to.eql(0)
    })
    it('Should get minimum interger', () => {
      const array = [1, 3, 2]
      expect(UIntArrayUtil.getMinUInt(array)).to.eql(1)
    })
    it('Should get minimum positive interger', () => {
      const array = [-1, 3, 4]
      expect(UIntArrayUtil.getMinUInt(array)).to.eql(3)
    })
    it('Should get minimum positive interger', () => {
      const array = [0, 3, 4]
      expect(UIntArrayUtil.getMinUInt(array)).to.eql(0)
    })
  })
})
