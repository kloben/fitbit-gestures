import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { IsInsideThreshold } from '../helpers/point.helper'

export interface TapConfig {
  interval: number,
  threshold: number
}

export abstract class Tap {
  private readonly interval: number
  private readonly threshold: number
  private initialPoint: Point
  private initialTime: number

  constructor (
    private readonly cb: GestureCallback,
    cfg?: TapConfig
  ) {
    this.interval = cfg?.interval || 250
    this.threshold = cfg?.threshold || 10
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
    if (now - this.initialTime <= this.threshold && IsInsideThreshold(this.initialPoint, {
      x: evt.screenX,
      y: evt.screenY
    }, this.threshold)) {
      this.cb({
        type: GestureType.Tap,
        point: this.initialPoint
      })
    }

    this.initialPoint = null
    this.initialTime = null
  }
}
