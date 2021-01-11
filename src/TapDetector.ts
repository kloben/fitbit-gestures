import { findElement } from './helpers/find-element.helper'
import { GestureCallback } from './interfaces/gesture-callback.interface'
import { Tap } from './Tap'

export class TapDetector extends Tap {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback
  ) {
    super(cb)
    this.element = findElement(element)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
