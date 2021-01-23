import { GestureCallback } from '../interfaces/gesture-callback.interface'
import { GestureType } from '../enums/gesture-type.enum'
import { Point } from '../interfaces/point.interface'

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
    const point = { x: evt.screenX, y: evt.screenY }
    this.startPoint = point
    this.lastPoint = point
  }

  protected _onMouseMove (evt: MouseEvent) {
    if (!this.startPoint || (this.lastPoint.x === evt.screenX && this.lastPoint.y === evt.screenY)) {
      return
    }
    this.lastPoint = { x: evt.screenX, y: evt.screenY }
    return this._generateEvent(false, { x: evt.screenX, y: evt.screenY })
  }

  protected _onMouseUp (evt: MouseEvent) {
    const data = this._generateEvent(true, { x: evt.screenX, y: evt.screenY })
    this.startPoint = null
    this.lastPoint = null
    return data
  }

  private _generateEvent (ended: boolean, point: Point) {
    if (!this.startPoint) {
      return
    }

    this.cb({
      type: GestureType.Slide,
      ended,
      point,
      from: this.startPoint
    })
  }
}
