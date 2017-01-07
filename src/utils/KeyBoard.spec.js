import KeyBoard from './KeyBoard'

describe('(Utils) KeyBoard', () => {
  const keyboard = new KeyBoard()
  it('should exists', () => {
    expect(keyboard).to.be.ok
    expect(keyboard.keyInfo().key.length).to.be.eql(256)
    expect(keyboard.keyInfo().keyPrevious.length).to.be.eql(256)
  })
})
