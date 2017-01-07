import KeyBoard from './KeyBoard'
import Pad from './Pad'

describe('(Utils) Pad', () => {
  const pad = new Pad(new KeyBoard())
  it('should exists', () => {
    expect(pad).to.be.ok
    expect(pad.keyboard).to.be.ok
  })
})
