import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureDirection } from '../enums/gesture-direction.enum'
import { GestureType } from '../enums/gesture-type.enum'

export interface SwipeConfig {
  threshold: number
}

export abstract class Swipe {
  private readonly threshold: number
  private initY = 0
  private initX = 0

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
        type: GestureType.Swipe,
        dir,
        point: {
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

  private getDirection (x: number, y: number): GestureDirection | void {
    if (y < -this.threshold) {
      return GestureDirection.Up
    } else if (y > this.threshold) {
      return GestureDirection.Down
    } else if (x < -this.threshold) {
      return GestureDirection.Left
    } else if (x > this.threshold) {
      return GestureDirection.Right
    }
  }
}