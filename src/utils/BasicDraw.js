export const drawLine = (ctx, fromX, fromY, toX, toY) => {
  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}

export const drawRect = (ctx, dstX, dstY, width, height, lineWidth) => {
  ctx.save()
  ctx.lineWidth = lineWidth
  ctx.strokeRect(dstX, dstY, width, height)
  ctx.restore()
}

export const setColor = (ctx, r, g, b, a = 1) => {
  ctx.strokeStyle = `rgba(${r},${g},${b},${a})`
}

export const clear = (ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

export const drawImage = (ctx, img, option) => {
  if (!option) {
    ctx.drawImage(img, 0, 0)
    return
  }
  const {
    sx = 0,
    sy = 0,
    sw = img.width,
    sh = img.height,
    dx = 0,
    dy = 0,
    dw = img.width,
    dh = img.height
  } = option
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

// draw arc
export const drawArc = (ctx, option = {}) => {
  const {
    x = 0,
    y = 0,
    radius = 0,
    startAngle = 0,
    endAngle = Math.PI * 2,
    anticlockwise = false,
    isFill = false
  } = option

  ctx.save()
  ctx.beginPath()
  ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  if (isFill) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
  ctx.resotre()
}

// drawCircle
export const drawCircle = (ctx, option = {}) => {
  const { x, y, radius, isFill } = option
  drawArc(ctx, { x, y, radius, isFill })
}
