import {
  INIT_ACTION
} from './constants'

describe('(Redux) constants', () => {
  it('Should export a constant INIT_ACTION.', () => {
    expect(INIT_ACTION).to.eql('@@INIT')
  })
})
