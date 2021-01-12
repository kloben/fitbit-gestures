import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GestureType } from './enums/gesture-type.enum'
import { GestureStatus } from './enums/gesture-status.enum'

export abstract class Slide {
  private startX: number = null
  private lastX: number = null
  private startY: number = null
  private lastY: number = null

  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly cb: GestureCallback
  ) {}

  protected _onMouseDown (evt: MouseEvent) {
    this.startX = evt.screenX
    this.startY = evt.screenY
    this.lastX = evt.screenX
    this.lastY = evt.screenY
    return this._generateEvent(GestureStatus.Started, evt)
  }

  protected _onMouseUp (evt: MouseEvent) {
    const data = this._generateEvent(GestureStatus.Ended, evt)
    this.startX = null
    this.startY = null
    this.lastX = null
    this.lastY = null
    return data
  }

  protected _onMouseMove (evt: MouseEvent) {
    if (this.lastX === evt.screenX && this.lastY === evt.screenY) {
      return
    }
    this.lastX = evt.screenX
    this.lastY = evt.screenY
    return this._generateEvent(GestureStatus.Moved, evt)
  }

  private _generateEvent (status: GestureStatus, evt: MouseEvent) {
    if (this.startX === null) {
      return
    }

    this.cb({
      type: GestureType.Slide,
      status,
      point: {
        x: evt.screenX,
        y: evt.screenY
      },
      from: {
        x: this.startX,
        y: this.startY
      }
    })
  }
}
