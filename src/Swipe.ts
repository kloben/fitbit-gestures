import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GESTURE_DIRECTION } from './enums/gesture-direction.enum'
import { GESTURE_TYPE } from './enums/gesture-type.enum'

export interface SwipeConfig {
  threshold: number
}

export abstract class Swipe {
  private readonly threshold: number
  private initY: number = 0
  private initX: number = 0

  constructor (
    private readonly cb: GestureCallback,
    cfg?: SwipeConfig
  ) {
    this.threshold = cfg?.threshold || 100
  }

  protected _onMouseDown (evt: MouseEvent) {
    this.initY = evt.screenY
    this.initX = evt.screenX
  }

  protected _onMouseUp (evt: MouseEvent) {
    if (!this.initX) {
      return
    }
    const dir = this.getDirection(evt.screenX - this.initX, evt.screenY - this.initY)
    if (dir) {
      this.cb({
        type: GESTURE_TYPE.swipe,
        dir,
        center: {
          x: evt.screenX,
          y: evt.screenY
        },
        from: {
          x: this.initX,
          y: this.initY
        }
      })
    }
    this.initX = null
    this.initY = null
  }

  private getDirection (x: number, y: number): GESTURE_DIRECTION | void {
    if (y < -this.threshold) {
      return GESTURE_DIRECTION.up
    } else if (y > this.threshold) {
      return GESTURE_DIRECTION.down
    } else if (x < -this.threshold) {
      return GESTURE_DIRECTION.left
    } else if (x > this.threshold) {
      return GESTURE_DIRECTION.right
    }
  }
}
