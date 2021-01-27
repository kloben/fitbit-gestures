import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { GetPoint, IsInsideThreshold } from '../helpers/point.helper'

export interface DoubleTapConfig {
  interval?: number,
  threshold?: number
}

export abstract class DoubleTap {
  private readonly maxInterval: number
  private readonly maxThreshold: number
  private lastTime: number | null = null
  private lastPoint: Point

  constructor (
    private readonly cb: GestureCallback,
    cfg?: DoubleTapConfig
  ) {
    this.maxInterval = cfg?.interval || 250
    this.maxThreshold = cfg?.threshold || 10
  }

  protected _onMouseUp (evt: MouseEvent) {
    const now = Date.now()
    const actualPoint = GetPoint(evt)

    if (
      this.lastTime &&
      this.lastPoint &&
      now - this.lastTime <= this.maxInterval &&
      IsInsideThreshold(this.lastPoint, actualPoint, this.maxThreshold)
    ) {
      this.cb({
        type: GestureType.DoubleTap,
        point: actualPoint
      })
      this.lastTime = null
      this.lastPoint = null
      return
    }
    this.lastTime = now
    this.lastPoint = actualPoint
  }
}
