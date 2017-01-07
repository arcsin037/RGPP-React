import React from 'react'
import ScenePanel from './ScenePanel'
import { shallow } from 'enzyme'
import MapChipEditor from 'plugins/MapChipEditor'

describe('(Component) ScenePanel', () => {
  let _wrapper
  beforeEach(() => {
    const _props = {
      plugins: [
        new MapChipEditor()
      ],
      width: 640,
      height: 480
    }
    _wrapper = shallow(<ScenePanel {..._props} />)
  })
  it('Should render as a <ControllableCanvas>', () => {
    expect(_wrapper.is('ControllableCanvas')).to.equal(true)
  })
  it('Should have props', () => {
    expect(_wrapper.prop('width')).to.equal(640)
    expect(_wrapper.prop('height')).to.equal(480)
  })
  it('create ScenePanel', () => {
    const props = {
      plugins: [
        new MapChipEditor()
      ]
    }
    const panel = new ScenePanel(props)
    expect(panel.isLoaded).to.equal(false)
    expect(panel.onEvent).to.be.ok
    expect(panel.onInit).to.be.ok
    expect(panel.onUpdate).to.be.ok
    expect(panel.onDraw).to.be.ok
  })
})
