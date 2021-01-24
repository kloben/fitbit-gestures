import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureDirection } from '../enums/gesture-direction.enum'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { GetDirection, GetDistance, GetPoint } from '../helpers/point.helper'

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

  protected _onMouseUp (evt: MouseEvent) {
    if (!this.startPoint) {
      return
    }
    const finalPoint = GetPoint(evt)
    const distance = GetDistance(this.startPoint, finalPoint)
    if (distance >= this.minThreshold) {
      this.cb({
        type: GestureType.Swipe,
        dir: GetDirection(this.startPoint, finalPoint, this.minThreshold),
        point: finalPoint,
        from: this.startPoint
      })
    }
    this.startPoint = null
  }

  private getDirection (x: number, y: number): GestureDirection {
    if (y < -this.minThreshold) {
      return GestureDirection.Up
    } else if (y > this.minThreshold) {
      return GestureDirection.Down
    } else if (x < -this.minThreshold) {
      return GestureDirection.Left
    } else if (x > this.minThreshold) {
      return GestureDirection.Right
    }
  }
}
