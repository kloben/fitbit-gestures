import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { GetDirection, GetPoint } from '../helpers/point.helper'

export interface SwipeConfig {
  threshold?: number
}

export abstract class Swipe {
  private readonly minThreshold: number
  private startPoint: Point

  constructor (
    private readonly cb: GestureCallback,
    cfg?: SwipeConfig
  ) {
    this.minThreshold = cfg?.threshold || 100
  }

  protected _onMouseDown (evt: MouseEvent) {
    this.startPoint = GetPoint(evt)
  }

  protected _onMouseMove (evt: MouseEvent) {
    if (!this.startPoint) {
      this.startPoint = GetPoint(evt)
    }
  }

  protected _onMouseUp (evt: MouseEvent) {
    if (!this.startPoint) {
      return
    }
    const finalPoint = GetPoint(evt)
    const dir = GetDirection(this.startPoint, finalPoint, this.minThreshold)
    if (dir) {
      this.cb({
        type: GestureType.Swipe,
        dir,
        point: finalPoint,
        from: this.startPoint
      })
    }
    this.startPoint = null
  }
}
