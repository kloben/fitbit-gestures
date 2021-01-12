import { Point } from './interfaces/point.interface'
import { GestureCallback } from './interfaces/gesture-callback.interface'
import { GestureType } from './enums/gesture-type.enum'

export interface LongPressConfig {
  time?: number,
  threshold?: number
}

export abstract class LongPress {
  private readonly minTime: number
  private readonly threshold: number
  private startPos: Point | null
  private timeout: number = null
  private executed = false

  constructor (
    private readonly cb: GestureCallback,
    cfg?: LongPressConfig
  ) {
    this.minTime = cfg?.time || 300
    this.threshold = cfg?.time || 10
  }

  protected _onMouseDown (evt: MouseEvent) {
    this._init(evt)
  }

  protected _onMouseMove (evt: MouseEvent) {
    if (this.executed || !this.startPos) {
      return
    }
    if (
      Math.abs(evt.screenX - this.startPos.x) > this.threshold ||
      Math.abs(evt.screenY - this.startPos.y) > this.threshold
    ) {
      this.executed = true
      this._reset()
    }
  }

  protected _onMouseUp () {
    this._reset()
  }

  private _init (evt: MouseEvent) {
    this._reset()
    this.timeout = setTimeout(this._execute.bind(this), this.minTime)
    this.startPos = {
      x: evt.screenX,
      y: evt.screenY
    }
  }

  private _reset () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.startPos = null
    this.executed = false
  }

  private _execute () {
    this.executed = true
    this.cb({
      type: GestureType.LongPress,
      point: this.startPos
    })
  }
}
