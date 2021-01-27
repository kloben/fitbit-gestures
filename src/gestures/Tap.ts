import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { GetPoint, IsInsideThreshold } from '../helpers/point.helper'

export interface TapConfig {
  interval?: number,
  threshold?: number
}

export abstract class Tap {
  private readonly maxInterval: number
  private readonly maxThreshold: number
  private initialPoint: Point
  private initialTime: number

  constructor (
    private readonly cb: GestureCallback,
    cfg?: TapConfig
  ) {
    this.maxInterval = cfg?.interval || 250
    this.maxThreshold = cfg?.threshold || 10
  }

  protected _onMouseDown (evt: MouseEvent) {
    this.initialPoint = {
      x: evt.screenX,
      y: evt.screenY
    }
    this.initialTime = Date.now()
  }

  protected _onMouseUp (evt: MouseEvent) {
    if (!this.initialTime || !this.initialPoint) {
      return
    }
    const now = Date.now()
    const finalPoint = GetPoint(evt)
    if (now - this.initialTime <= this.maxInterval && IsInsideThreshold(this.initialPoint, finalPoint, this.maxThreshold)) {
      this.cb({
        type: GestureType.Tap,
        point: finalPoint
      })
    }

    this.initialPoint = null
    this.initialTime = null
  }
}
