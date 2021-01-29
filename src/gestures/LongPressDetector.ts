import { LongPress, LongPressConfig } from './LongPress'
import { FindElement } from '../helpers/dom.helper'
import { GestureCallback } from '../interfaces/gesture-callback.interface'

export class LongPressDetector extends LongPress {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback,
    cfg?: LongPressConfig
  ) {
    super(cb, cfg)
    this.element = FindElement(element)
    this.element.onmousedown = this._onMouseDown.bind(this)
    this.element.onmouseup = this._onMouseUp.bind(this)
    this.element.onmousemove = this._onMouseMove.bind(this)
    return this
  }
}
