import { OrderedMap } from 'immutable'
import Scenes from './Scenes'

describe('(Models) Scenes', () => {
  let _instance
  beforeEach(() => {
    _instance = new Scenes()
  })
  it('Should create instance', () => {
    expect(_instance).to.be.ok
  })
  it('Should set default value', () => {
    expect(_instance.getSelectedId()).to.eql('0')
    expect(_instance.getItems()).to.eql(OrderedMap())
  })
  it('Should selectScene', () => {
    _instance = _instance.select(1)
    expect(_instance.getSelectedId()).to.eql('1')
    _instance = _instance.select(5)
    expect(_instance.getSelectedId()).to.eql('5')
  })
  it('Should add and remove scene', () => {
    // Add scene
    _instance = _instance.addScene()
    expect(_instance.getItems().size).to.eql(1)
    expect(_instance.getItem(0).get('id')).to.eql(0)

    // Add Scene
    _instance = _instance.addScene()
    expect(_instance.getItems().size).to.eql(2)
    expect(_instance.getItem(1).get('id')).to.eql(1)

    // Add Scene
    _instance = _instance.addScene()
    expect(_instance.getItems().size).to.eql(3)
    expect(_instance.getItem(2).get('id')).to.eql(2)

    // Remove Scene
    _instance = _instance.removeScene(1)
    expect(_instance.getItems().size).to.eql(2)
    expect(_instance.getItem(1)).to.eql(undefined)

    // Add Scene
    _instance = _instance.addScene()
    expect(_instance.getItems().size).to.eql(3)
    expect(_instance.getItem(1).get('id')).to.eql(1)
  })
})
