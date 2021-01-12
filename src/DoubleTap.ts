import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GestureType } from './enums/gesture-type.enum'

export interface DoubleTapConfig {
  interval: number
}

export abstract class DoubleTap {
  private readonly interval: number
  private lastTap: number | null = null

  constructor (
    private readonly cb: GestureCallback,
    cfg?: DoubleTapConfig
  ) {
    this.interval = cfg?.interval || 250
  }

  protected _onMouseUp (evt: MouseEvent) {
    const now = Date.now()
    if (now && now - this.lastTap < 250) {
      this.cb({
        type: GestureType.DoubleTap,
        point: {
          x: evt.screenX,
          y: evt.screenY
        }
      })
    }
    this.lastTap = now
  }
}
