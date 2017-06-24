import Script from 'scripts/Script'
import * as BasicDraw from 'utils/BasicDraw'

class drawCircleSample extends Script {
  draw (ctx) {
    const option = {
      x: 320,
      y: 240,
      radius: 120,
      isFill: false
    }
    BasicDraw.drawCircle(ctx, option)
  }
}

export default drawCircleSample
