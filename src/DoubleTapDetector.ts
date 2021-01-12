import { findElement } from './helpers/find-element.helper'
import { DoubleTap, DoubleTapConfig } from './DoubleTap'
import { GestureCallback } from './interfaces/gesture-callback.interface'

export class DoubleTapDetector extends DoubleTap {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback,
    cfg?: DoubleTapConfig
  ) {
    super(cb, cfg)
    this.element = findElement(element)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
