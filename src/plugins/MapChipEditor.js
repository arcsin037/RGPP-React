import * as BasicDraw from 'utils/BasicDraw'
import * as NumberUtil from 'utils/NumberUtil'

export const calcSelectedPos = (state, prevState) => {
  const { mouseInfo, padInfo } = state
  const { cellInfo } = prevState
  let { selected: pos } = prevState
  pos = calcSelectedPosByMouseInfo(mouseInfo, pos, cellInfo)
  pos = calcSelectedPosByPadInfo(padInfo, pos)
  return limitedPos(pos, cellInfo)
}

export const calcSelectedPosByMouseInfo = (mouseInfo, prevPos, cellInfo) => {
  const mouseCellPos = calcMouseCellPos(mouseInfo, cellInfo)
  return mouseInfo.isLeftClick ? mouseCellPos : prevPos
}

export const calcMouseCellPos = (mouseInfo, cellInfo) => ({
  x: Math.floor(mouseInfo.x / cellInfo.width),
  y: Math.floor(mouseInfo.y / cellInfo.height)
})

export const calcSelectedPosByPadInfo = (padInfo, prevPos) => {
  const pos = prevPos
  pos.x = padInfo.isKeyOnLeft ? pos.x - 1 : pos.x
  pos.x = padInfo.isKeyOnRight ? pos.x + 1 : pos.x
  pos.y = padInfo.isKeyOnUp ? pos.y - 1 : pos.y
  pos.y = padInfo.isKeyOnDown ? pos.y + 1 : pos.y
  return pos
}

export const limitedPos = (pos, cellInfo) => {
  return {
    x: NumberUtil.clamp(pos.x, 0, cellInfo.col - 1),
    y: NumberUtil.clamp(pos.y, 0, cellInfo.row - 1)
  }
}

class MapChipEditor {
  constructor (cellWidth = 32, cellHeight = 32) {
    this.cellInfo = {
      width: cellWidth,   // width of cell
      height: cellHeight, // height of cell
      col: 0,             // number of columns of map
      row: 0              // number of rows of map
    }
    // selected position
    this.selected = {
      x: 0,
      y: 0
    }
  }
  onInit (state) {
    const { ctx } = state
    this.cellInfo.col = ctx.canvas.width / this.cellInfo.width
    this.cellInfo.row = ctx.canvas.height / this.cellInfo.height
  }
  onUpdate (state) {
    this.selected = calcSelectedPos(state, this)
  }

  onDraw (ctx) {
    ctx.globalAlpha = 1.0
    // draw Green Rectangle in Selected Area
    this.drawCellLargeRect(ctx, this.selected.x, this.selected.y, 0, 255, 0, 1)
  }

  drawCellLargeRect (ctx, x, y, r, g, b, a) {
    BasicDraw.setColor(ctx, r, g, b, a)
    BasicDraw.drawRect(ctx, x * this.cellInfo.width, y * this.cellInfo.height, this.cellInfo.width, this.cellInfo.height, 3)
  }
}

export default MapChipEditor
