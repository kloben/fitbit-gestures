import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GESTURE_TYPE } from './enums/gesture-type.enum'

export abstract class Tap {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly cb: GestureCallback
  ) {
  }

  protected _onMouseUp (evt: MouseEvent) {
    this.cb({
      type: GESTURE_TYPE.tap,
      center: {
        x: evt.screenX,
        y: evt.screenY
      }
    })
  }
}
