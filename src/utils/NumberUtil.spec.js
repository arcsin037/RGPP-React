import * as NumberUtil from './NumberUtil'

describe('(Utils) NumberUtil', () => {
  describe('clamp', () => {
    const testCases = [{
      value: 1,
      min: 0,
      max: 2,
      result: 1
    }, {
      value: 1,
      min: -1,
      max: 5,
      result: 1
    }, {
      value: 10,
      min: 0,
      max: 2,
      result: 2
    }, {
      value: 1,
      min: -3,
      max: -1,
      result: -1
    }, {
      value: -5,
      min: -3,
      max: -1,
      result: -3
    }]

    testCases.forEach((testCase) => {
      it(`{value: ${testCase.value} min: ${testCase.min}, max: ${testCase.max}} => ${testCase.result}`, () => {
        expect(NumberUtil.clamp(testCase.value, testCase.min, testCase.max)).to.eql(testCase.result)
      })
    })
  })
  describe('getNotExistMinPositiveInt', () => {
    it('Should get 0 in empty array', () => {
      const array = []
      expect(NumberUtil.getNotExistMinPositiveInt(array)).to.eql(0)
    })
    it('Should get empty interger', () => {
      const array = [0, 1, 3]
      expect(NumberUtil.getNotExistMinPositiveInt(array)).to.eql(2)
    })
    it('Should get last number', () => {
      const array = [2, 0, 1]
      expect(NumberUtil.getNotExistMinPositiveInt(array)).to.eql(3)
    })
    it('Should get 0', () => {
      const array = [2, 3, 4]
      expect(NumberUtil.getNotExistMinPositiveInt(array)).to.eql(0)
    })
  })
})
