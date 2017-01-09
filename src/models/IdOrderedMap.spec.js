import { OrderedMap, Map } from 'immutable'
import IdOrderedMap, {
  ITEMS_KEY,
  SELECTED_ID_KEY
} from './IdOrderedMap'

describe('(Models) IdOrderedMap', () => {
  it('Should export a constant ITEMS_KEY.', () => {
    expect(ITEMS_KEY).to.eql('items')
  })
  it('Should export a constant SELECTED_ID_KEY.', () => {
    expect(SELECTED_ID_KEY).to.eql('selectedId')
  })
  it('Should create instance by default constructor', () => {
    const instance = new IdOrderedMap()
    expect(instance).to.be.ok
    expect(instance.get(SELECTED_ID_KEY)).to.eql('0')
    expect(instance.get(ITEMS_KEY).toObject()).to.eql(OrderedMap().toObject())
  })
  it('Should create instance by constructor', () => {
    const instance = new IdOrderedMap(Map({
      [SELECTED_ID_KEY]: '12',
      [ITEMS_KEY]: Map({
        '0': Map({ id: 0 }),
        '1': Map({ id: 1 })
      })
    }))
    expect(instance).to.be.ok
    expect(instance.get(SELECTED_ID_KEY)).to.eql('12')
    const expected = Map({
      '0': Map({ id: 0 }),
      '1': Map({ id: 1 })
    })
    expect(instance.get(ITEMS_KEY).toObject()).to.eql(expected.toObject())
  })
})
