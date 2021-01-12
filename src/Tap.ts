import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GestureType } from './enums/gesture-type.enum'

export abstract class Tap {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private readonly cb: GestureCallback
  ) {
  }

  protected _onMouseUp (evt: MouseEvent) {
    this.cb({
      type: GestureType.Tap,
      point: {
        x: evt.screenX,
        y: evt.screenY
      }
    })
  }
}
