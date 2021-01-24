import { FindElement } from '../helpers/dom.helper'
import { DoubleTap, DoubleTapConfig } from './DoubleTap'
import { GestureCallback } from '../interfaces/gesture-callback.interface'

export class DoubleTapDetector extends DoubleTap {
  private readonly element: Element

  constructor (
    element: string | Element,
    cb: GestureCallback,
    cfg?: DoubleTapConfig
  ) {
    super(cb, cfg)
    this.element = FindElement(element)
    this.element.onmouseup = this._onMouseUp.bind(this)
  }
}
