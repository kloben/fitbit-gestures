import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GESTURE_TYPE } from './enums/gesture-type.enum'
import { GESTURE_STATUS } from './enums/gesture-status.enum'

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
    return this._generateEvent(GESTURE_STATUS.STARTED, evt)
  }

  protected _onMouseUp (evt: MouseEvent) {
    const data = this._generateEvent(GESTURE_STATUS.ENDED, evt)
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
    return this._generateEvent(GESTURE_STATUS.MOVED, evt)
  }

  private _generateEvent (status: GESTURE_STATUS, evt: MouseEvent) {
    if (this.startX === null) {
      return
    }

    this.cb({
      type: GESTURE_TYPE.slide,
      status,
      center: {
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
