import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'
import { GetPoint, IsInsideThreshold, IsSamePoint } from '../helpers/point.helper'

export interface SlideConfig {
  threshold?: number
}

export abstract class Slide {
  private readonly minThreshold: number
  private startPoint: Point
  private lastPoint: Point

  constructor (
    private readonly cb: GestureCallback,
    cfg?: SlideConfig
  ) {
    this.minThreshold = cfg?.threshold || 10
  }

  protected _onMouseDown (evt: MouseEvent) {
    this.startPoint = GetPoint(evt)
  }

  protected _onMouseMove (evt: MouseEvent) {
    const movePoint = GetPoint(evt)
    if (!this.startPoint || IsSamePoint(movePoint, this.startPoint) || IsInsideThreshold(movePoint, this.startPoint, this.minThreshold)) {
      return
    }
    this.lastPoint = movePoint
    return this._generateEvent(false, movePoint)
  }

  protected _onMouseUp (evt: MouseEvent) {
    if (!this.lastPoint || !this.startPoint) {
      return
    }
    const data = this._generateEvent(true, GetPoint(evt))
    this.startPoint = null
    this.lastPoint = null
    return data
  }

  private _generateEvent (ended: boolean, point: Point) {
    this.cb({
      type: GestureType.Slide,
      ended,
      point,
      from: this.startPoint
    })
  }
}
